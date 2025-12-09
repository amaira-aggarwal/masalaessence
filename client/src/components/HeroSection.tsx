import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/generated_images/elegant_indian_event_table.png';

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto">
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Creating Unforgettable
          <br />
          <span className="text-primary">Moments</span>
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-hero-subtitle"
        >
          Premium Indian catering and exquisite event decor that transforms your
          special occasions into cherished memories
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta">
              Plan Your Event
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-menu"
            >
              View Our Menu
            </Button>
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
