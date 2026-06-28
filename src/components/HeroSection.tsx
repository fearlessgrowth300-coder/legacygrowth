import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TwoStepCTAModal } from "@/components/TwoStepCTAModal";
import { MessageCircle, Mail, Star, TrendingUp, DollarSign } from "lucide-react";
import heroLifestyle1 from "@/assets/hero-lifestyle-1.jpg";
import heroLifestyle2 from "@/assets/hero-lifestyle-2.jpg";
import heroLifestyle4 from "@/assets/hero-lifestyle-4.jpg";
import heroLifestyle5 from "@/assets/hero-lifestyle-5.jpg";
import heroLifestyle6 from "@/assets/hero-lifestyle-6.jpg";

const heroLifestylePhotos = [
  { src: "/legacy-falcon-og.jpg", alt: "Legacy Falcon Marketing beach lifestyle freedom for digital product owners" },
  { src: heroLifestyle6, alt: "Boat lifestyle scene representing family freedom and flexible income" },
  { src: heroLifestyle5, alt: "Luxury beach lifestyle representing digital product freedom" },
  { src: heroLifestyle1, alt: "Yacht lifestyle scene representing freedom from the daily grind" },
  { src: heroLifestyle2, alt: "Cafe lifestyle scene representing flexible creator income" },
  { src: heroLifestyle4, alt: "Travel lifestyle scene representing freedom through online business" },
];

export function HeroSection() {
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [ctaType, setCTAType] = useState<"general" | "funnel" | "setup">("general");
  const [activePhoto, setActivePhoto] = useState(0);

  // Crossfade through the hero photos
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((p) => (p + 1) % heroLifestylePhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    setCTAType("general");
    setShowCTAModal(true);
  };

  const handleEmailClick = () => {
    setCTAType("setup");
    setShowCTAModal(true);
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[hsl(222,33%,11%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,hsl(var(--primary)/0.16),transparent_45%)]" />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8 pt-12 pb-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left animate-fade-in">
            {/* Brand pill (two-color, bold) */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg mb-7">
              <Star className="h-4 w-4 text-primary fill-primary flex-shrink-0" />
              <span className="font-heading text-[11px] sm:text-sm font-extrabold uppercase tracking-wide">
                <span className="text-primary">Legacy Falcon Marketing</span>{" "}
                <span className="text-black">· Strategic Product Sales</span>
              </span>
            </div>

            {/* Headline — big, white, uppercase, heavy */}
            <h1 className="font-heading text-[2.1rem] leading-[1.03] sm:text-5xl lg:text-6xl font-black uppercase text-white mb-7 max-w-[22rem] sm:max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Turn Your Digital Product Into{" "}
              <span className="text-primary">True Family Freedom</span>
            </h1>

            {/* Star rating */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-heading text-sm font-extrabold uppercase tracking-wide text-white">
                Rated 4.9/5 by 1,000+ Clients
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                onClick={handleWhatsAppClick}
                className="group rounded-full font-heading font-extrabold uppercase tracking-wide text-sm sm:text-base px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Transformation
              </Button>

              <Button
                size="xl"
                onClick={handleEmailClick}
                className="group rounded-full font-heading font-extrabold uppercase tracking-wide text-sm sm:text-base px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                Book Your Setup
              </Button>
            </div>
          </div>

          {/* Right Column - Image with edges blending into the black background */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-2xl">
                {/* Crossfading slideshow of hero photos */}
                {heroLifestylePhotos.map((photo, i) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    width={736}
                    height={460}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                    sizes="(min-width: 1024px) 48vw, 86vw"
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
                      i === activePhoto ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {/* edge-blend vignette into the navy background */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl shadow-[inset_0_0_55px_22px_hsl(222,33%,11%)]" />
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(222,33%,11%)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TwoStepCTAModal 
        isOpen={showCTAModal} 
        onClose={() => setShowCTAModal(false)}
        ctaType={ctaType}
      />
    </section>
  );
}
