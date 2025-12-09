import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif text-2xl font-bold text-foreground block mb-4">
              Masala <span className="text-primary">Essence</span>
            </span>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting memorable experiences through exquisite cuisine and stunning event design
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </span>
              </Link>
              <Link href="/menu">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Catering Menu
                </span>
              </Link>
              <Link href="/gallery">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Decor Gallery
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">hello@masalaessence.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Event Avenue, City</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">Mon-Sat: 9AM - 7PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            2024 Masala Essence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
