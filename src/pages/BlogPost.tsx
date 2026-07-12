import { useParams, Link, useNavigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import NotFound from "./NotFound";

const WHATSAPP_URL = "https://wa.me/13023295673";

export const blogPosts = [
  {
    slug: "how-to-build-a-sales-funnel-for-digital-products",
    title: "How to Build a Sales Funnel for Your Digital Product (Step-by-Step Guide)",
    excerpt:
      "A sales funnel for a digital product needs five parts: an offer, a landing page, a checkout, a follow-up sequence, and traffic. Here's how to build each one — and what it costs to have it done for you.",
    category: "Funnel Strategy",
    readTime: "9 min read",
    date: "Jul 12, 2026",
    dateISO: "2026-07-12",
    featured: true,
  },
];

function ArticleFunnelGuide() {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Answer-first block for AI Overviews / featured snippets */}
      <p className="text-xl leading-relaxed font-medium border-l-4 border-primary pl-5 bg-primary/5 py-4 rounded-r-lg">
        To build a sales funnel for a digital product, you need five things: a
        clear offer with a specific price, a landing page that answers one
        buyer question, a frictionless checkout, an email or WhatsApp follow-up
        sequence, and a repeatable traffic source. Most creators can launch a
        working funnel in 7–14 days — either by building it themselves or by
        using a done-for-you service that costs between $97 and $497.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">What is a sales funnel for a digital product?</h2>
      <p>
        A sales funnel is the path a stranger takes to become a paying
        customer: they see your content or ad, land on a page built around one
        promise, and are guided step-by-step to checkout. For digital products
        — courses, templates, ebooks, memberships — the funnel <em>is</em> the
        storefront. There's no physical shop, so the funnel does all the
        selling while you sleep.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Step 1: Nail one offer before you build anything</h2>
      <p>
        The most common reason digital products don't sell is not traffic —
        it's a vague offer. Before touching a page builder, write one sentence:
        <strong> "I help [specific person] get [specific result] with [your product] for [price]."</strong>{" "}
        If you can't fill that in, no funnel software will save the launch.
        Busy moms selling planners, coaches selling courses, freelancers
        selling templates — the winning offers are always narrow.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Step 2: Build a landing page that answers one question</h2>
      <p>
        Your landing page has one job: convince one type of visitor that this
        product solves their exact problem. The proven structure, top to
        bottom: a headline stating the result, proof (screenshots,
        testimonials, numbers), what's inside the product, the price with a
        guarantee, and a single call-to-action repeated down the page. Cut
        anything that serves a second audience or a second goal.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Step 3: Make checkout stupid-simple</h2>
      <p>
        Every extra click costs you buyers. Link your call-to-action straight
        to a checkout that accepts the payment methods your audience actually
        uses — cards, PayPal, and local options if you sell internationally.
        (See the full list of{" "}
        <Link to="/payment-methods" className="text-primary underline">
          payment methods we set up for clients
        </Link>
        .) Keep the form to name, email, and payment. Nothing else.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Step 4: Follow up — most sales happen after the first visit</h2>
      <p>
        Around 97% of first-time visitors leave without buying. A simple
        5-email sequence (or WhatsApp follow-up for warm leads) recovers a big
        share of them: deliver value on day 1, handle the main objection on day
        2, show proof on day 3, add urgency on day 5, close on day 7. Automate
        it once and it runs for every future lead.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Step 5: Pick one traffic source and go deep</h2>
      <p>
        A funnel with no traffic is a website with no visitors. Choose the one
        channel where your buyers already are — short-form video, Pinterest,
        SEO, or paid ads — and feed the funnel daily for 30 days before judging
        results. Want to estimate the upside first? Use our free{" "}
        <Link to="/#roi-calculator" className="text-primary underline">
          funnel ROI calculator
        </Link>{" "}
        to see what a higher conversion rate does to your revenue.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">How much does it cost to have a sales funnel built for you?</h2>
      <p>
        A done-for-you sales funnel costs between $97 and $497 at Legacy
        Falcon Marketing, depending on whether you need a basic setup or a
        complete system with automation. Freelance funnel builders on
        marketplaces typically charge $200–$2,000+, and agencies serving
        high-ticket coaches charge $5,000 and up. If you'd rather not spend
        weeks learning page builders, email tools, and checkout integrations,{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          message us on WhatsApp
        </a>{" "}
        for a quote — most builds go live within 7 days. Common questions are
        answered in our{" "}
        <Link to="/#faq" className="text-primary underline">
          FAQ
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Quick recap</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>One narrow offer, one specific price — before any software.</li>
        <li>One landing page answering one buyer question, with proof.</li>
        <li>Checkout in as few clicks as possible.</li>
        <li>An automated follow-up sequence — that's where most sales come from.</li>
        <li>One traffic channel, fed daily for 30 days.</li>
      </ul>
    </article>
  );
}

const articleComponents: Record<string, () => JSX.Element> = {
  "how-to-build-a-sales-funnel-for-digital-products": ArticleFunnelGuide,
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);
  const Body = slug ? articleComponents[slug] : undefined;

  if (!post || !Body) {
    return <NotFound />;
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Legacy Falcon Marketing`}
        description={post.excerpt}
        url={`https://legacygrowth.site/blog/${post.slug}`}
        schema="article"
        articleData={{
          headline: post.title,
          datePublished: post.dateISO,
          author: "Legacy Falcon Marketing",
          category: post.category,
        }}
      />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          All articles
        </Button>

        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-10 pb-8 border-b">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <Body />

        <div className="mt-16 p-8 bg-primary text-primary-foreground rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Want this funnel built for you?</h2>
          <p className="mb-6 opacity-90">
            Skip the tech headaches. Get a complete, conversion-optimized funnel live in about 7 days.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              Get a quote on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
