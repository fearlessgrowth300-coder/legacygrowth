import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentSubmissionInput {
  full_name: string;
  email: string;
  whatsapp?: string;
  amount: string;
  package_type?: string;
  receipt_path?: string | null;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const input = (await req.json()) as PaymentSubmissionInput;

    // Basic server-side validation
    if (!input?.full_name || !input?.email || !input?.amount) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert via service role
    const { data: submission, error: insertError } = await supabase
      .from('payment_submissions')
      .insert({
        full_name: input.full_name,
        email: input.email,
        whatsapp: input.whatsapp ?? null,
        amount: input.amount,
        package_type: input.package_type ?? null,
        receipt_url: input.receipt_path ?? null,
      })
      .select()
      .single();

    if (insertError || !submission) {
      console.error("Insert error:", insertError);
      throw new Error("Failed to record submission");
    }

    const submissionId = submission.id as string;
    const confirmUrl = `${supabaseUrl.replace('.supabase.co', '')}/functions/v1/confirm-payment?id=${submissionId}`;

    // Create a short-lived signed URL for the receipt (admin only sees it via email)
    let receiptLink: string | null = null;
    if (input.receipt_path) {
      const { data: signed } = await supabase.storage
        .from('receipts')
        .createSignedUrl(input.receipt_path, 60 * 60 * 24 * 7); // 7 days
      receiptLink = signed?.signedUrl ?? null;
    }

    const adminEmail = await resend.emails.send({
      from: "Payment Notifications <onboarding@resend.dev>",
      to: ["harperharvey834@gmail.com"],
      subject: `New Payment Receipt – ${input.full_name} – ${input.package_type || 'Package'} – ${input.amount}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">New Payment Receipt Submitted</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${input.full_name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>WhatsApp:</strong> ${input.whatsapp || 'Not provided'}</p>
            <p><strong>Amount:</strong> ${input.amount}</p>
            <p><strong>Package:</strong> ${input.package_type || 'Not specified'}</p>
          </div>
          ${receiptLink ? `<p><strong>Receipt:</strong> <a href="${receiptLink}">View Receipt</a></p>` : ''}
          <div style="margin: 30px 0;">
            <a href="${confirmUrl}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">✓ Confirm Payment</a>
          </div>
          <p style="color: #666; font-size: 14px;">Click the button above to confirm this payment and notify the customer.</p>
        </div>
      `,
    });

    const userEmail = await resend.emails.send({
      from: "Team Harper <onboarding@resend.dev>",
      to: [input.email],
      subject: "Payment Received – Verifying",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Thanks, ${input.full_name}!</h2>
          <p>We've received your payment receipt and are currently verifying your transfer for:</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Package:</strong> ${input.package_type || 'Your selected package'}</p>
            <p><strong>Amount:</strong> ${input.amount}</p>
          </div>
          <p>You'll receive a "Payment Confirmed" email shortly once we verify everything.</p>
          <p style="margin-top: 30px;">Best regards,<br>Team Harper</p>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmail);
    console.log("User email sent:", userEmail);

    return new Response(
      JSON.stringify({ success: true, submissionId }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-payment-email function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process submission" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
