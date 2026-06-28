import { Instagram, Twitter, Youtube } from "lucide-react";

const policyLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Disclaimer",
  "Refund Policy",
  "FAQ",
];

const bottomLinks = [
  { label: "Home", href: "#top" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace("#", "");
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-12">
        {/* Top row: logo · policy links · socials */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" onClick={(e) => scrollTo(e, "#top")} className="flex items-center gap-2 flex-shrink-0">
            <img src="/falcon-mark.png" alt="Legacy Falcon" className="h-8 w-auto" />
            <span className="font-heading text-lg font-black text-black">
              LEGACY<span className="text-gray-400 font-extrabold">FALCON</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {policyLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-heading text-sm font-bold text-black hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-black text-white hover:bg-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-black/10" />

        {/* Bottom row: copyright · nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Legacy Falcon Marketing, LLC — All Rights Reserved
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-black underline hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
