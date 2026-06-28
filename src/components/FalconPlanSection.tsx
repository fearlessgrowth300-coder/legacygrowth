import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const items = [
  {
    title: "We help you turn your course into a real offer",
    text: 'Not just "buy my course," but a clear reason why someone should trust you and take the next step.',
  },
  {
    title: "We fix your profile so strangers understand you fast",
    text: "Bio, highlights, pinned posts, page message, trust signals, and buyer-focused positioning.",
  },
  {
    title: "We build your funnel direction",
    text: "Beacons, Stan Store, landing page, digital product checkout, lead magnet, and a simple buyer journey.",
  },
  {
    title: "We give you content that creates belief",
    text: "Hooks, story posts, proof-style content, beginner education, lifestyle positioning, and trust-building posts.",
  },
  {
    title: "We help you chat like a human, not a desperate seller",
    text: "Soft DM scripts that feel natural, build trust, handle objections, and guide people toward the right offer.",
  },
];

export function FalconPlanSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left: text */}
          <div className="order-2 lg:order-1">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-2 shadow-sm mb-6">
              <Flame className="w-4 h-4 text-primary fill-primary" />
              <span className="font-heading text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-primary">
                Over 100 Clients Get Started On Release
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-foreground leading-tight mb-5">
              Meet Adebayo:
              <br />
              From Zero Sales Strategic To $100M/Year
            </h2>

            {/* Intro */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Most people don't fail with DWA, UBC, MRR, or digital products because they
                are lazy.
              </p>
              <p>
                They fail because nobody helped them connect the missing pieces: profile,
                offer, funnel, content, trust, and DM conversations.
              </p>
              <p>
                The $100M Falcon Sales Plan was built to help beginners stop guessing and
                start building a clear system that attracts the right people, warms them up,
                and moves them toward buying — without sounding desperate.
              </p>
            </div>

            {/* Numbered list */}
            <div className="border-t border-border">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 py-5 border-b border-border">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center font-heading font-bold text-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-foreground mb-1">{item.title}</p>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Button
              size="xl"
              onClick={() =>
                window.open(
                  getWhatsAppLink("Hi Harper! I want to discover the Falcon Sales Plan."),
                  "_blank"
                )
              }
              className="w-full mt-8 rounded-full font-heading font-extrabold uppercase tracking-wide text-base py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
            >
              Discover The Falcon Sales Plan
            </Button>
          </div>

          {/* Right: image */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <img
              src="/testimonials/adebayo.jpg"
              alt="Meet Adebayo"
              className="w-full h-auto max-h-[560px] object-cover rounded-2xl shadow-luxury"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
