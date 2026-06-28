import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Rocket, TrendingUp, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const stages = [
  {
    phase: "Phase 1",
    title: "Setup",
    description: "Store, Beacons, Affiliate link, Payments",
    timeline: "Day 1-2",
    icon: Settings,
    details: [
      "Complete Beacons.ai store setup",
      "Payment gateway integration",
      "Affiliate link optimization",
      "Professional branding setup",
    ],
  },
  {
    phase: "Phase 2",
    title: "Launch",
    description: "Social media, content, posting system",
    timeline: "Day 3-5",
    icon: Rocket,
    details: [
      "Content strategy development",
      "Automated posting system",
      "Instagram & Facebook optimization",
      "Engagement funnel creation",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    description: "Lead generation, funnel, automation",
    timeline: "Day 6+",
    icon: TrendingUp,
    details: [
      "Advanced funnel optimization",
      "Lead generation automation",
      "ManyChat integration",
      "Revenue scaling systems",
    ],
  },
];

export function ThreeStagePromiseSection() {
  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink(
        "Hey Harper, I love your 3-Stage Promise system! I'm ready to go through all three phases and build a real business. Let's start with Phase 1!"
      ),
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-[hsl(222,33%,11%)]">
      <div className="container mx-auto px-4">
        {/* Top: heading left, intro right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-14 max-w-6xl mx-auto">
          <div>
            <span className="inline-block rounded-full bg-primary/20 text-primary font-heading text-xs font-bold uppercase tracking-wide px-4 py-1.5 mb-4">
              ✨ Proven Framework
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
              Harper's 3-Stage Promise
            </h2>
          </div>
          <p className="text-white/70 text-lg leading-relaxed lg:pt-2">
            This isn't random help — it's a structured system that's worked for 100+
            students. Here's exactly how we'll transform your digital business.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/[0.08] transition-colors"
              >
                <Icon className="h-9 w-9 text-white mb-5" />
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
                  {stage.phase} · {stage.timeline}
                </span>
                <h3 className="font-heading text-xl font-extrabold uppercase text-white mt-1 mb-2">
                  {stage.title}
                </h3>
                <p className="text-white/60 mb-5">{stage.description}</p>

                <div className="space-y-3">
                  {stage.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
          <h3 className="font-heading text-2xl font-extrabold uppercase text-white mb-3">
            Ready to Go Through All 3 Phases?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Most people try to figure this out alone and get stuck in Phase 1 forever. With
            Harper's guidance, you'll move through all 3 phases systematically.
          </p>
          <Button
            size="xl"
            onClick={handleWhatsAppClick}
            className="rounded-full font-heading font-extrabold uppercase tracking-wide text-base px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Phase 1 Today
          </Button>
        </div>
      </div>
    </section>
  );
}
