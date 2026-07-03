import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/whatsapp";

type Review = {
  name: string;
  initials?: string;
  avatarImg?: string;
  proofImg?: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Bianca",
    avatarImg: "/testimonials/member1-avatar.jpg",
    proofImg: "/testimonials/member1-proof.jpg",
    text: "$34.5k in a single day 😭 Started in 2024 with barely 4k followers, now I'm having consistent 6-figure months. Forever grateful to Harper and the Falcon team 🤎",
  },
  {
    name: "Sharon R",
    avatarImg: "/testimonials/member2-avatar.jpg",
    text: "I finally left my 9–5 today 🥹 My business did over $11,800 in 4 months with only ~800 followers. This is the start of a whole new chapter thank you Falcon team!",
  },
  {
    name: "Marcus G",
    avatarImg: "/testimonials/member3-avatar.jpg",
    proofImg: "/testimonials/member3-proof.png",
    text: "As a broke student I had big dreams and no resources. The Falcon team kept me consistent, and I just bought my dream car while still in school. If I can do it, you can too 🤍✨",
  },
];

function Avatar({ review }: { review: Review }) {
  return (
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary to-violet-400 flex items-center justify-center">
      {review.avatarImg ? (
        <img
          src={review.avatarImg}
          alt={review.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-heading text-2xl font-black text-white">
          {review.initials}
        </span>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="relative flex h-full flex-col bg-muted rounded-2xl px-6 pb-8 pt-20 mt-14 text-center">
      <Avatar review={review} />

      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
        ))}
      </div>

      <p className="text-left text-[15px] text-muted-foreground leading-relaxed mb-5">
        "{review.text}"
      </p>

      {review.proofImg && (
        <img
          src={review.proofImg}
          alt={`${review.name} earnings proof`}
          className="mx-auto mb-6 max-h-80 w-auto rounded-xl shadow-md"
          loading="lazy"
        />
      )}

      {/* Footer pinned to the bottom so all cards align */}
      <div className="mt-auto pt-2">
        <p className="font-heading font-extrabold uppercase tracking-wide text-foreground">
          {review.name}
        </p>
        <p className="text-muted-foreground text-sm mt-0.5">Verified Customer</p>
      </div>
    </div>
  );
}

export function EntrepreneursSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Pill badge */}
        <div className="flex justify-center mb-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wide text-foreground">
              Loved by leading entrepreneurs in the space
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-center text-3xl sm:text-4xl md:text-5xl font-black uppercase text-foreground leading-tight mb-3">
          What <span className="text-primary underline">Entrepreneurs</span> Say
          <br className="hidden sm:block" /> About Falcon Marketing
        </h2>

        {/* Subtext */}
        <p className="text-center text-muted-foreground text-lg mb-16">See what they say</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* CTA → WhatsApp */}
        <div className="flex justify-center mt-20 md:mt-24">
          <Button
            size="xl"
            onClick={() =>
              window.open(
                getWhatsAppLink("Hi Harper! I'd love to discover the strategy."),
                "_blank"
              )
            }
            className="rounded-full font-heading font-extrabold uppercase tracking-wide text-base px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
          >
            Discover The Strategy
          </Button>
        </div>
      </div>
    </section>
  );
}
