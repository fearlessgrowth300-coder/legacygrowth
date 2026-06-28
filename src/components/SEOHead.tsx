import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: "home" | "blog" | "article";
  articleData?: {
    headline: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    category: string;
  };
}

const DEFAULT_URL = "https://legacygrowth.site/";
const DEFAULT_IMAGE = `${DEFAULT_URL}legacy-falcon-logo-og.jpg`;

function setMeta(selector: string, content: string) {
  const tag = document.querySelector(selector);
  if (tag) {
    tag.setAttribute("content", content);
  }
}

export function SEOHead({
  title = "Legacy Falcon Marketing | Digital Product Marketing & Sales Funnel Strategy",
  description = "Legacy Falcon Marketing helps creators, busy moms, and product owners turn digital products and courses into consistent sales with fast, strategic marketing systems, sales funnels, content strategy, and conversion-focused launch support.",
  keywords = "Legacy Falcon Marketing, digital product marketing, sales funnel strategy, course marketing, digital product sales, marketing for creators, marketing for busy moms, content strategy, conversion optimization, online course sales, family freedom marketing, digital product launch support",
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
  schema = "home",
  articleData,
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:site_name"]', "Legacy Falcon Marketing");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[property="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);
    setMeta('meta[property="twitter:image"]', image);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    }

    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const structuredDataGraph: any[] = [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        "name": "Legacy Falcon Marketing",
        "alternateName": ["Legacy Falcon", "Falcon Marketing", "Falcon"],
        "url": url,
        "logo": `${url}favicon-512.png`,
        "image": image,
        "slogan": "Speed, sharp vision, precision, power, and freedom for digital product owners.",
        "description": "Legacy Falcon Marketing helps creators, entrepreneurs, busy moms, and course owners market digital products with strategic sales funnels, sharp positioning, content systems, and conversion-focused launch support.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+1-302-329-5673",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://wa.me/13023295673"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        "url": url,
        "name": "Legacy Falcon Marketing",
        "publisher": {
          "@id": `${url}#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#professional-service`,
        "name": "Legacy Falcon Marketing",
        "url": url,
        "image": image,
        "description": "Digital product marketing, course sales funnel strategy, product positioning, content strategy, launch support, and conversion optimization for creators and entrepreneurs.",
        "areaServed": "Worldwide",
        "provider": {
          "@id": `${url}#organization`
        },
        "serviceType": [
          "Digital product marketing",
          "Sales funnel strategy",
          "Course marketing",
          "Conversion optimization",
          "Content marketing strategy"
        ]
      },
      {
        "@type": "Service",
        "@id": `${url}#digital-product-marketing-service`,
        "name": "Digital Product Marketing and Sales Funnel Strategy",
        "serviceType": "Digital Product Marketing",
        "provider": {
          "@id": `${url}#organization`
        },
        "areaServed": "Worldwide",
        "description": "Strategic marketing systems that help product owners move fast, find the right audience, sharpen their message, and turn digital products or courses into consistent revenue.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": url
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${url}#website`
        },
        "about": {
          "@id": `${url}#digital-product-marketing-service`
        },
        "publisher": {
          "@id": `${url}#organization`
        },
        "inLanguage": "en-US"
      }
    ];

    if (schema === "article" && articleData) {
      structuredDataGraph.push({
        "@type": "Article",
        "headline": articleData.headline,
        "datePublished": articleData.datePublished,
        "dateModified": articleData.dateModified || articleData.datePublished,
        "author": {
          "@type": "Organization",
          "name": articleData.author || "Legacy Falcon Marketing"
        },
        "publisher": {
          "@id": `${url}#organization`
        },
        "image": image,
        "articleSection": articleData.category,
        "inLanguage": "en-US"
      });
    }

    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": structuredDataGraph
    });
    document.head.appendChild(script);
  }, [title, description, keywords, image, url, schema, articleData]);

  return null;
}
