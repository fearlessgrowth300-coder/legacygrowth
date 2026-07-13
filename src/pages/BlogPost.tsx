import { useParams, Link, useNavigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import NotFound from "./NotFound";

const WHATSAPP_URL = "https://wa.me/16615518269";

export const blogPosts = [
  {
    slug: "how-much-does-a-sales-funnel-cost",
    title: "How Much Does a Sales Funnel Cost in 2026? (Real Numbers)",
    excerpt:
      "A sales funnel costs anywhere from $0 to $10,000+ depending on who builds it: DIY runs $30–$300 per month in tools, freelancers charge $200–$2,000, agencies charge $5,000+, and done-for-you services like Legacy Falcon Marketing cost $97–$497 flat.",
    category: "Pricing",
    readTime: "7 min read",
    date: "Jul 13, 2026",
    dateISO: "2026-07-13",
    featured: true,
  },
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
        high-ticket coaches charge $5,000 and up — see our full{" "}
        <Link to="/blog/how-much-does-a-sales-funnel-cost" className="text-primary underline">
          sales funnel cost breakdown
        </Link>{" "}
        for real numbers across every option. If you'd rather not spend
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

function ArticleFunnelCost() {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Answer-first block for AI Overviews / featured snippets */}
      <p className="text-xl leading-relaxed font-medium border-l-4 border-primary pl-5 bg-primary/5 py-4 rounded-r-lg">
        A sales funnel costs between $0 and $10,000+ in 2026, depending on who
        builds it. Doing it yourself costs $30–$300 per month in software.
        Hiring a freelance funnel builder costs $200–$2,000 per project.
        Agencies serving high-ticket coaches charge $5,000 and up. A
        done-for-you service like Legacy Falcon Marketing costs a flat $97–$497
        including setup, design, and automation.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">What determines the cost of a sales funnel?</h2>
      <p>
        Four things drive the price: how many pages the funnel needs (a simple
        landing-page-to-checkout funnel is far cheaper than a webinar funnel
        with upsells), whether email or WhatsApp automation is included, who
        does the copywriting, and who you hire. The platform itself is the
        smallest cost — the expertise to make it convert is what you're really
        paying for.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">How much does it cost to build a funnel yourself?</h2>
      <p>
        Expect $30–$300 per month in tools: a funnel or page builder
        ($0–$97/month), an email platform ($0–$50/month at small list sizes),
        and a checkout processor (usually free plus ~3% per sale). The real
        cost is time — most first-timers spend 3–6 weeks building a funnel
        that a professional would finish in days, and the first version
        usually converts poorly until it's been tested and fixed. If you're
        unsure what the pieces are, start with our{" "}
        <Link to="/blog/how-to-build-a-sales-funnel-for-digital-products" className="text-primary underline">
          step-by-step funnel building guide
        </Link>
        .
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">How much do freelance funnel builders charge?</h2>
      <p>
        Freelancers on marketplaces like Fiverr and Upwork charge $200–$2,000
        per funnel. At the low end you get page assembly with your copy and
        assets; at the high end you get strategy, copywriting, and automation.
        Quality varies enormously — always ask for live funnels they've built
        and real conversion numbers before paying.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">How much do funnel agencies charge?</h2>
      <p>
        Agencies charge $5,000–$25,000+ per funnel, often with monthly
        retainers on top. That price buys a team — strategist, copywriter,
        designer, media buyer — and makes sense for businesses already doing
        six figures. For a creator launching a $47 course, agency pricing
        rarely pays for itself.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">What does a done-for-you funnel cost at Legacy Falcon Marketing?</h2>
      <p>
        $97 for a basic setup and up to $497 for a complete system with
        automation — flat, one-time pricing with no retainer. That includes
        the landing page, checkout, follow-up sequence, and 30 days of
        WhatsApp support, with most builds live within 7 days. Pricing
        questions are covered in our{" "}
        <Link to="/#faq" className="text-primary underline">FAQ</Link>, or{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          message us on WhatsApp
        </a>{" "}
        for a quote on your specific product.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Hidden costs to watch out for</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Monthly platform lock-in:</strong> some builders put you on $297/month software you don't need.</li>
        <li><strong>Revisions billed hourly:</strong> agree on a fixed number of revisions up front.</li>
        <li><strong>Copywriting sold separately:</strong> a funnel without persuasive copy is just pretty pages — confirm it's included.</li>
        <li><strong>No handover:</strong> make sure you own the accounts and can edit everything after delivery.</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4">Is a sales funnel worth the money?</h2>
      <p>
        Run your own numbers: a funnel that lifts conversion from 1% to 2.5%
        more than doubles revenue from the same traffic. Our free{" "}
        <Link to="/#roi-calculator" className="text-primary underline">
          funnel ROI calculator
        </Link>{" "}
        shows exactly what that improvement is worth at your ad spend and
        order value — for most digital products it pays back a $497 build
        within the first month of consistent traffic.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">Quick recap</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>DIY: $30–$300/month in tools, plus weeks of your time.</li>
        <li>Freelancer: $200–$2,000 per project, quality varies.</li>
        <li>Agency: $5,000+, built for six-figure businesses.</li>
        <li>Legacy Falcon done-for-you: $97–$497 flat, live in about 7 days.</li>
      </ul>
    </article>
  );
}

const articleComponents: Record<string, () => JSX.Element> = {
  "how-to-build-a-sales-funnel-for-digital-products": ArticleFunnelGuide,
  "how-much-does-a-sales-funnel-cost": ArticleFunnelCost,
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
        url={`https://legacyfalcons.com/blog/${post.slug}`}
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
