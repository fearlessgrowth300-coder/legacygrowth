import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

interface TwoStepCTAModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaType: "general" | "funnel" | "setup";
}

export function TwoStepCTAModal({ isOpen, onClose, ctaType }: TwoStepCTAModalProps) {
  const [step, setStep] = useState(1);
  const [roadblockAnswer, setRoadblockAnswer] = useState("");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });
  const { toast } = useToast();

  const roadblockQuestions = {
    general: {
      question: "What's your biggest challenge with making money online?",
      options: [
        "I don't know where to start",
        "I've tried but nothing works",
        "I lack technical skills",
        "I don't have enough time",
        "I'm not sure what to sell"
      ]
    },
    funnel: {
      question: "What's blocking your sales funnel from converting?",
      options: [
        "No traffic to my funnel",
        "People visit but don't buy",
        "I don't have a funnel yet",
        "My funnel is too complicated",
        "I don't know how to track results"
      ]
    },
    setup: {
      question: "Where are you in your digital business journey?",
      options: [
        "Complete beginner",
        "Have some content but no sales",
        "Making sales but want to scale",
        "Struggling with consistency",
        "Need better systems"
      ]
    }
  };

  const currentQuestion = roadblockQuestions[ctaType];

  const handleContactSubmit = () => {
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || ''
    };

    // Store lead data (you can add webhook here)
    const leadData = {
      ...contactData,
      roadblockAnswer,
      ctaType,
      timestamp: new Date().toISOString(),
      utmParams
    };

    console.log('Lead captured:', leadData);

    // Open WhatsApp
    window.open(getWhatsAppLink(`Hi Harper! I'm ${contactData.name}. 

My biggest challenge: ${roadblockAnswer}

I'd like to discuss how you can help me overcome this and start earning online.

Contact Details:
📧 Email: ${contactData.email}
📱 WhatsApp: ${contactData.whatsapp}

${Object.entries(utmParams).filter(([key, value]) => value).map(([key, value]) => `${key}: ${value}`).join('\n')}`), "_blank");
    
    onClose();
    toast({
      title: "Success! 🎉",
      description: "Redirecting to WhatsApp with your personalized message...",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-[hsl(222,33%,10%)] text-white border border-primary/40">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-base font-extrabold uppercase tracking-wide text-primary">
            {step === 1 ? "Quick Question..." : "Let's Connect!"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-heading text-xl font-bold text-white mb-2">{currentQuestion.question}</h3>
              <p className="text-white/70 text-sm">This helps me give you the most relevant advice</p>
            </div>

            <RadioGroup value={roadblockAnswer} onValueChange={setRoadblockAnswer} className="space-y-1">
              {currentQuestion.options.map((option, index) => (
                <Label
                  key={index}
                  htmlFor={`option-${index}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <RadioGroupItem
                    value={option}
                    id={`option-${index}`}
                    className="border-white/40 text-primary"
                  />
                  <span className="text-white font-medium">{option}</span>
                </Label>
              ))}
            </RadioGroup>

            <Button
              onClick={() => setStep(2)}
              disabled={!roadblockAnswer}
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-extrabold uppercase tracking-wide py-6"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-heading text-xl font-bold text-white mb-2">Perfect! Let me help you with that.</h3>
              <p className="text-white/70 text-sm">Share your contact details so I can send you a personalized solution</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  placeholder="Your first name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  value={contactData.whatsapp}
                  onChange={(e) => setContactData({ ...contactData, whatsapp: e.target.value })}
                  placeholder="+1234567890"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleContactSubmit}
                disabled={!contactData.name || !contactData.email || !contactData.whatsapp}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-extrabold uppercase tracking-wide py-6"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get My Personalized Solution
              </Button>
              
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                ← Back
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}