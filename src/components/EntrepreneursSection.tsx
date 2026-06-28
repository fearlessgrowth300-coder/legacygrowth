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
    name: "Bianca", // placeholder — tell me her real name to display
    avatarImg: "/testimonials/member1-avatar.jpg",
    proofImg: "/testimonials/member1-proof.jpg",
    text: "$34.5k CASH DAYYY 😭😭😭 there is no way. I started this biz on a whim in 2024, with DWA. I remember there being maybe 30,000 members at that point. Fast forward to now, and I have been having 6-figure months that consist of $34.5k days, $30k days, $45k days. It's INSANE what can be built online — all with 4k followers. I seriously went from being dependent on my husband's income to retiring him home and being the breadwinner 🤣 Forever grateful to the Falcon team program + specifically Harper for handling my business to build my own brand. My life is completely changed 🥹🤎",
  },
  {
    name: "Member", // placeholder — tell me her real name to display
    avatarImg: "/testimonials/member2-avatar.jpg",
    text: "I left my 9–5 today. Today marked my final day at my 9–5 job, and I was able to take this step confidently thanks to my digital marketing business and the Falcon team, which has generated over $11,800 in sales in just the last four months — all with an audience of roughly 800 followers. This is the start of a brand new chapter. By the end of this month, I'll be moving to Denmark to reunite with my family, who I've been separated from for the past several months. They were forced to rebuild their lives from zero after leaving our home country for their safety. I stayed behind to support them financially, serving as their sole provider at just 23 years old after we were unable to leave together due to financial constraints.",
  },
  {
    name: "Member", // placeholder — tell me his real name to display
    avatarImg: "/testimonials/member3-avatar.jpg",
    proofImg: "/testimonials/member3-proof.png",
    text: "Alhamdulillah always and in every situation. 🤍 My journey hasn't been easy, but it has been worth it. As a student, I had big dreams but limited resources. I faced challenges, doubts, and moments where quitting felt easier. But I kept my faith — and the Falcon team, with their speed, vision and strong team, kept me consistent. Alhamdulillah, through the Falcon team and trust in Allah, I was able to achieve one of my biggest goals — getting my dream car while still being a student. This journey taught me discipline, patience, and belief in myself. If I can do it, you can too. Stay focused. Stay consistent. Trust the Falcon marketing plan and trust Allah. Your time is coming. 🤍✨ Thank you DWA Digital Wealth Academy for the course.",
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

      <p className="text-muted-foreground leading-relaxed mb-5 italic">
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
