
-- Lock down payment_submissions: only service_role (edge functions) can read/update.
-- Anonymous public form still inserts via anon key.
DROP POLICY IF EXISTS "Users can view their own submissions" ON public.payment_submissions;
DROP POLICY IF EXISTS "Admin can update submissions" ON public.payment_submissions;
DROP POLICY IF EXISTS "Anyone can submit payment receipts" ON public.payment_submissions;

-- Re-create restrictive policies
CREATE POLICY "Anonymous can submit payment receipts"
ON public.payment_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending' AND google_sheet_synced = false);

-- No SELECT/UPDATE/DELETE policies for anon/authenticated.
-- service_role bypasses RLS for edge functions (confirm-payment, send-payment-email).

-- Revoke unnecessary table privileges from anon/authenticated; only INSERT is needed.
REVOKE ALL ON public.payment_submissions FROM anon, authenticated;
GRANT INSERT ON public.payment_submissions TO anon, authenticated;
GRANT ALL ON public.payment_submissions TO service_role;

-- Storage receipts bucket: drop public read; scope uploads to a 'submissions/' prefix.
DROP POLICY IF EXISTS "Anyone can view receipts" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload receipts" ON storage.objects;

-- Allow anonymous uploads only into the receipts bucket under 'submissions/' prefix.
CREATE POLICY "Public can upload payment receipts under submissions prefix"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'receipts'
  AND (storage.foldername(name))[1] = 'submissions'
);

-- No SELECT policy on receipts for anon/authenticated; edge functions use service_role.
