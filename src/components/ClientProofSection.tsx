import { useState, useCallback, useEffect } from "react";
import { Star, ShieldCheck, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/whatsapp";

// Real client sales screenshots (revenue dashboards + testimonial DMs).
// Files live in /public/proof — see public/proof/proof-*.jpg
const PROOF_COUNT = 16;
const proofImages = Array.from({ length: PROOF_COUNT }, (_, i) => ({
  src: `/proof/proof-${i + 1}.jpg`,
  alt: `Verified client sales result screenshot ${i + 1} — Legacy Falcon Marketing`,
}));

export function ClientProofSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  // Close lightbox on Escape
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  return (
    <section
      id="client-proof"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-16 md:py-24"
    >
      <div className="container max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <ShieldCheck className="h-4 w-4" />
            Verified Client Results
          </span>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Real Sales. Real Screenshots.
            <span className="block text-primary">Real Clients.</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            These are actual income dashboards and messages from people we work with —
            posted straight from their phones. This is what happens when the marketing
            actually works.
          </p>
        </div>

        {/* Pop in / pop out masonry wall of proof */}
        <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 [column-fill:balance]">
          {proofImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label="View screenshot full size"
              style={{ animationDelay: `${-(i * 0.35).toFixed(2)}s` }}
              className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card animate-proof-pop [animation-play-state:running] hover:[animation-play-state:paused] focus:[animation-play-state:paused] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:animate-none motion-reduce:opacity-100 sm:mb-4"
            >
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* hover overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-luxury-navy shadow">
                    <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    Client result
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Your screenshot could be next.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 font-heading font-semibold"
          >
            <a
              href={getWhatsAppLink(
                "Hi! I saw your client results and I want the same for my business. How do we start?"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              I Want Results Like This
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={proofImages[lightbox].src}
            alt={proofImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </section>
  );
}
