import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMenuStore } from "@/lib/menuStore";
import logoImage from "@assets/Priyanka_Aggarwal_(3)_1765274137793.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const selectedItems = useMenuStore((state) => state.selectedItems);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between gap-4">
        <Link to="/" data-testid="link-logo">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Masala Essence" className="h-14 w-auto" />
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          data-testid="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <span
                className={`text-base font-medium transition-colors hover-elevate px-2 py-1 rounded-md ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {selectedItems.length > 0 && (
            <Link to="/contact">
              <Button
                variant="outline"
                className="relative"
                data-testid="button-quote-cart"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Quote
                <Badge className="ml-2" variant="default">
                  {selectedItems.length}
                </Badge>
              </Button>
            </Link>
          )}
          <Link to="/contact">
            <Button data-testid="button-book-event">Book Your Event</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {selectedItems.length > 0 && (
            <Link to="/contact">
              <Button
                variant="outline"
                size="icon"
                className="relative"
                data-testid="button-quote-cart-mobile"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {selectedItems.length}
                </span>
              </Button>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border"
          data-testid="nav-mobile"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <span
                  className={`text-lg font-medium block py-2 ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link to="/contact">
              <Button
                className="w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Your Event
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
