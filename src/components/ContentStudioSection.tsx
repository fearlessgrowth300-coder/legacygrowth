import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Users, Scissors, Play, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config/whatsapp";

const VIDEOS = [
  "/ugc/ugc-1.mp4",
  "/ugc/ugc-2.mp4",
  "/ugc/ugc-3.mp4",
  "/ugc/ugc-4.mp4",
  "/ugc/ugc-5.mp4",
  "/ugc/ugc-6.mp4",
  "/ugc/ugc-7.mp4",
  "/ugc/ugc-8.mp4",
];

const SERVICES = [
  {
    icon: Video,
    title: "Product Content",
    description: "Scroll-stopping videos that show off your product and make people want it.",
  },
  {
    icon: Users,
    title: "UGC Creation",
    description: "Authentic user-generated style content that builds trust and drives sales.",
  },
  {
    icon: Scissors,
    title: "Video Editing",
    description: "Polished, on-trend edits with hooks, captions and pacing built to convert.",
  },
];

function VideoCard({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    const v = ref.current;
    if (v) v.play().catch(() => {});
  };

  const pause = () => {
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <Card
      className="group relative overflow-hidden rounded-xl border-0 shadow-elegant hover:shadow-luxury transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <div className="aspect-[9/16] bg-black">
        <video
          ref={ref}
          src={src}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        <div className="rounded-full bg-white/90 p-4 shadow-lg">
          <Play className="h-6 w-6 fill-primary text-primary" />
        </div>
      </div>
    </Card>
  );
}

export function ContentStudioSection() {
  const handleWhatsAppClick = () => {
    window.open(
      getWhatsAppLink(
        "Hi Harper, I'd love to see content created for my product — UGC and edited video content. Can you help?"
      ),
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Video className="h-4 w-4" />
            <span className="font-medium">Content Studio</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Create Scroll-Stopping Content for Your Product
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From UGC to fully edited video content — we make the kind of videos that stop the
            scroll, build trust, and turn viewers into buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {VIDEOS.map((src, index) => (
            <VideoCard key={src} src={src} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want content like this for your product?
          </p>
          <Button
            size="xl"
            variant="cta"
            onClick={handleWhatsAppClick}
            className="group"
          >
            <MessageCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
            Get Content for Your Product
          </Button>
        </div>
      </div>
    </section>
  );
}
