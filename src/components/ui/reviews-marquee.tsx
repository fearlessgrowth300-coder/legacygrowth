import { Star } from "lucide-react";

type Review = {
  name: string;
  headline: string;
  text: string;
};

// Your real success-story reviews, formatted as scrolling text cards.
const reviews: Review[] = [
  {
    name: "Stella Matins",
    headline: "4 Sales in Two Weeks",
    text: "What Harper built for me wasn't just a website it was a real business system. The funnel does the talking, and the marketing drives traffic daily. I've made sales even while sleeping!",
  },
  {
    name: "Sodi Gold",
    headline: "Stay-At-Home Mom Turned Earner",
    text: "I joined with no tech skills at all. Today I'm running my own digital store, making weekly sales and even teaching others how to start. Harper made everything simple.",
  },
  {
    name: "Florence Lillin",
    headline: "Over $7,000 Every Week",
    text: "For months I didn't make a single sale. But I kept going, and Harper's system finally clicked. Now I'm earning over $7,000 every week. Best decision I ever made.",
  },
  {
    name: "Rose Mandesna",
    headline: "$100,000 in Just 70 Days",
    text: "As a CNA making just $500 a week, I decided to use one check to pay for the class. That decision changed my life forever. Harper's system works if you work it.",
  },
  {
    name: "Angela Maria",
    headline: "23 Sales in 7 Days",
    text: "A few weeks ago I was ready to walk away. Then Harper set everything up and the results were immediate. 23 sales in just one week. A complete turnaround.",
  },
  {
    name: "Anne St",
    headline: "$1,640 in 3.5 Weeks",
    text: "$1,640 in 3.5 weeks as a beginner on a brand new faceless account, starting with 0 followers. What is this life beyond grateful for this opportunity!",
  },
  {
    name: "Lyndsey Hamer",
    headline: "Goal Achieved This Month",
    text: "After struggling to get sales, I achieved my goal this month with the amazing setup Harper built. Everything just works when you have the right foundation.",
  },
  {
    name: "Marcus Bell",
    headline: "Quit My 9–5 in 90 Days",
    text: "I went from skeptical to fully booked. The done-for-you system gave me a real brand and a real pipeline. I handed in my notice 90 days later. Unreal.",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[300px] sm:w-[360px] flex-shrink-0 rounded-2xl bg-card border border-border shadow-sm p-6 mx-3">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <h3 className="font-bold text-foreground uppercase tracking-tight mb-3 leading-snug">
        {review.headline}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
        {review.text}
      </p>
      <p className="font-semibold text-foreground">{review.name}</p>
      <p className="text-amber-500 font-medium text-sm">Verified Buyer</p>
    </div>
  );
}

function MarqueeRow({ items, direction }: { items: Review[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const mid = Math.ceil(reviews.length / 2);
  const topRow = reviews.slice(0, mid);
  const bottomRow = reviews.slice(mid);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-background to-muted/40 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          {/* Rating pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wide text-foreground">
                Rated 4.9/5 by 1,000+ Clients
              </span>
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase mb-6 text-foreground">
            Thousands of Client Reviews.
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take my word for it. Here's what real people are saying about their
            transformations.
          </p>
        </div>
      </div>

      {/* Scrolling rows with fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex flex-col gap-6">
          <MarqueeRow items={topRow} direction="left" />
          <MarqueeRow items={bottomRow} direction="right" />
        </div>
      </div>

      {/* Trust badge */}
      <div className="container mx-auto px-4">
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
            <p className="text-2xl font-bold text-foreground mb-2">Join 1000+ Success Stories</p>
            <p className="text-muted-foreground text-lg">
              These are just a few of the many people who transformed their lives with our
              proven system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
