import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  Home, 
  Car, 
  GraduationCap, 
  CreditCard, 
  PiggyBank,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description: "Competitive dividend rates with flexible access to your funds. Build your financial foundation with our secure savings options.",
    features: ["4.8% Annual Dividend", "No Monthly Fees", "Online Banking", "Mobile App Access"],
    color: "bg-secondary"
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make homeownership affordable with our competitive mortgage rates and personalized service from application to closing.",
    features: ["Low Interest Rates", "Flexible Terms", "Quick Approval", "Local Underwriting"],
    color: "bg-primary"
  },
  {
    icon: Car,
    title: "Auto Loans",
    description: "Finance your dream vehicle with rates as low as 2.9% APR. New, used, or refinanced - we've got you covered.",
    features: ["Rates from 2.9% APR", "100% Financing", "Fast Processing", "Extended Warranties"],
    color: "bg-accent"
  },
  {
    icon: CreditCard,
    title: "Personal Loans",
    description: "Quick access to funds for life's unexpected moments or planned purchases with fixed rates and flexible terms.",
    features: ["Up to $50,000", "Fixed Interest Rates", "No Prepayment Penalty", "Same-Day Approval"],
    color: "bg-secondary"
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future with student loans featuring competitive rates and flexible repayment options.",
    features: ["Competitive Rates", "Flexible Repayment", "No Origination Fees", "Grace Periods"],
    color: "bg-primary"
  },
  {
    icon: TrendingUp,
    title: "Investment Services",
    description: "Grow your wealth with our comprehensive investment options and expert financial planning guidance.",
    features: ["Retirement Planning", "Investment Portfolios", "Financial Advisors", "Tax Advantages"],
    color: "bg-accent"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Financial Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From everyday banking to major life purchases, Unity SACCO offers comprehensive 
            financial services designed to help our members thrive at every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-bounce border-border hover:border-primary/30 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members who have chosen Unity SACCO for their financial needs. 
            Become a member today and start experiencing the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light hover:shadow-glow transition-bounce"
            >
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};