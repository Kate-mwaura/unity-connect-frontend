import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Shield,
  CreditCard,
  Smartphone
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Unity SACCO</h3>
                <p className="text-xs text-primary-foreground/70">Your Financial Future, Together</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering our members with financial solutions that make a difference. 
              Join the Unity SACCO family and experience cooperative banking at its finest.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm">FDIC Insured | Equal Housing Lender</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Loan Products
                </a>
              </li>
              <li>
                <a href="#rates" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Interest Rates
                </a>
              </li>
              <li>
                <a href="#membership" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Membership
                </a>
              </li>
              <li>
                <a href="#careers" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-primary-foreground/80">
                <CreditCard className="w-4 h-4 mr-2 text-accent" />
                <span>Online Banking</span>
              </li>
              <li className="flex items-center text-primary-foreground/80">
                <Smartphone className="w-4 h-4 mr-2 text-accent" />
                <span>Mobile App</span>
              </li>
              <li>
                <a href="#loans" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="#mortgages" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home Mortgages
                </a>
              </li>
              <li>
                <a href="#auto-loans" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Auto Financing
                </a>
              </li>
              <li>
                <a href="#business" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Business Banking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-primary-foreground/80">
                    Unity House, Kenyatta Avenue<br />
                    P.O. Box 12345-00100<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+254712345678" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  +254 712 345 678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:info@unitysacco.co.ke" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  info@unitysacco.co.ke
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div className="text-primary-foreground/80">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth p-2"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth p-2"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth p-2"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth p-2"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Unity SACCO. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="#security" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Security Center
              </a>
              <a href="#accessibility" className="text-primary-foreground/70 hover:text-accent transition-smooth">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};