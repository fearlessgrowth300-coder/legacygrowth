import { Button } from "@/components/ui/button";
import { Star, BookOpen, Zap, TrendingUp, Compass } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const paths = [
  {
    label: "Just Getting Started",
    img: "/paths/lost.jpg",
    title: "I just bought the course and feel lost",
    description: "Perfect! Let's get you set up properly from day one.",
    whatsappMessage:
      "Hey Harper, I just bought the course and feel completely lost. I really need help getting set up properly. What's next?",
    highlight: false,
  },
  {
    label: "Set Up, No Sales",
    img: "/paths/sales.jpg",
    title: "I set up my store but have no sales",
    description: "Time to optimize and get those conversions flowing.",
    whatsappMessage:
      "Hey Harper, I've set up my store but I'm not getting any sales. I need help with optimization and conversions. Can you help?",
    highlight: true,
  },
  {
    label: "Ready To Scale",
    img: "/paths/scale.jpg",
    title: "I want to scale and automate",
    description: "Let's build systems that work while you sleep.",
    whatsappMessage:
      "Hey Harper, I'm ready to scale my business and want to set up automation systems. Let's talk about taking this to the next level!",
    highlight: false,
  },
];

export function PickYourPathSection() {
  const handleWhatsAppClick = (message: string) => {
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2">
            <Compass className="w-4 h-4 text-primary" />
            <span className="font-heading text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-primary">
              Find Your Starting Point
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-center text-3xl sm:text-4xl md:text-5xl font-black uppercase text-foreground mb-3">
          Pick <span className="text-primary underline">Your Path</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
          Where are you right now? Choose your situation below and get personalized guidance.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {paths.map((path, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-8 text-center ${
                  path.highlight
                    ? "bg-primary/5 border-2 border-primary shadow-gold md:-translate-y-3"
                    : "bg-muted border border-border"
                }`}
              >
                {path.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full">
                    Best Value
                  </span>
                )}

                {/* Top label */}
                <h3 className="font-heading text-lg font-extrabold uppercase text-foreground mb-5">
                  {path.label}
                </h3>

                {/* Circle with character image */}
                <div className="mx-auto mb-5 w-28 h-28 rounded-full overflow-hidden border border-primary/20 bg-white">
                  <img
                    src={path.img}
                    alt={path.label}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Star rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    Rated 4.9/5 by 1,000+ Clients
                  </span>
                </div>

                {/* Situation */}
                <p className="font-bold text-foreground text-lg mb-2">"{path.title}"</p>
                <p className="text-muted-foreground mb-8 flex-1">{path.description}</p>

                {/* Button */}
                <Button
                  onClick={() => handleWhatsAppClick(path.whatsappMessage)}
                  className={`w-full rounded-full font-heading font-extrabold uppercase tracking-wide py-6 ${
                    path.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-white text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
