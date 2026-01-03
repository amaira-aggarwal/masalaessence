import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";
import logoImage from "@assets/Priyanka_Aggarwal_(3)_1765274137793.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={logoImage}
              alt="Masala Essence"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting memorable experiences through exquisite cuisine and
              stunning event design
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/masala.essence/"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              {/*to be added*/}
              {/* <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/masala-essence/"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </span>
              </Link>
              <Link to="/menu">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Catering Menu
                </span>
              </Link>
              <Link to="/gallery">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </span>
              </Link>
              <Link to="/contact">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </span>
              </Link>
              <Link to="/termsandconditions">
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms and Conditions
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">(91+) 9873378500</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  masalaessenceofficial@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Gurugram, Haryana, India
                </span>
              </div>
              <div className="flex items-start gap-3"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            2022 Masala Essence. All rights reserved. Website by Amaira Aggarwal
          </p>
        </div>
      </div>
    </footer>
  );
}
