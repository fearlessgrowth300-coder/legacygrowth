import { useState } from "react";
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

  const handleWhatsAppClick = () => {
    setCTAType("general");
    setShowCTAModal(true);
  };

  const handleEmailClick = () => {
    setCTAType("setup");
    setShowCTAModal(true);
  };

  return (
    <section className="relative min-h-[calc(100svh-56px)] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.18),transparent_32%),linear-gradient(135deg,hsl(var(--luxury-navy)),hsl(var(--primary)),hsl(var(--secondary)))]" />
      <div className="absolute inset-0 bg-black/25 z-[1]" />

      <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-6 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left animate-fade-in">
            {/* Success Indicators */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
              <Card className="p-2 sm:p-3 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-medium">Legacy Falcon Marketing</span>
                </div>
              </Card>
              <Card className="p-2 sm:p-3 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">Strategic Product Sales</span>
                </div>
              </Card>
            </div>

            <h1 className="mx-auto max-w-[21rem] text-[1.7rem] leading-[1.08] sm:max-w-2xl sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-3xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-5 lg:mb-6">
              Turn Your Digital Product Into True Family Freedom. Live the Dream. We'll Handle the Sales.
            </h1>
            
            <h2 className="mx-auto max-w-[21rem] text-base sm:max-w-xl sm:text-xl lg:mx-0 lg:text-2xl text-white/90 mb-8 font-medium font-serif">
              Ready to achieve the financial freedom you bought that digital product for? We partner with creators and entrepreneurs to market your products and maximize your revenue.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                variant="whatsapp"
                onClick={handleWhatsAppClick}
                className="group text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Start Your Transformation</span>
                <span className="sm:hidden">Get Started</span>
              </Button>
              
              <Button
                size="xl"
                onClick={handleEmailClick}
                className="group text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold hover:shadow-glow"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Book Your Setup</span>
                <span className="sm:hidden">Book Setup</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <Card className="p-3 sm:p-4 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-4 text-white">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-center lg:text-left">Helping everyday people turn digital products into family freedom</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Lifestyle Photo Collage */}
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-[21rem] sm:max-w-xl lg:max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 shadow-luxury backdrop-blur-sm">
                <div className="grid grid-cols-5 gap-2">
                  <div className="relative col-span-5 overflow-hidden rounded-xl">
                    <img
                      src={heroLifestylePhotos[0].src}
                      alt={heroLifestylePhotos[0].alt}
                      width={736}
                      height={981}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 48vw, 86vw"
                      className="aspect-[16/10] w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/45 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-center text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
                      Freedom starts when your product finally sells
                    </div>
                  </div>

                  {heroLifestylePhotos.slice(1).map((photo, index) => (
                    <div key={photo.src} className="relative overflow-hidden rounded-lg border border-white/10">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={736}
                        height={981}
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 9vw, 17vw"
                        className="aspect-[3/4] w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
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
