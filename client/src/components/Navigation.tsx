import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      data-testid="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-logo">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Masala <span className="text-primary">Essence</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-base font-medium transition-colors hover-elevate px-2 py-1 rounded-md ${
                  location === link.href
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button data-testid="button-book-event">Book Your Event</Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border"
          data-testid="nav-mobile"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-lg font-medium block py-2 ${
                    location === link.href ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                Book Your Event
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
