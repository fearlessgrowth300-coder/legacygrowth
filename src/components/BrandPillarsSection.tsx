import { Card } from "@/components/ui/card";
import { Eye, Gauge, Target, TrendingUp, Unlock } from "lucide-react";

const pillars = [
  {
    title: "Speed",
    description: "We help brands move fast, launch smarter, and stop wasting months guessing what will sell.",
    icon: Gauge,
  },
  {
    title: "Sharp Vision",
    description: "We spot the best product angle, audience, and opportunity before the marketing budget gets wasted.",
    icon: Eye,
  },
  {
    title: "Precision",
    description: "We do not post randomly. Every funnel, message, and content move is built around strategy.",
    icon: Target,
  },
  {
    title: "Power",
    description: "Small brands can compete when the offer, sales message, and marketing system are strong.",
    icon: TrendingUp,
  },
  {
    title: "Freedom",
    description: "Better marketing gives digital product owners more sales, more control, and more time freedom.",
    icon: Unlock,
  },
];

export function BrandPillarsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
            Legacy Falcon Marketing
          </p>
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Fast, Strategic Marketing for Digital Product Sales
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our name is built around the way a falcon moves: fast, focused, and precise.
            We help creators, busy moms, entrepreneurs, and course owners turn digital
            products into steady revenue with sales funnels, product positioning,
            content strategy, and conversion-focused marketing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="p-5 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
