import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    location: "Nairobi",
    rating: 5,
    text: "Unity SACCO helped me expand my business with their excellent loan terms. The staff was supportive throughout the entire process, and I couldn't be happier with the service.",
    avatar: "SJ"
  },
  {
    name: "Michael Ochieng",
    role: "Teacher",
    location: "Kisumu",
    rating: 5,
    text: "As a teacher, I appreciate the competitive savings rates and the financial literacy programs they offer. Unity SACCO truly cares about their members' financial well-being.",
    avatar: "MO"
  },
  {
    name: "Grace Wanjiku",
    role: "Entrepreneur",
    location: "Mombasa",
    rating: 5,
    text: "The home loan process was seamless, and I got the best rates in the market. The team at Unity SACCO made my dream of homeownership a reality.",
    avatar: "GW"
  },
  {
    name: "David Kimani",
    role: "Engineer",
    location: "Eldoret",
    rating: 5,
    text: "I've been a member for over 10 years, and the consistent growth in dividends and excellent customer service keeps me loyal. Highly recommend Unity SACCO!",
    avatar: "DK"
  },
  {
    name: "Mary Atieno",
    role: "Nurse",
    location: "Nakuru",
    rating: 5,
    text: "The mobile banking app is fantastic, and the emergency loan facility has been a lifesaver during tough times. Unity SACCO understands what members really need.",
    avatar: "MA"
  },
  {
    name: "James Mwangi",
    role: "Farmer",
    location: "Nyeri",
    rating: 5,
    text: "The agricultural loans with flexible repayment terms have helped me modernize my farm. The financial advisors really understand the farming business.",
    avatar: "JM"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Member Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied members have to say 
            about their experience with Unity SACCO.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-bounce border-border hover:border-primary/30 bg-card relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-smooth">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-accent fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Member Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-secondary rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-secondary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <p className="text-secondary-foreground/80">Happy Members</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <p className="text-secondary-foreground/80">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <p className="text-secondary-foreground/80">Years of Service</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <p className="text-secondary-foreground/80">Member Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};