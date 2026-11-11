import { useParams, Link, useNavigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import NotFound from "./NotFound";
import {
  ArticleNotSelling,
  ArticleFirstSale,
  ArticlePricing,
  ArticlePlatforms,
  ArticleSocialSelling,
  ArticleEmailList,
  ArticleConversionRate,
  ArticleDoneForYou,
} from "@/content/articles";

const WHATSAPP_URL = "https://wa.me/16615518269";

// Bing flags titles over ~65 chars; only add the brand suffix when it fits.
export const pageTitle = (t: string) =>
  `${t} | Legacy Falcon Marketing`.length <= 65 ? `${t} | Legacy Falcon Marketing` : t;

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  updatedISO?: string;
  featured: boolean;
  // Rendered visibly under the article AND emitted as FAQPage JSON-LD by
  // scripts/prerender.mjs — one source, so the two can't drift apart.
  faqs: { q: string; a: string }[];
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "why-is-my-digital-product-not-selling",
    title: "Why Is My Digital Product Not Selling? 9 Reasons and Fixes",
    excerpt:
      "Most digital products don't sell because too few of the right people see them, the offer doesn't promise a specific result, or the sales page and checkout lose buyers. Here are the 9 causes and how to fix each.",
    category: "Troubleshooting",
    readTime: "7 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: true,
    faqs: [
      { q: "Why do digital products fail to sell?", a: "Usually because not enough of the right people see the product, the offer describes what it is instead of the result it delivers, or the sales page and checkout lose buyers before they pay." },
      { q: "How long should I promote a digital product before deciding it doesn't work?", a: "Promote it consistently for at least 30 days, mentioning it in most of your content, before judging it. Most creators under-promote and give up too early." },
      { q: "Can someone fix my digital product sales for me?", a: "Yes. Legacy Falcon Marketing audits and rebuilds underperforming product funnels, including the offer, sales page, checkout, and follow-up, for a flat $97 to $497." },
    ],
  },
  {
    slug: "how-to-get-your-first-digital-product-sale",
    title: "How to Get Your First Digital Product Sale With No Audience",
    excerpt:
      "With no audience, sell where buyers already gather: your personal network, communities, marketplaces like Etsy and Gumroad, and other creators' audiences. Pre-sell, make the offer specific, and add a guarantee.",
    category: "Getting Started",
    readTime: "6 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: true,
    faqs: [
      { q: "Can you sell a digital product with zero followers?", a: "Yes. Borrow attention from marketplaces where buyers already search, communities where your buyers ask questions, and creators who already serve your audience." },
      { q: "How long does it take to get the first digital product sale?", a: "Anywhere from a few days to a couple of months, depending mostly on how many of the right people see the offer. Commit to 30 days of consistent promotion." },
      { q: "Should I pre-sell my digital product before creating it?", a: "Yes. Pre-selling at an early-bird price validates demand before you spend weeks building, and early buyers tell you what they actually want." },
    ],
  },
  {
    slug: "how-to-price-a-digital-product",
    title: "How Much Should I Charge for My Digital Product? (2026 Pricing Guide)",
    excerpt:
      "Price by the result, not the effort. Typical ranges: templates $15–$50, ebooks $10–$47, mini-courses $47–$197, full courses $197–$997. Start lower-middle, use prices ending in 7, and raise as proof comes in.",
    category: "Pricing",
    readTime: "6 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "How much should I charge for an ebook?", a: "Most ebooks sell for $10 to $47. Ebooks bundled with video walkthroughs or templates typically sell for $47 to $197." },
      { q: "How much should I charge for an online course?", a: "Mini-courses typically sell for $47 to $197 and full courses for $197 to $997, depending on the result they deliver and the proof you can show." },
      { q: "Is it better to price a digital product low?", a: "Usually not. Very low prices signal low value. A $27 to $47 entry product followed by a higher-priced offer generally earns more than a single cheap product." },
    ],
  },
  {
    slug: "stan-store-vs-gumroad-vs-kajabi",
    title: "Stan Store vs Gumroad vs Kajabi: Which Should Beginners Use?",
    excerpt:
      "Gumroad is cheapest to start (no monthly fee, a cut per sale). Stan Store suits social-media sellers wanting a link-in-bio store for a flat monthly fee. Kajabi suits established course sellers and costs the most.",
    category: "Platforms",
    readTime: "6 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "Is Stan Store or Gumroad better for beginners?", a: "Gumroad is better for testing an idea with no upfront cost. Stan Store is better for creators selling regularly from TikTok or Instagram who prefer a flat monthly fee over a per-sale cut." },
      { q: "Is Kajabi worth it for beginners?", a: "Usually not before you have consistent sales. Kajabi bundles courses, email, and community, but its monthly cost and learning curve suit established course sellers." },
      { q: "Does the platform affect how many digital products I sell?", a: "Very little. The offer, the sales page, and the traffic drive sales. Choose the cheapest platform that fits today and switch when you outgrow it." },
    ],
  },
  {
    slug: "how-to-sell-digital-products-on-tiktok-and-instagram",
    title: "How to Sell Digital Products on TikTok and Instagram",
    excerpt:
      "Put a store or sales-page link in your bio, post short videos showing the problem your product solves, and end each with a 'link in bio' call to action. The link must handle checkout and delivery.",
    category: "Social Selling",
    readTime: "6 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "Can you sell digital products directly on Instagram?", a: "Not natively in most cases. Instagram Shopping is built for physical products, so creators use a link-in-bio store or sales page that handles checkout and automatic delivery." },
      { q: "Why am I getting views on TikTok but no sales?", a: "Either the content attracts viewers who aren't buyers, or the bio link loses them. Link straight to one product and make sure the page loads fast on a phone." },
      { q: "What is the best way to sell digital products on social media?", a: "Post consistent short videos that show a before-and-after, a quick win, or buyer results, and send viewers to a single product page that takes payment and delivers instantly." },
    ],
  },
  {
    slug: "do-you-need-an-email-list-to-sell-digital-products",
    title: "Do You Need an Email List to Sell Digital Products?",
    excerpt:
      "No — a link-in-bio store or sales page can make your first sales. But a list is the only audience you own, and since most buyers don't purchase on the first visit, email or WhatsApp follow-up increases sales.",
    category: "Email & Follow-up",
    readTime: "5 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "Can I sell digital products without an email list?", a: "Yes. A link-in-bio store or sales page can take payment and deliver the product without a list. A list mainly increases follow-up and repeat sales." },
      { q: "How many email subscribers do I need to sell a digital product?", a: "Fewer than most people think. A few hundred engaged subscribers who joined for a related free resource can support a product launch." },
      { q: "Is WhatsApp good for following up with buyers?", a: "Yes, especially for warm leads and higher-priced offers, because messages are read quickly. Email scales better for large lists, and many funnels use both." },
    ],
  },
  {
    slug: "good-conversion-rate-for-a-sales-page",
    title: "What Is a Good Conversion Rate for a Sales Page?",
    excerpt:
      "Roughly 2–5% of visitors buying is good for a digital product sales page: 2–3% is typical, above 5% is strong. Warm email traffic converts higher, cold social and ad traffic lower.",
    category: "Conversion",
    readTime: "5 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "What is a good conversion rate for a digital product?", a: "Roughly 2 to 5 percent of sales-page visitors buying. Around 2 to 3 percent is typical and above 5 percent is strong, depending on price and traffic source." },
      { q: "How do I calculate sales page conversion rate?", a: "Divide purchases by unique visitors to the sales page and multiply by 100. For example, 5 sales from 200 visitors is a 2.5 percent conversion rate." },
      { q: "Why is my sales page conversion rate under 1 percent?", a: "Usually the traffic doesn't match the offer, or the page doesn't make the specific result clear. Fix the headline, add proof, and send one call to action straight to checkout." },
    ],
  },
  {
    slug: "is-a-done-for-you-sales-funnel-worth-it",
    title: "Is a Done-For-You Sales Funnel Worth It? (And How to Spot a Scam)",
    excerpt:
      "Worth it if you have a product people want and your time is better spent elsewhere than learning funnel software. Not worth it as a 'guaranteed income' system — no honest provider guarantees sales.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "Nov 11, 2026",
    dateISO: "2026-11-11",
    featured: false,
    faqs: [
      { q: "Are done-for-you sales funnels a scam?", a: "Not inherently, but offers that guarantee income, sell identical resell-rights products as a business, show no live examples, or keep the account logins are red flags." },
      { q: "What should a done-for-you sales funnel include?", a: "A sales page written around your offer, a working checkout, product delivery, email or WhatsApp follow-up automation, and a handover so you own every account." },
      { q: "How much does a done-for-you sales funnel cost?", a: "Freelancers charge about $200 to $2,000 and agencies $5,000 or more. Legacy Falcon Marketing charges a flat $97 to $497 with 30 days of WhatsApp support." },
    ],
  },
  {
    slug: "how-much-does-a-sales-funnel-cost",
    title: "How Much Does a Sales Funnel Cost in 2026? (Real Numbers)",
    excerpt:
      "A sales funnel costs anywhere from $0 to $10,000+ depending on who builds it: DIY runs $30–$300 per month in tools, freelancers charge $200–$2,000, agencies charge $5,000+, and done-for-you services like Legacy Falcon Marketing cost $97–$497 flat.",
    category: "Pricing",
    readTime: "7 min read",
    date: "Jul 13, 2026",
    dateISO: "2026-07-13",
    updatedISO: "2026-11-11",
    featured: true,
    faqs: [
      { q: "How much does it cost to build a sales funnel yourself?", a: "About $30 to $300 per month in software for a page builder, email platform, and checkout, plus several weeks of your time." },
      { q: "How much do freelance funnel builders charge?", a: "Freelancers on marketplaces like Fiverr and Upwork typically charge $200 to $2,000 per funnel, depending on whether strategy and copywriting are included." },
      { q: "Is a sales funnel worth the money?", a: "Usually, if you have traffic. Lifting conversion from 1 percent to 2.5 percent more than doubles revenue from the same visitors, which often pays back a $497 build within a month." },
    ],
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
    updatedISO: "2026-11-11",
    featured: true,
    faqs: [
      { q: "What are the parts of a sales funnel for a digital product?", a: "An offer with a specific price, a landing page, a simple checkout, an email or WhatsApp follow-up sequence, and a repeatable traffic source." },
      { q: "How long does it take to build a sales funnel?", a: "Most creators can launch a working funnel in 7 to 14 days. Done-for-you builds at Legacy Falcon Marketing typically go live in about 7 days." },
      { q: "What is the difference between a sales funnel and a website?", a: "A website presents many things to many visitors; a sales funnel guides one type of visitor through one path to one purchase, which is why funnels usually convert better for digital products." },
    ],
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
  "why-is-my-digital-product-not-selling": ArticleNotSelling,
  "how-to-get-your-first-digital-product-sale": ArticleFirstSale,
  "how-to-price-a-digital-product": ArticlePricing,
  "stan-store-vs-gumroad-vs-kajabi": ArticlePlatforms,
  "how-to-sell-digital-products-on-tiktok-and-instagram": ArticleSocialSelling,
  "do-you-need-an-email-list-to-sell-digital-products": ArticleEmailList,
  "good-conversion-rate-for-a-sales-page": ArticleConversionRate,
  "is-a-done-for-you-sales-funnel-worth-it": ArticleDoneForYou,
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
        title={pageTitle(post.title)}
        description={post.excerpt}
        url={`https://legacyfalcons.com/blog/${post.slug}`}
        schema="article"
        articleData={{
          headline: post.title,
          datePublished: post.dateISO,
          dateModified: post.updatedISO,
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
          {post.updatedISO && (
            <span>
              Updated <time dateTime={post.updatedISO}>{post.updatedISO}</time>
            </span>
          )}
        </div>

        <Body />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="mt-12" aria-label="Related guides">
          <h2 className="text-2xl font-bold mb-4">Related guides</h2>
          <ul className="list-disc pl-6 space-y-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 4)
              .map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-primary underline">
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

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
