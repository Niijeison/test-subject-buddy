import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="Gathered IN HIS NAME Jesus" className="h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              United in faith, gathered in His name, growing together in the love of Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-serif text-secondary text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-secondary text-lg mb-4">Join Us</h3>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p>Every Sunday</p>
              <p>10:00 AM - 12:00 PM</p>
              <p className="text-secondary font-medium mt-4">
                "For where two or three gather in my name, there am I with them."
              </p>
              <p className="text-xs">— Matthew 18:20</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Gathered IN HIS NAME Jesus Prayer Fellowship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
