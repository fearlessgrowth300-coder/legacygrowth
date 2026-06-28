import { useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "#top" },
  { label: "SERVICES", href: "#services" },
  { label: "RESULTS", href: "#results" },
  { label: "REVIEWS", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const currencies = [
  { code: "USD", symbol: "$", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", flag: "🇬🇧" },
  { code: "CAD", symbol: "$", flag: "🇨🇦" },
  { code: "AUD", symbol: "$", flag: "🇦🇺" },
];

export function SiteHeader() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="h-[68px] flex items-center justify-between gap-4">
          {/* Left: logo */}
          <a
            href="#top"
            onClick={(e) => handleNav(e, "#top")}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img src="/falcon-mark.png" alt="Legacy Falcon" className="h-9 w-auto" />
            <span className="font-heading text-xl font-black tracking-tight text-black">
              LEGACY<span className="text-gray-400 font-extrabold">FALCON</span>
            </span>
          </a>

          {/* Center: nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-heading text-[15px] font-extrabold tracking-wide text-black hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: currency + cart */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Currency converter */}
            <div className="relative">
              <button
                onClick={() => setOpen((o) => !o)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                className="flex items-center gap-1.5 font-heading text-[15px] font-extrabold text-black hover:text-primary transition-colors"
                aria-label="Change currency"
              >
                <span className="text-base leading-none">{currency.flag}</span>
                <span>
                  {currency.code} {currency.symbol}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg border border-black/10 bg-white shadow-lg overflow-hidden z-50">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm font-semibold text-black hover:bg-muted text-left"
                    >
                      <span>{c.flag}</span>
                      <span>
                        {c.code} {c.symbol}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => navigate("/payment-methods")}
              className="text-black hover:text-primary transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" strokeWidth={1.75} />
            </button>

            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
