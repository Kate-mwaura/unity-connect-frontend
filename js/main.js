// Main JavaScript functionality for Unity SACCO

class UnitySACCO {
  constructor() {
    this.isLoaded = false;
    this.init();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
    } else {
      this.onDOMReady();
    }
  }

  async onDOMReady() {
    try {
      // Initialize Lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Initialize components
      this.initMobileMenu();
      this.initSmoothScrolling();
      this.initAnimations();
      
      // Load dynamic content
      await this.loadDynamicContent();
      
      // Initialize form handlers
      this.initFormHandlers();
      
      this.isLoaded = true;
      console.log('Unity SACCO website initialized successfully');
    } catch (error) {
      console.error('Error initializing website:', error);
    }
  }

  initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('active');
        
        if (isOpen) {
          mobileNav.classList.remove('active');
          mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        } else {
          mobileNav.classList.add('active');
          mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
        }
        
        // Reinitialize icons
        if (window.lucide) {
          window.lucide.createIcons();
        }
      });

      // Close mobile menu when clicking on a link
      const mobileLinks = mobileNav.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
          mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
          if (window.lucide) {
            window.lucide.createIcons();
          }
        });
      });
    }
  }

  initSmoothScrolling() {
    // Handle anchor links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }

  initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
      'section, .card, .service-card, .testimonial-card, .feature-card'
    );
    
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }

  async loadDynamicContent() {
    try {
      // Load services
      await this.loadServices();
      
      // Load testimonials
      await this.loadTestimonials();
      
    } catch (error) {
      console.error('Error loading dynamic content:', error);
    }
  }

  async loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    try {
      // Show loading skeleton
      servicesGrid.innerHTML = window.componentRenderer.renderLoadingSkeleton('service', 6);
      
      // Load services data
      const services = await window.unityAPI.getServices();
      
      // Render services
      servicesGrid.innerHTML = services.map(service => 
        window.componentRenderer.renderServiceCard(service)
      ).join('');
      
      // Initialize Lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }
      
    } catch (error) {
      console.error('Error loading services:', error);
      servicesGrid.innerHTML = '<p class="error-message">Failed to load services. Please try again later.</p>';
    }
  }

  async loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    try {
      // Show loading skeleton
      testimonialsGrid.innerHTML = window.componentRenderer.renderLoadingSkeleton('testimonial', 6);
      
      // Load testimonials data
      const testimonials = await window.unityAPI.getRandomTestimonials(6);
      
      // Render testimonials
      testimonialsGrid.innerHTML = testimonials.map(testimonial => 
        window.componentRenderer.renderTestimonialCard(testimonial)
      ).join('');
      
      // Initialize Lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }
      
    } catch (error) {
      console.error('Error loading testimonials:', error);
      testimonialsGrid.innerHTML = '<p class="error-message">Failed to load testimonials. Please try again later.</p>';
    }
  }

  initFormHandlers() {
    // Contact form handler
    const contactForms = document.querySelectorAll('form[data-type="contact"]');
    contactForms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleContactForm(e));
    });

    // Newsletter subscription
    const newsletterForms = document.querySelectorAll('form[data-type="newsletter"]');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleNewsletterForm(e));
    });

    // Generic form submission
    const genericForms = document.querySelectorAll('form:not([data-type])');
    genericForms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleGenericForm(e));
    });
  }

  async handleContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      // Show loading state
      button.textContent = 'Sending...';
      button.disabled = true;

      const response = await window.unityAPI.submitContactForm(data);
      
      if (response.success) {
        window.componentRenderer.createNotification(response.message, 'success');
        form.reset();
      }
    } catch (error) {
      window.componentRenderer.createNotification(error.message, 'error');
    } finally {
      // Reset button state
      const button = form.querySelector('button[type="submit"]');
      button.textContent = 'Send Message';
      button.disabled = false;
    }
  }

  async handleNewsletterForm(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;

    try {
      const response = await window.unityAPI.submitForm({ email, type: 'newsletter' });
      
      if (response.success) {
        window.componentRenderer.createNotification('Thank you for subscribing to our newsletter!', 'success');
        form.reset();
      }
    } catch (error) {
      window.componentRenderer.createNotification(error.message, 'error');
    }
  }

  async handleGenericForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await window.unityAPI.submitForm(data);
      
      if (response.success) {
        window.componentRenderer.createNotification(response.message, 'success');
        form.reset();
      }
    } catch (error) {
      window.componentRenderer.createNotification(error.message, 'error');
    }
  }

  // Utility methods
  formatCurrency(amount) {
    return window.componentRenderer.formatCurrency(amount);
  }

  showNotification(message, type = 'success') {
    return window.componentRenderer.createNotification(message, type);
  }

  createModal(title, content, actions = []) {
    return window.componentRenderer.createModal(title, content, actions);
  }
}

// Initialize the application
window.unitySACCO = new UnitySACCO();

// Global utility functions
window.showMembershipForm = () => {
  const content = `
    <form id="membershipForm" class="membership-form">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" required>
      </div>
      <div class="form-group">
        <label for="idNumber">ID Number</label>
        <input type="text" id="idNumber" required>
      </div>
      <div class="form-group">
        <label for="occupation">Occupation</label>
        <input type="text" id="occupation" required>
      </div>
      <div class="form-group">
        <label for="monthlyIncome">Monthly Income (KSh)</label>
        <select id="monthlyIncome" required>
          <option value="">Select income range</option>
          <option value="0-30000">KSh 0 - 30,000</option>
          <option value="30000-60000">KSh 30,000 - 60,000</option>
          <option value="60000-100000">KSh 60,000 - 100,000</option>
          <option value="100000+">KSh 100,000+</option>
        </select>
      </div>
    </form>
  `;

  const actions = [
    {
      text: 'Submit Application',
      class: 'btn-primary',
      onclick: 'submitMembershipForm()'
    },
    {
      text: 'Cancel',
      class: 'btn-outline',
      onclick: `this.closest('.modal-overlay').remove()`
    }
  ];

  window.componentRenderer.createModal('Join Unity SACCO', content, actions);
};

window.submitMembershipForm = async () => {
  const form = document.getElementById('membershipForm');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Add form data from inputs
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
      data[input.id] = input.value;
    });

    const response = await window.unityAPI.submitMembershipApplication(data);
    
    if (response.success) {
      document.querySelector('.modal-overlay').remove();
      window.componentRenderer.createNotification(response.message, 'success');
    }
  } catch (error) {
    window.componentRenderer.createNotification(error.message, 'error');
  }
};

// Update button click handlers
document.addEventListener('DOMContentLoaded', () => {
  // Join Us buttons
  const joinButtons = document.querySelectorAll('button:contains("Join Us"), .btn:contains("Join Us")');
  joinButtons.forEach(button => {
    if (button.textContent.includes('Join Us')) {
      button.addEventListener('click', () => {
        window.showMembershipForm();
      });
    }
  });

  // Get Started buttons
  const getStartedButtons = document.querySelectorAll('button:contains("Get Started"), .btn:contains("Get Started")');
  getStartedButtons.forEach(button => {
    if (button.textContent.includes('Get Started')) {
      button.addEventListener('click', () => {
        window.showMembershipForm();
      });
    }
  });
});