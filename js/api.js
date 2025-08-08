// Mock API for Unity SACCO
// Simulates backend API calls using a static db.json structure

class UnityAPI {
  constructor() {
    this.baseURL = '/api';
    this.cache = new Map();
    this.initializeData();
  }

  // Initialize mock data
  initializeData() {
    this.mockData = {
      services: [
        {
          id: 1,
          name: "Savings Accounts",
          description: "Secure your future with our high-yield savings accounts offering competitive interest rates and flexible terms.",
          icon: "piggy-bank",
          category: "savings",
          features: [
            "4.5% annual interest rate",
            "No minimum balance",
            "Mobile banking access",
            "Free ATM withdrawals"
          ],
          color: "primary"
        },
        {
          id: 2,
          name: "Home Loans",
          description: "Make your dream home a reality with our affordable home loan solutions and flexible repayment options.",
          icon: "home",
          category: "loans",
          features: [
            "Interest rates from 10% p.a.",
            "Up to 25 years repayment",
            "Quick approval process",
            "Flexible down payment"
          ],
          color: "secondary"
        },
        {
          id: 3,
          name: "Auto Loans",
          description: "Drive your dream car today with our competitive auto loan rates for both new and used vehicles.",
          icon: "car",
          category: "loans",
          features: [
            "Interest rates from 13% p.a.",
            "Up to 7 years repayment",
            "New & used vehicles",
            "Quick processing"
          ],
          color: "accent"
        },
        {
          id: 4,
          name: "Personal Loans",
          description: "Get instant access to funds for your personal needs with our quick and easy personal loan process.",
          icon: "banknote",
          category: "loans",
          features: [
            "Interest rates from 12% p.a.",
            "Up to KSh 5 million",
            "Same-day approval",
            "Flexible terms"
          ],
          color: "primary"
        },
        {
          id: 5,
          name: "Education Loans",
          description: "Invest in your future with our education loans designed to support your academic aspirations.",
          icon: "graduation-cap",
          category: "loans",
          features: [
            "Competitive interest rates",
            "Grace period available",
            "Covers tuition & expenses",
            "Flexible repayment"
          ],
          color: "secondary"
        },
        {
          id: 6,
          name: "Investment Services",
          description: "Grow your wealth with our professional investment management services and diversified portfolios.",
          icon: "trending-up",
          category: "investments",
          features: [
            "Professional management",
            "Diversified portfolios",
            "Regular reporting",
            "Risk assessment"
          ],
          color: "accent"
        }
      ],
      testimonials: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Small Business Owner",
          location: "Nairobi",
          rating: 5,
          text: "Unity SACCO helped me expand my business with their excellent loan terms. The staff was supportive throughout the entire process, and I couldn't be happier with the service.",
          avatar: "SJ"
        },
        {
          id: 2,
          name: "Michael Ochieng",
          role: "Teacher",
          location: "Kisumu",
          rating: 5,
          text: "As a teacher, I appreciate the competitive savings rates and the financial literacy programs they offer. Unity SACCO truly cares about their members' financial well-being.",
          avatar: "MO"
        },
        {
          id: 3,
          name: "Grace Wanjiku",
          role: "Entrepreneur",
          location: "Mombasa",
          rating: 5,
          text: "The home loan process was seamless, and I got the best rates in the market. The team at Unity SACCO made my dream of homeownership a reality.",
          avatar: "GW"
        },
        {
          id: 4,
          name: "David Kimani",
          role: "Engineer",
          location: "Eldoret",
          rating: 5,
          text: "I've been a member for over 10 years, and the consistent growth in dividends and excellent customer service keeps me loyal. Highly recommend Unity SACCO!",
          avatar: "DK"
        },
        {
          id: 5,
          name: "Mary Atieno",
          role: "Nurse",
          location: "Nakuru",
          rating: 5,
          text: "The mobile banking app is fantastic, and the emergency loan facility has been a lifesaver during tough times. Unity SACCO understands what members really need.",
          avatar: "MA"
        },
        {
          id: 6,
          name: "James Mwangi",
          role: "Farmer",
          location: "Nyeri",
          rating: 5,
          text: "The agricultural loans with flexible repayment terms have helped me modernize my farm. The financial advisors really understand the farming business.",
          avatar: "JM"
        }
      ],
      products: {
        savings: [
          {
            id: 1,
            name: "Regular Savings Account",
            description: "Start your savings journey with our flexible regular savings account offering competitive interest rates.",
            interestRate: "4.5%",
            minBalance: "KSh 1,000",
            features: [
              "4.5% annual interest rate",
              "Minimum balance: KSh 1,000",
              "Unlimited deposits",
              "Mobile banking access"
            ],
            popular: true
          },
          {
            id: 2,
            name: "Goal Savings Account",
            description: "Save for specific goals with our targeted savings account designed to help you reach your dreams.",
            interestRate: "5.0%",
            minBalance: "KSh 500",
            features: [
              "5.0% annual interest rate",
              "Automated deposits",
              "Goal tracking tools"
            ]
          },
          {
            id: 3,
            name: "Fixed Deposit Account",
            description: "Earn higher returns with our fixed deposit accounts offering guaranteed interest rates.",
            interestRate: "Up to 7.5%",
            minBalance: "KSh 10,000",
            features: [
              "Up to 7.5% annual interest",
              "Terms: 3-60 months",
              "Guaranteed returns"
            ]
          }
        ],
        loans: [
          {
            id: 1,
            name: "Personal Loan",
            description: "Quick and flexible personal loans for your immediate financial needs with competitive rates.",
            interestRate: "From 12% p.a.",
            maxAmount: "Up to KSh 5 million",
            features: [
              "Interest rate from 12% p.a.",
              "Up to KSh 5 million",
              "Repayment: Up to 5 years",
              "Quick approval"
            ],
            popular: true
          },
          {
            id: 2,
            name: "Home Loan",
            description: "Make your dream of homeownership a reality with our affordable home loan solutions.",
            interestRate: "From 10% p.a.",
            maxAmount: "Up to KSh 20 million",
            features: [
              "Interest rate from 10% p.a.",
              "Up to KSh 20 million",
              "Repayment: Up to 25 years"
            ]
          },
          {
            id: 3,
            name: "Business Loan",
            description: "Grow your business with our flexible business loans designed for entrepreneurs and SMEs.",
            interestRate: "From 14% p.a.",
            maxAmount: "Up to KSh 10 million",
            features: [
              "Interest rate from 14% p.a.",
              "Up to KSh 10 million",
              "Flexible repayment terms"
            ]
          },
          {
            id: 4,
            name: "Auto Loan",
            description: "Drive your dream car today with our competitive auto loan rates and flexible terms.",
            interestRate: "From 13% p.a.",
            maxAmount: "Up to KSh 8 million",
            features: [
              "Interest rate from 13% p.a.",
              "Up to KSh 8 million",
              "New & used vehicles"
            ]
          }
        ],
        investments: [
          {
            id: 1,
            name: "Investment Portfolio",
            description: "Diversified investment portfolios managed by our expert team to maximize your returns.",
            expectedReturn: "8-15% p.a.",
            minInvestment: "KSh 50,000",
            features: [
              "Expected returns: 8-15% p.a.",
              "Professional management",
              "Regular reporting",
              "Risk assessment"
            ],
            popular: true
          },
          {
            id: 2,
            name: "Retirement Planning",
            description: "Secure your future with our comprehensive retirement planning and pension services.",
            expectedReturn: "Variable",
            minInvestment: "KSh 5,000",
            features: [
              "Tax-efficient savings",
              "Flexible contributions",
              "Expert guidance"
            ]
          },
          {
            id: 3,
            name: "Education Fund",
            description: "Invest in your children's education with our dedicated education savings and investment plans.",
            expectedReturn: "6-12% p.a.",
            minInvestment: "KSh 10,000",
            features: [
              "Goal-based savings",
              "Flexible withdrawals",
              "Growth-focused strategy"
            ]
          }
        ]
      },
      stats: {
        members: "50,000+",
        assets: "KSh 15B+",
        satisfaction: "98%",
        experience: "25+",
        rating: "4.9/5",
        retention: "98%"
      }
    };
  }

  // Simulate API delay
  async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Generic GET request simulation
  async get(endpoint) {
    await this.delay();
    
    // Check cache first
    if (this.cache.has(endpoint)) {
      return this.cache.get(endpoint);
    }

    let data;
    switch (endpoint) {
      case '/services':
        data = this.mockData.services;
        break;
      case '/testimonials':
        data = this.mockData.testimonials;
        break;
      case '/products/savings':
        data = this.mockData.products.savings;
        break;
      case '/products/loans':
        data = this.mockData.products.loans;
        break;
      case '/products/investments':
        data = this.mockData.products.investments;
        break;
      case '/stats':
        data = this.mockData.stats;
        break;
      default:
        throw new Error(`Endpoint ${endpoint} not found`);
    }

    // Cache the result
    this.cache.set(endpoint, data);
    return data;
  }

  // Get all services
  async getServices() {
    return this.get('/services');
  }

  // Get services by category
  async getServicesByCategory(category) {
    const services = await this.get('/services');
    return services.filter(service => service.category === category);
  }

  // Get all testimonials
  async getTestimonials() {
    return this.get('/testimonials');
  }

  // Get random testimonials
  async getRandomTestimonials(count = 6) {
    const testimonials = await this.get('/testimonials');
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Get products by category
  async getProducts(category) {
    return this.get(`/products/${category}`);
  }

  // Get all products
  async getAllProducts() {
    const [savings, loans, investments] = await Promise.all([
      this.get('/products/savings'),
      this.get('/products/loans'),
      this.get('/products/investments')
    ]);
    
    return {
      savings,
      loans,
      investments
    };
  }

  // Get statistics
  async getStats() {
    return this.get('/stats');
  }

  // Calculate loan payment
  calculateLoanPayment(principal, rate, years) {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    
    if (monthlyRate === 0) {
      return {
        monthlyPayment: principal / numPayments,
        totalInterest: 0,
        totalAmount: principal
      };
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalAmount = monthlyPayment * numPayments;
    const totalInterest = totalAmount - principal;
    
    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  }

  // Search functionality
  async search(query) {
    await this.delay(300);
    
    const services = await this.get('/services');
    const testimonials = await this.get('/testimonials');
    
    const searchTerm = query.toLowerCase();
    
    const matchedServices = services.filter(service => 
      service.name.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm) ||
      service.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
    
    const matchedTestimonials = testimonials.filter(testimonial =>
      testimonial.name.toLowerCase().includes(searchTerm) ||
      testimonial.text.toLowerCase().includes(searchTerm) ||
      testimonial.role.toLowerCase().includes(searchTerm)
    );
    
    return {
      services: matchedServices,
      testimonials: matchedTestimonials
    };
  }

  // Simulate form submission
  async submitForm(formData) {
    await this.delay(1000);
    
    // Simulate form validation
    if (!formData.name || !formData.email) {
      throw new Error('Name and email are required');
    }
    
    // Simulate successful submission
    return {
      success: true,
      message: 'Thank you for your submission. We will contact you soon.',
      reference: `REF-${Date.now()}`
    };
  }

  // Contact form submission
  async submitContactForm(formData) {
    return this.submitForm(formData);
  }

  // Loan application submission
  async submitLoanApplication(formData) {
    await this.delay(1500);
    
    if (!formData.amount || !formData.purpose) {
      throw new Error('Loan amount and purpose are required');
    }
    
    return {
      success: true,
      message: 'Your loan application has been submitted successfully. Our team will review it and contact you within 2 business days.',
      applicationId: `LOAN-${Date.now()}`,
      status: 'Under Review'
    };
  }

  // Membership application
  async submitMembershipApplication(formData) {
    await this.delay(1200);
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      throw new Error('All required fields must be filled');
    }
    
    return {
      success: true,
      message: 'Welcome to Unity SACCO! Your membership application has been received. You will receive your member ID within 24 hours.',
      memberId: `MEM-${Date.now()}`,
      status: 'Approved'
    };
  }
}

// Create global API instance
window.unityAPI = new UnityAPI();