import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Gathered IN HIS NAME Jesus Fellowship Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-center md:text-left text-primary-foreground/80 text-sm max-w-xs">
              A community of believers gathering together in prayer, worship, and fellowship 
              in the precious name of Jesus Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl text-gold mb-4">Quick Links</h3>
            <nav className="flex flex-col items-center gap-2">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Scripture */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-serif text-xl text-gold mb-4">Our Foundation</h3>
            <blockquote className="text-center md:text-right text-primary-foreground/80 text-sm italic max-w-xs">
              "For where two or three gather in my name, there am I with them."
              <footer className="mt-2 text-gold not-italic">— Matthew 18:20</footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-navy-light">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-primary-foreground/70">
            <p>© {currentYear} Gathered IN HIS NAME Jesus Prayer Fellowship.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-gold fill-gold" /> for His glory.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
