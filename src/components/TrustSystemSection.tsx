import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/config/whatsapp";
import trustImage from "@/assets/hero-lifestyle-2.jpg";

export function TrustSystemSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Left: image */}
          <div className="order-1">
            <img
              src={trustImage}
              alt="Turn your digital product into a system people trust"
              className="w-full h-full max-h-[520px] object-cover rounded-2xl shadow-luxury"
              loading="lazy"
            />
          </div>

          {/* Right: text */}
          <div className="order-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-foreground leading-tight mb-6">
              Turn Your Digital Product Into{" "}
              <span className="underline">A System People Actually Trust.</span>
            </h2>

            <p className="text-foreground font-bold text-lg mb-5">
              You already have the course. You already know there's money in digital
              products.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              But if your profile, content, funnel, and conversations are weak, people will
              scroll past you like you don't exist.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Harper helps beginners set up the missing pieces: a clear offer, a
              trust-building profile, a simple funnel, content direction, and a DM flow
              that feels natural — not pushy.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              So instead of feeling stuck with "just a course," you finally have a setup
              that can bring people from stranger → follower → lead → buyer.
            </p>

            <Button
              size="xl"
              onClick={() =>
                window.open(
                  getWhatsAppLink("Hi Harper! I'm ready to start my setup."),
                  "_blank"
                )
              }
              className="w-full rounded-full font-heading font-extrabold uppercase tracking-wide text-base py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold"
            >
              Start My Setup With Harper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
