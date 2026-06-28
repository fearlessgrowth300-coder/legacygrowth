import { useState, lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BrandPillarsSection } from "@/components/BrandPillarsSection";
import { WhoIHelpSection } from "@/components/WhoIHelpSection";
import { PickYourPathSection } from "@/components/PickYourPathSection";
import { SEOHead } from "@/components/SEOHead";
import { UrgencyBannerSection } from "@/components/UrgencyBannerSection";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LazySection } from "@/components/LazySection";
import { TrustedLogosSection } from "@/components/TrustedLogosSection";
import { LiveSuccessCounter } from "@/components/LiveSuccessCounter";
import { MobileNavigation } from "@/components/MobileNavigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EntrepreneursSection } from "@/components/EntrepreneursSection";
import { TrustSystemSection } from "@/components/TrustSystemSection";
import { FalconPlanSection } from "@/components/FalconPlanSection";
import { useExitIntent } from "@/hooks/useExitIntent";
import { useHolidayTheme } from "@/hooks/useHolidayTheme";
import { HolidayBanner } from "@/components/HolidayBanner";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { FloatingChatButton } from "@/components/FloatingChatButton";
import { PullToRefresh } from "@/components/PullToRefresh";
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy-loaded heavy components
const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const ContentStudioSection = lazy(() => import("@/components/ContentStudioSection").then(m => ({ default: m.ContentStudioSection })));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const ThreeStagePromiseSection = lazy(() => import("@/components/ThreeStagePromiseSection").then(m => ({ default: m.ThreeStagePromiseSection })));
const ReviewsMarquee = lazy(() => import("@/components/ui/reviews-marquee").then(m => ({ default: m.ReviewsMarquee })));
const CertificationBadges = lazy(() => import("@/components/CertificationBadges").then(m => ({ default: m.CertificationBadges })));
const ExitIntentModal = lazy(() => import("@/components/ExitIntentModal").then(m => ({ default: m.ExitIntentModal })));
const QuizModal = lazy(() => import("@/components/QuizModal").then(m => ({ default: m.QuizModal })));
const ContactFormModal = lazy(() => import("@/components/ContactFormModal").then(m => ({ default: m.ContactFormModal })));
const HolidayOfferCard = lazy(() => import("@/components/HolidayOfferCard").then(m => ({ default: m.HolidayOfferCard })));

function SectionSkeleton({ height = "min-h-[400px]" }: { height?: string }) {
  return (
    <div className={`${height} space-y-6 p-8`}>
      <div className="text-center space-y-4">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-5 w-1/2 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}

const Index = () => {
  const { shouldShow: showExitIntent, resetExitIntent } = useExitIntent();
  const [showQuiz, setShowQuiz] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const { currentHoliday } = useHolidayTheme();
  const navigate = useNavigate();

  return (
    <PullToRefresh>
      <SEOHead />
      <ReadingProgressBar />
      
      <HolidayBanner />
      
      <UrgencyBannerSection />
      
      {/* Header nav (acquisition-style: logo · center nav · currency · cart) */}
      <SiteHeader />
      <span id="top" />

      <HeroSection />
      <EntrepreneursSection />
      <BrandPillarsSection />
      <TrustSystemSection />

      <LazySection fallbackHeight="min-h-[600px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
          <ReviewsMarquee />
        </Suspense>
      </LazySection>

      <FalconPlanSection />

      {/* Trusted-logos "2.7 Million Customers" section — removed for now, re-add later */}
      {/* <TrustedLogosSection /> */}
      <LiveSuccessCounter />
      <WhoIHelpSection />
      <PickYourPathSection />

      <LazySection fallbackHeight="min-h-[600px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
          <PortfolioSection />
        </Suspense>
      </LazySection>

      <LazySection fallbackHeight="min-h-[600px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
          <HowItWorksSection />
        </Suspense>
      </LazySection>

      <LazySection fallbackHeight="min-h-[600px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[600px]" />}>
          <ContentStudioSection />
        </Suspense>
      </LazySection>

      {currentHoliday && (
        <LazySection fallbackHeight="min-h-[300px]">
          <Suspense fallback={<SectionSkeleton height="min-h-[300px]" />}>
            <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
              <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {currentHoliday.decorations.icon} Limited Time {currentHoliday.name} Offer {currentHoliday.decorations.icon}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Celebrate {currentHoliday.name} with exclusive savings on all digital business setups!
                  </p>
                </div>
                <HolidayOfferCard onCTAClick={() => setShowContactForm(true)} />
              </div>
            </section>
          </Suspense>
        </LazySection>
      )}

      <LazySection fallbackHeight="min-h-[500px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[500px]" />}>
          <ThreeStagePromiseSection />
        </Suspense>
      </LazySection>

      <LazySection fallbackHeight="min-h-[300px]">
        <Suspense fallback={<SectionSkeleton height="min-h-[300px]" />}>
          <CertificationBadges />
        </Suspense>
      </LazySection>

      <SiteFooter />

      <StickyMobileCTA />
      <ScrollToTopButton />
      <FloatingChatButton onClick={() => setShowContactForm(true)} />
      <Suspense fallback={null}>
        <ExitIntentModal 
          isOpen={showExitIntent} 
          onClose={resetExitIntent}
        />
      </Suspense>
      <Suspense fallback={null}>
        <QuizModal 
          isOpen={showQuiz} 
          onClose={() => setShowQuiz(false)}
        />
      </Suspense>
      <Suspense fallback={null}>
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)}
        />
      </Suspense>
    </PullToRefresh>
  );
};

export default Index;
