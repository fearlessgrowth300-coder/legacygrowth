import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const services = [
  {
    title: "Complete Done-For-You Setup",
    description:
      "I build your Beacons store, sales funnel, payment system, and email automation. Everything ready to collect payments in 72 hours.",
  },
  {
    title: "Content & Marketing Strategy",
    description:
      "Receive proven Instagram and Facebook content templates that convert followers into buyers automatically.",
  },
  {
    title: "Lead Generation Automation",
    description:
      "Automated lead magnet funnels and chatbot sequences that bring interested customers to you 24/7.",
  },
  {
    title: "Conversion Optimization",
    description:
      "High-converting sales pages built with premium tools (Canva Pro, ManyChat, Beacons AI) proven to get sales.",
  },
  {
    title: "Ongoing Support & Training",
    description:
      "30 days of WhatsApp support so you're never confused about how to use your new system.",
  },
];

export function HowItWorksSection() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), "_blank");
  };

  // Add HowTo Schema
  useEffect(() => {
    const existingScript = document.getElementById("howto-schema");
    if (existingScript) existingScript.remove();

    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Set Up a High-Converting Sales Funnel for Digital Products",
      description:
        "Complete guide to setting up a sales funnel that generates consistent revenue from digital products and courses",
      step: services.map((service, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: service.title,
        text: service.description,
      })),
    };

    const script = document.createElement("script");
    script.id = "howto-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(howToSchema);
    document.head.appendChild(script);

    return () => {
      document.getElementById("howto-schema")?.remove();
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-[hsl(222,33%,11%)]">
      <div className="container mx-auto px-4">
        {/* Top: heading left, intro right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-14 max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
            How Do We Help You Get Sales From Your Digital Products?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed lg:pt-2">
            Here's my proven 5-step process that takes you from confused to converting in 72
            hours — done-for-you, so you never have to guess what comes next.
          </p>
        </div>

        {/* Numbered cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-7 hover:bg-white/[0.08] transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[hsl(222,33%,11%)] font-heading font-black mb-5">
                {index + 1}
              </span>
              <h3 className="font-heading text-lg font-extrabold uppercase text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            size="xl"
            onClick={handleWhatsAppClick}
            className="rounded-full font-heading font-extrabold uppercase tracking-wide text-base px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Book Your Setup Now
          </Button>
        </div>
      </div>
    </section>
  );
}
