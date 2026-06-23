import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TwoStepCTAModal } from "@/components/TwoStepCTAModal";
import { MessageCircle, Mail, Star, TrendingUp, DollarSign } from "lucide-react";
import heroFunnelDashboard from "@/assets/hero-funnel-dashboard.jpg";

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
                  <span className="text-xs sm:text-sm font-medium">Digital Expert</span>
                </div>
              </Card>
              <Card className="p-2 sm:p-3 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">Proven Results</span>
                </div>
              </Card>
            </div>

            <h1 className="mx-auto max-w-[20rem] text-[1.85rem] leading-[1.08] sm:max-w-2xl sm:text-4xl md:text-5xl lg:mx-0 lg:text-7xl font-serif font-bold text-white mb-5 lg:mb-6">
              Struggling to Get Sales? Here's How to Turn Your Digital Products Into Revenue
            </h1>
            
            <h2 className="mx-auto max-w-[20rem] text-base sm:max-w-xl sm:text-xl lg:mx-0 lg:text-2xl text-white/90 mb-4 font-medium font-serif">
              Professional Sales Funnel Setup That Gets Results in 7-14 Days
            </h2>
            
            <p className="text-sm sm:text-lg text-white/80 mb-8 max-w-[20rem] sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              If you have a digital product but struggle to get consistent sales, I can help. Expert funnel setup and optimization service that helped 100+ digital marketers generate their first $424+ in overnight sales. No tech skills required—I handle everything for you.
            </p>

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
                    <span className="text-xs sm:text-sm text-center lg:text-left">Helping everyday people turn digital skills into passive income</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-[20rem] sm:max-w-xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-luxury">
                <img
                  src={heroFunnelDashboard}
                  alt="Digital product sales funnel dashboard with phone storefront and revenue growth visuals"
                  width={1717}
                  height={916}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="aspect-[1717/916] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  {["Funnel Ready", "Store Live", "Payments Set"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-center text-[11px] font-semibold text-white backdrop-blur-sm sm:text-xs"
                    >
                      {label}
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
