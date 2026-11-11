import type { ReactNode } from "react";
import { Link } from "react-router-dom";

// Answer-engine articles. Every one follows the same shape on purpose:
// a 40-60 word direct answer first (what AI Overviews / ChatGPT / Perplexity
// lift verbatim), then question-shaped H2s, each answered in its first sentence.

const WHATSAPP_URL = "https://wa.me/16615518269";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold mt-12 mb-4">{children}</h2>
);
const Answer = ({ children }: { children: ReactNode }) => (
  <p className="text-xl leading-relaxed font-medium border-l-4 border-primary pl-5 bg-primary/5 py-4 rounded-r-lg">
    {children}
  </p>
);
const L = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="text-primary underline">{children}</Link>
);
const WA = ({ children }: { children: ReactNode }) => (
  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
    {children}
  </a>
);
const Article = ({ children }: { children: ReactNode }) => (
  <article className="prose prose-lg max-w-none">{children}</article>
);

export function ArticleNotSelling() {
  return (
    <Article>
      <Answer>
        Most digital products don't sell for one of three reasons: not enough of the
        right people see them, the offer doesn't promise a specific result, or the
        sales page and checkout lose buyers before they pay. Fix them in that order —
        visibility first, then the offer, then the page — and measure each step
        before changing the next.
      </Answer>

      <H2>How do I know which part of my sales process is broken?</H2>
      <p>
        Look at three numbers: visitors to your product page, clicks to checkout, and
        completed purchases. Under about 100 visitors a week, the problem is traffic —
        nothing else can be judged yet. Plenty of visitors but few checkout clicks
        means the offer or page isn't convincing. Lots of checkout clicks but few
        purchases means the checkout itself is costing you sales.
      </p>

      <H2>1. Not enough people know the product exists</H2>
      <p>
        This is the most common cause, and the most overlooked. Posting about a
        product once or twice is not a launch. Mention it in most of your content for
        30 days, put it in your bio link, pin it, and email it. Many creators who
        survey non-buyers discover most of them never saw the offer at all.
      </p>

      <H2>2. The product describes what it is, not what it does</H2>
      <p>
        "A 40-page budgeting ebook" sells worse than "Pay off your first $1,000 of
        debt in 60 days." Buyers pay for an outcome. Rewrite your headline as{" "}
        <strong>"[Specific result] for [specific person] in [timeframe]."</strong>
      </p>

      <H2>3. The audience is too broad</H2>
      <p>
        "For anyone who wants to make money online" speaks to no one. Narrow offers —
        meal plans for busy nurses, Notion templates for wedding planners — convert
        better because the right buyer instantly recognizes themselves.
      </p>

      <H2>4. There's no proof</H2>
      <p>
        Strangers need evidence: testimonials, screenshots, a preview of what's
        inside, or your own results. If you have no buyers yet, give the product free
        to 5–10 people in exchange for honest feedback you can quote.
      </p>

      <H2>5. The price doesn't match the perceived value</H2>
      <p>
        Too low can hurt as much as too high — a $5 course signals low value. See our{" "}
        <L to="/blog/how-to-price-a-digital-product">digital product pricing guide</L>{" "}
        for typical ranges by product type.
      </p>

      <H2>6. The checkout has too many steps</H2>
      <p>
        Every extra field or redirect loses buyers. Keep checkout to name, email, and
        payment, and offer the payment methods your audience actually uses.
      </p>

      <H2>7. There's no follow-up</H2>
      <p>
        Most people don't buy on their first visit. Without an email or WhatsApp
        follow-up, every non-buyer is gone forever. Read{" "}
        <L to="/blog/do-you-need-an-email-list-to-sell-digital-products">
          whether you need an email list
        </L>{" "}
        for the simplest version.
      </p>

      <H2>8. The page doesn't work on mobile</H2>
      <p>
        Most social traffic is on phones. Open your sales page on your own phone and
        try to buy. If anything is slow, tiny, or broken, that's lost revenue.
      </p>

      <H2>9. You changed too many things at once</H2>
      <p>
        If you rewrite the headline, change the price, and switch platforms in the
        same week, you'll never know what worked. Change one thing, wait for enough
        visitors, then decide.
      </p>

      <H2>Can someone fix my digital product sales for me?</H2>
      <p>
        Yes. Legacy Falcon Marketing audits and rebuilds underperforming product
        funnels — offer, sales page, checkout, and follow-up — for $97–$497 flat. See{" "}
        <L to="/blog/is-a-done-for-you-sales-funnel-worth-it">
          whether a done-for-you funnel is worth it
        </L>
        , or <WA>message us on WhatsApp</WA> with a link to your product.
      </p>
    </Article>
  );
}

export function ArticleFirstSale() {
  return (
    <Article>
      <Answer>
        To get your first digital product sale with no audience, sell to people who
        already gather somewhere else: your personal network, online communities,
        marketplaces like Etsy or Gumroad Discover, and other creators' audiences.
        Pre-sell at an early-bird price, make the offer specific, and reduce risk with
        a money-back guarantee. Expect the first sale to take weeks, not days.
      </Answer>

      <H2>Can you sell a digital product with zero followers?</H2>
      <p>
        Yes, but not by posting into the void. With no audience, you borrow
        attention: marketplaces where buyers already search, communities where your
        buyers ask questions, and partnerships with creators who already have the
        audience you want.
      </p>

      <H2>Where do first sales usually come from?</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Your personal network.</strong> Tell people directly what you made and who it's for. Ask for referrals, not pity purchases.</li>
        <li><strong>Marketplaces.</strong> Etsy, Gumroad, and Payhip put your product in front of people already searching for it.</li>
        <li><strong>Communities.</strong> Answer questions genuinely in Reddit, Facebook groups, and forums. Most ban link-dropping — help first and mention the product only where the rules allow.</li>
        <li><strong>Other creators.</strong> Offer an affiliate commission or a guest post to someone who already serves your buyer.</li>
      </ul>

      <H2>Should I pre-sell before building the product?</H2>
      <p>
        Pre-selling is the cheapest way to validate an idea. Put up a simple sales
        page with an early-bird price and a delivery date. If nobody buys, you've
        saved weeks of building; if people do, they've funded the work and told you
        what they want.
      </p>

      <H2>How long does it take to get the first sale?</H2>
      <p>
        Anywhere from a few days to a couple of months. It depends far more on how
        many of the right people see the offer than on the product itself. Commit to
        30 days of consistent promotion before deciding the product doesn't work.
      </p>

      <H2>What should I do if I've tried and still have no sales?</H2>
      <p>
        Work through the checklist in{" "}
        <L to="/blog/why-is-my-digital-product-not-selling">
          why your digital product isn't selling
        </L>
        . If you'd rather hand it off, a{" "}
        <L to="/blog/how-to-build-a-sales-funnel-for-digital-products">sales funnel</L>{" "}
        built around one clear offer is usually the fastest fix —{" "}
        <WA>ask us on WhatsApp</WA> for a quote.
      </p>
    </Article>
  );
}

export function ArticlePricing() {
  return (
    <Article>
      <Answer>
        Price a digital product by the result it delivers, not the effort it took.
        Typical 2026 ranges: templates $15–$50, ebooks $10–$47, ebook-plus-video
        bundles $47–$197, mini-courses $47–$197, and full courses $197–$997. Start
        in the lower-middle of your range, use prices ending in 7, and raise the price
        once sales and testimonials come in.
      </Answer>

      <H2>How do I decide what to charge for my digital product?</H2>
      <p>
        Ask what the outcome is worth to the buyer. A template that saves a small
        business owner 10 hours a month can sell for $97; a generic ebook that solves
        nothing specific struggles at $9.99. Then check what similar products in your
        niche sell for on Gumroad, Etsy, or Stan Store and place yourself within that
        range.
      </p>

      <H2>What do different digital products typically sell for?</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Templates and planners:</strong> $15–$50 (more for business-critical systems).</li>
        <li><strong>Ebooks and guides:</strong> $10–$47.</li>
        <li><strong>Ebook plus video walkthrough:</strong> $47–$197.</li>
        <li><strong>Mini-courses:</strong> $47–$197.</li>
        <li><strong>Full courses:</strong> $197–$997.</li>
        <li><strong>Coaching or done-with-you programs:</strong> $500 and up.</li>
      </ul>
      <p>These are typical ranges from creator platforms, not rules — your niche and proof matter more.</p>

      <H2>Is it better to price low to get more sales?</H2>
      <p>
        Usually not. Very low prices signal low value and attract buyers who don't
        finish what they buy. A $27–$47 entry product followed by a higher-priced
        offer generally earns more than a single $7 product.
      </p>

      <H2>Do prices ending in 7 really sell better?</H2>
      <p>
        Prices like $27, $47, and $97 are the convention in digital products and
        commonly perform at least as well as round numbers. It's a small lever —
        never a substitute for a clear offer.
      </p>

      <H2>When should I raise my price?</H2>
      <p>
        When you have testimonials, when buyers say it was "worth way more," or when
        sales stay steady after a small increase. Raise in steps and watch your{" "}
        <L to="/blog/good-conversion-rate-for-a-sales-page">conversion rate</L>.
      </p>

      <H2>Should I bundle products?</H2>
      <p>
        Yes — bundling a template with a course at a discount raises average order
        value. A checkout upsell does the same thing automatically, which is one
        reason a{" "}
        <L to="/blog/how-to-build-a-sales-funnel-for-digital-products">sales funnel</L>{" "}
        outperforms a plain product link.
      </p>
    </Article>
  );
}

export function ArticlePlatforms() {
  return (
    <Article>
      <Answer>
        For beginners: Gumroad is the cheapest way to start because there's no
        monthly fee — it takes a cut of each sale. Stan Store suits creators selling
        from TikTok or Instagram who want a polished link-in-bio store for a flat
        monthly fee. Kajabi suits established course sellers who need courses, email,
        and community in one place, and costs the most.
      </Answer>

      <H2>Which platform is best if I'm just starting?</H2>
      <p>
        Gumroad (or Payhip) if you want to test an idea with no upfront cost. Stan
        Store if your buyers come from social media and you'll sell regularly enough
        that a flat monthly fee beats a per-sale percentage. Pricing changes often, so
        check each platform's current pricing page before deciding.
      </p>

      <H2>Gumroad: who is it for?</H2>
      <p>
        People selling downloads — ebooks, templates, presets — who want the fastest
        setup and no monthly bill. Trade-off: the per-sale fee adds up as you grow,
        and branding and funnel options are limited.
      </p>

      <H2>Stan Store: who is it for?</H2>
      <p>
        Social-first creators. It turns your bio link into a storefront with checkout
        and delivery built in. Trade-off: it's a storefront, not a full funnel —
        advanced email sequences and multi-step funnels need other tools.
      </p>

      <H2>Kajabi: who is it for?</H2>
      <p>
        Coaches and course creators already making sales who want courses, email
        marketing, landing pages, and community under one login. Trade-off: the
        monthly cost and learning curve are hard to justify before your first
        consistent sales.
      </p>

      <H2>Does the platform matter more than the marketing?</H2>
      <p>
        No. The same product sells about the same on any of them — what changes
        results is the offer, the sales page, and the traffic. Pick the cheapest tool
        that fits today and switch when you outgrow it. If sales are stuck, read{" "}
        <L to="/blog/why-is-my-digital-product-not-selling">why digital products don't sell</L>.
      </p>

      <H2>Can you set this up for me?</H2>
      <p>
        Yes. Legacy Falcon Marketing sets up and connects the platform that fits your
        product — store, checkout, follow-up, and sales page — as part of a{" "}
        <L to="/blog/how-much-does-a-sales-funnel-cost">$97–$497 done-for-you funnel</L>.{" "}
        <WA>Message us on WhatsApp</WA> to ask which fits you.
      </p>
    </Article>
  );
}

export function ArticleSocialSelling() {
  return (
    <Article>
      <Answer>
        To sell digital products on TikTok and Instagram, put a store or sales-page
        link in your bio, post short videos that show the problem your product solves
        or the result it creates, and end each one with a clear "link in bio" call to
        action. Neither app delivers digital files natively, so the link must handle
        checkout and delivery.
      </Answer>

      <H2>Can you sell digital products directly on Instagram or TikTok?</H2>
      <p>
        Not natively in most cases — Instagram Shopping is built for physical
        products, and TikTok Shop availability varies by country and category. The
        standard approach is a link-in-bio store (Stan Store, Gumroad, Beacons) or
        your own sales page that takes payment and delivers the file automatically.
      </p>

      <H2>What content sells digital products on social media?</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Before and after:</strong> the messy budget versus the finished spreadsheet.</li>
        <li><strong>Quick wins:</strong> teach one step for free, sell the full system.</li>
        <li><strong>Behind the scenes:</strong> show yourself using the product.</li>
        <li><strong>Buyer results:</strong> screenshots and testimonials, with permission.</li>
      </ul>

      <H2>How often should I post to make sales?</H2>
      <p>
        Consistency beats volume: one useful video a day for 30 days teaches you
        more than ten in a week followed by silence. Mention the product in most
        posts — creators routinely under-promote.
      </p>

      <H2>Why am I getting views but no sales?</H2>
      <p>
        Either the content attracts people who aren't buyers (entertaining, but
        unrelated to the problem) or the bio link loses them. Make the link go
        straight to one product, not a menu of ten, and make sure it loads fast on a
        phone. More fixes are in{" "}
        <L to="/blog/why-is-my-digital-product-not-selling">this checklist</L>.
      </p>

      <H2>Should I use a link in bio or a full sales funnel?</H2>
      <p>
        Start with a link in bio. Move to a funnel — sales page, checkout upsell,
        and follow-up — once you have steady traffic, because a funnel turns the same
        views into more revenue. See{" "}
        <L to="/blog/how-to-build-a-sales-funnel-for-digital-products">
          how to build one
        </L>{" "}
        or compare{" "}
        <L to="/blog/stan-store-vs-gumroad-vs-kajabi">Stan Store, Gumroad, and Kajabi</L>.
      </p>
    </Article>
  );
}

export function ArticleEmailList() {
  return (
    <Article>
      <Answer>
        No, you don't need an email list to make your first digital product sales —
        a link-in-bio store or sales page can take payment and deliver the product.
        But a list is the only audience you own, and most buyers don't purchase on
        their first visit, so adding email or WhatsApp follow-up usually increases
        sales from the same traffic.
      </Answer>

      <H2>Why does an email list matter if social media already works?</H2>
      <p>
        Algorithms decide who sees your posts; an email lands in the inbox of
        everyone who opted in. If an account is restricted or reach drops, the list
        is still yours. It's also where repeat sales happen — past buyers are the
        easiest people to sell to.
      </p>

      <H2>How small can a list be and still make sales?</H2>
      <p>
        Smaller than most people think. A few hundred engaged subscribers who joined
        for a related free resource can support a product launch. Engagement matters
        more than size.
      </p>

      <H2>What's the simplest way to start a list?</H2>
      <p>
        Offer one free, specific resource related to your paid product — a checklist,
        template, or short video — in exchange for an email. Put the signup in your
        bio link. Then send a short automated sequence: deliver the freebie, share a
        quick win, show proof, and introduce the paid product.
      </p>

      <H2>Is WhatsApp follow-up a good alternative to email?</H2>
      <p>
        For many audiences, yes — messages are read quickly and feel personal. It
        works best for warm leads and higher-priced offers; email scales better for
        large lists. Many funnels use both.
      </p>

      <H2>How does a list fit into a sales funnel?</H2>
      <p>
        It's the follow-up stage: visitors who didn't buy are captured and reminded.
        That's step 4 of our{" "}
        <L to="/blog/how-to-build-a-sales-funnel-for-digital-products">
          funnel building guide
        </L>
        , and it's included in every{" "}
        <L to="/blog/is-a-done-for-you-sales-funnel-worth-it">done-for-you funnel</L> we build.
      </p>
    </Article>
  );
}

export function ArticleConversionRate() {
  return (
    <Article>
      <Answer>
        A good conversion rate for a digital product sales page is roughly 2–5% of
        visitors buying; around 2–3% is typical and above 5% is strong. Warm traffic
        such as email subscribers often converts well above that, while cold social
        or ad traffic usually converts lower. Your own baseline matters more than any
        industry average.
      </Answer>

      <H2>How do I calculate my conversion rate?</H2>
      <p>
        Divide purchases by unique visitors to the sales page, then multiply by 100.
        200 visitors and 5 sales is a 2.5% conversion rate. Measure at least a few
        hundred visitors before drawing conclusions — small numbers swing wildly.
      </p>

      <H2>Why does traffic source change the conversion rate so much?</H2>
      <p>
        Because intent differs. Someone who joined your email list and read three
        emails already trusts you; someone who scrolled past a video doesn't. Always
        compare conversion rates per source, not as one blended number.
      </p>

      <H2>Does price affect conversion rate?</H2>
      <p>
        Yes. A $17 template converts higher than a $497 course from the same visitors.
        That's why revenue per visitor (revenue ÷ visitors) is a better scorecard than
        conversion rate alone. Our{" "}
        <L to="/#roi-calculator">funnel ROI calculator</L> shows how each changes your income.
      </p>

      <H2>How can I improve my sales page conversion rate?</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lead with the specific result in the headline.</li>
        <li>Add proof near the top: testimonials, screenshots, previews.</li>
        <li>Answer objections (price, time, "will this work for me?") on the page.</li>
        <li>Use one call to action, repeated, linking straight to checkout.</li>
        <li>Test on a phone — most visitors are on mobile.</li>
        <li>Follow up with non-buyers by email or WhatsApp.</li>
      </ul>

      <H2>My conversion rate is under 1% — what's wrong?</H2>
      <p>
        Usually a mismatch between the traffic and the offer, or a page that doesn't
        make the result clear. Work through{" "}
        <L to="/blog/why-is-my-digital-product-not-selling">these nine causes</L>, or{" "}
        <WA>send us your page on WhatsApp</WA> for a review.
      </p>
    </Article>
  );
}

export function ArticleDoneForYou() {
  return (
    <Article>
      <Answer>
        A done-for-you sales funnel is worth it if you already have a product people
        want and your time is better spent on content or customers than on learning
        page builders, checkout, and email automation. It's not worth it if you're
        buying it as a "guaranteed income" system — no honest provider can guarantee
        sales, and any who do are a red flag.
      </Answer>

      <H2>What does a done-for-you sales funnel include?</H2>
      <p>
        A legitimate one includes a sales or landing page written around your offer,
        a working checkout, product delivery, follow-up automation (email or
        WhatsApp), and a handover so you own and can edit everything. At Legacy
        Falcon Marketing that's $97–$497 flat with 30 days of WhatsApp support — see
        the{" "}
        <L to="/blog/how-much-does-a-sales-funnel-cost">full cost breakdown</L>.
      </p>

      <H2>How can I tell if a done-for-you offer is a scam?</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Guaranteed income claims.</strong> Nobody controls your results — that depends on your product, niche, and traffic.</li>
        <li><strong>"Done-for-you products with resell rights" sold as a business.</strong> Thousands of people sell the identical product; the real seller is the one selling the package.</li>
        <li><strong>No live examples.</strong> Ask to see funnels they've built that you can open yourself.</li>
        <li><strong>You don't own the accounts.</strong> You should hold the logins to every tool.</li>
        <li><strong>Vague refund terms.</strong> Get the refund policy in writing before paying.</li>
      </ul>

      <H2>Is it better to build a funnel myself?</H2>
      <p>
        If you enjoy the technical side and have weeks to spare, yes — our{" "}
        <L to="/blog/how-to-build-a-sales-funnel-for-digital-products">step-by-step guide</L>{" "}
        covers everything. DIY costs $30–$300 a month in tools; the hidden cost is the
        time and the lost sales while the first version gets fixed.
      </p>

      <H2>How fast does a done-for-you funnel go live?</H2>
      <p>
        Most of our builds are live in about 7 days. Sales depend on traffic, so plan
        how people will find the funnel — see{" "}
        <L to="/blog/how-to-sell-digital-products-on-tiktok-and-instagram">
          selling on TikTok and Instagram
        </L>
        .
      </p>

      <H2>What should I ask before hiring someone?</H2>
      <p>
        Ask what exactly is delivered, how many revisions are included, who writes the
        copy, who owns the accounts, what support you get after launch, and what the
        refund policy covers. Our answers are in the{" "}
        <L to="/#faq">FAQ</L>, or <WA>ask us directly on WhatsApp</WA>.
      </p>
    </Article>
  );
}
