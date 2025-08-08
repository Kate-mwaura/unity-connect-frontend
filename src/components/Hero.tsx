import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-unity-sacco.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Unity SACCO - Professional financial services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 50,000+ Members
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Financial
              <span className="block text-accent">Future, Together</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join Unity SACCO and experience the power of cooperative banking. 
              We offer competitive rates, personalized service, and a commitment 
              to helping our members achieve their financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light hover:shadow-glow transition-bounce text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="text-primary-foreground">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-accent mr-2" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Active Members</p>
              </div>
              <div className="text-primary-foreground">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="w-6 h-6 text-accent mr-2" />
                  <span className="text-2xl font-bold">4.8%</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Dividend Rate</p>
              </div>
              <div className="text-primary-foreground">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Shield className="w-6 h-6 text-accent mr-2" />
                  <span className="text-2xl font-bold">25+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Years Trusted</p>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-6">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 hover:shadow-glow transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">Secure Banking</h3>
              </div>
              <p className="text-primary-foreground/70">
                Your deposits are federally insured and protected with advanced security measures.
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 hover:shadow-glow transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">Better Rates</h3>
              </div>
              <p className="text-primary-foreground/70">
                Enjoy higher savings rates and lower loan rates compared to traditional banks.
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 hover:shadow-glow transition-smooth">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">Member Owned</h3>
              </div>
              <p className="text-primary-foreground/70">
                As a cooperative, we're owned by our members and focused on your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};