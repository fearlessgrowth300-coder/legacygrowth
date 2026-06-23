import microsoftLogo from "@/assets/logos/microsoft.png";
import danoneLogo from "@/assets/logos/danone.png";
import pfizerLogo from "@/assets/logos/pfizer.png";
import paramountLogo from "@/assets/logos/paramount.png";
import netflixLogo from "@/assets/logos/netflix.png";
import amazonLogo from "@/assets/logos/amazon.png";
import taboolaLogo from "@/assets/logos/taboola.png";
import visaLogo from "@/assets/logos/visa.png";
import tunecoreLogo from "@/assets/logos/tunecore.png";
import airbnbLogo from "@/assets/logos/airbnb.png";
import walmartLogo from "@/assets/logos/walmart.png";
import fiverrLogo from "@/assets/logos/fiverr.png";
import googleLogo from "@/assets/logos/google.png";
import paypalLogo from "@/assets/logos/paypal.png";
import stripeLogo from "@/assets/logos/stripe.png";
// NOTE: skool.png is 168KB — very large for a small logo. Should be replaced with an optimized version (< 20KB).
import skoolLogo from "@/assets/logos/skool.png";
import beaconsLogo from "@/assets/logos/beacons.png";

export function TrustedLogosSection() {
  const logos = [
    { src: microsoftLogo, alt: "Microsoft" },
    { src: danoneLogo, alt: "Danone" },
    { src: pfizerLogo, alt: "Pfizer" },
    { src: paramountLogo, alt: "Paramount" },
    { src: netflixLogo, alt: "Netflix" },
    { src: amazonLogo, alt: "Amazon" },
    { src: taboolaLogo, alt: "Taboola" },
    { src: visaLogo, alt: "Visa" },
    { src: tunecoreLogo, alt: "TuneCore" },
    { src: airbnbLogo, alt: "Airbnb" },
    { src: walmartLogo, alt: "Walmart" },
    { src: fiverrLogo, alt: "Fiverr" },
    { src: googleLogo, alt: "Google" },
    { src: paypalLogo, alt: "PayPal" },
    { src: stripeLogo, alt: "Stripe" },
    { src: skoolLogo, alt: "Skool" },
    { src: beaconsLogo, alt: "Beacons" },
  ];

  return (
    <div className="py-8 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6">
          Trusted By Over 2.7 Million Customers
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex min-h-10 min-w-[88px] items-center justify-center sm:min-w-[112px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-8 md:h-10"
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
