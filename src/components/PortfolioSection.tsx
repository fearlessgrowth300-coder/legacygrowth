import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import template1 from "@/assets/templates/template1.webp";
import template2 from "@/assets/templates/template2.webp";
import template4 from "@/assets/templates/template4.webp";
import template6 from "@/assets/templates/template6.webp";
import template7 from "@/assets/templates/template7.webp";
import template8 from "@/assets/templates/template8.webp";
import template9 from "@/assets/templates/template9.webp";
import template15 from "@/assets/templates/template15.webp";
import template16 from "@/assets/templates/template16.webp";
import template18 from "@/assets/templates/template18.webp";
import dwaTemplate from "@/assets/templates/dwa-template.png";
import oralHealthTemplate from "@/assets/templates/oral-health-template.png";
import legacyBuilderTemplate from "@/assets/templates/legacy-builder-template.png";
import goldenStrategiesTemplate from "@/assets/templates/golden-strategies-template.png";

const templates = [
  { src: template1, alt: "Fashion & Lifestyle Store", category: "Fashion" },
  { src: template2, alt: "Food & Recipe Store", category: "Food" },
  { src: template4, alt: "Music Artist Store", category: "Music" },
  { src: template6, alt: "Band & Music Store", category: "Music" },
  { src: template7, alt: "Fitness & Wellness Store", category: "Fitness" },
  { src: template8, alt: "Photography Portfolio Store", category: "Lifestyle" },
  { src: template9, alt: "Gaming & Streaming Store", category: "Gaming" },
  { src: template15, alt: "Comedy & Entertainment Store", category: "Entertainment" },
  { src: template16, alt: "Parenting & Lifestyle Store", category: "Lifestyle" },
  { src: template18, alt: "Podcast Store", category: "Media" },
  { src: dwaTemplate, alt: "Digital Academy Store", category: "Education" },
  { src: oralHealthTemplate, alt: "Health & Wellness Store", category: "Health" },
  { src: legacyBuilderTemplate, alt: "Digital Business Blueprint Store", category: "Business" },
  { src: goldenStrategiesTemplate, alt: "Marketing Strategies Store", category: "Marketing" },
];

export function PortfolioSection() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [active, setActive] = useState(0);

  // Crossfade through the stores one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % templates.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stores That Were Built And Convert
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real Beacons stores I've built across every niche — designed to turn visitors
            into buyers. Watch a few of them below.
          </p>
        </div>

        {/* Single crossfading store preview */}
        <div className="max-w-sm mx-auto">
          <Card
            className="group relative overflow-hidden cursor-pointer hover:shadow-elegant transition-all duration-300"
            onClick={() => setSelectedTemplate(templates[active].src)}
          >
            <div className="relative" style={{ aspectRatio: "9/16" }}>
              {templates.map((t, i) => (
                <img
                  key={i}
                  src={t.src}
                  alt={t.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Label / view hint */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">
                  {templates[active].category}
                </span>
                <span className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                  <Eye className="h-4 w-4" /> Click to view
                </span>
              </div>
            </div>
          </Card>

          {/* Progress dots */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-5">
            {templates.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show store ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Card className="p-8 bg-primary text-primary-foreground max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want a Custom Store Like These?</h3>
            <p className="text-lg opacity-90">
              Each store is tailored to convert visitors into customers. Let me build yours
              next.
            </p>
          </Card>
        </div>
      </div>

      <Dialog open={selectedTemplate !== null} onOpenChange={() => setSelectedTemplate(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[95vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Store Preview</DialogTitle>
          <div className="relative w-full h-full max-h-[95vh] overflow-y-auto">
            {selectedTemplate && (
              <img
                src={selectedTemplate}
                alt="Full store view"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
                width={600}
                height={1067}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
