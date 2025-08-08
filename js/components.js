// Component rendering utilities for Unity SACCO

class ComponentRenderer {
  constructor() {
    this.lucideIcons = window.lucide;
  }

  // Render service card
  renderServiceCard(service) {
    return `
      <div class="service-card" data-service-id="${service.id}">
        <div class="service-icon ${service.color}">
          <i data-lucide="${service.icon}"></i>
        </div>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <ul class="service-features">
          ${service.features.map(feature => `
            <li>
              <i data-lucide="check"></i>
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
        <button class="btn btn-primary" onclick="handleServiceClick('${service.id}')">
          Learn More
          <i data-lucide="arrow-right"></i>
        </button>
      </div>
    `;
  }

  // Render testimonial card
  renderTestimonialCard(testimonial) {
    const stars = Array(testimonial.rating).fill('').map(() => 
      '<i data-lucide="star"></i>'
    ).join('');

    return `
      <div class="testimonial-card">
        <div class="testimonial-rating">
          ${stars}
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            ${testimonial.avatar}
          </div>
          <div class="testimonial-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role} • ${testimonial.location}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Render product card
  renderProductCard(product, category) {
    const badgeHtml = product.popular ? '<div class="product-badge">Most Popular</div>' : '';
    const iconMap = {
      savings: 'piggy-bank',
      loans: 'banknote',
      investments: 'trending-up'
    };

    return `
      <div class="product-card ${product.popular ? 'featured' : ''}">
        ${badgeHtml}
        <div class="product-icon">
          <i data-lucide="${iconMap[category] || 'credit-card'}"></i>
        </div>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-features">
          ${product.features.map(feature => `
            <div class="feature">
              <i data-lucide="check"></i>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>
        <button class="btn ${product.popular ? 'btn-primary' : 'btn-outline'}" 
                onclick="handleProductClick('${product.id}', '${category}')">
          ${product.popular ? 'Apply Now' : 'Learn More'}
        </button>
      </div>
    `;
  }

  // Render loading skeleton
  renderLoadingSkeleton(type = 'card', count = 3) {
    const skeletonCard = `
      <div class="skeleton-card">
        <div class="skeleton-icon"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text short"></div>
        <div class="skeleton-button"></div>
      </div>
    `;

    return Array(count).fill(skeletonCard).join('');
  }

  // Format currency
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  // Create notification
  createNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i data-lucide="x"></i>
        </button>
      </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Initialize Lucide icons
    if (this.lucideIcons) {
      this.lucideIcons.createIcons();
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);

    return notification;
  }

  // Create modal
  createModal(title, content, actions = []) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="modal-content">
          ${content}
        </div>
        <div class="modal-actions">
          ${actions.map(action => `
            <button class="btn ${action.class || 'btn-primary'}" 
                    onclick="${action.onclick || ''}">
              ${action.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Initialize Lucide icons
    if (this.lucideIcons) {
      this.lucideIcons.createIcons();
    }

    // Close on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    return modal;
  }
}

// Initialize component renderer
window.componentRenderer = new ComponentRenderer();

// Global handler functions
window.handleServiceClick = async (serviceId) => {
  try {
    const services = await window.unityAPI.getServices();
    const service = services.find(s => s.id == serviceId);
    
    if (service) {
      const content = `
        <div class="service-details">
          <div class="service-icon ${service.color} large">
            <i data-lucide="${service.icon}"></i>
          </div>
          <h4>${service.name}</h4>
          <p>${service.description}</p>
          <ul class="service-features">
            ${service.features.map(feature => `
              <li>
                <i data-lucide="check"></i>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;

      const actions = [
        {
          text: 'Apply Now',
          class: 'btn-primary',
          onclick: `this.closest('.modal-overlay').remove(); showApplicationForm('${service.category}')`
        },
        {
          text: 'Close',
          class: 'btn-outline',
          onclick: `this.closest('.modal-overlay').remove()`
        }
      ];

      window.componentRenderer.createModal(service.name, content, actions);
    }
  } catch (error) {
    console.error('Error loading service details:', error);
    window.componentRenderer.createNotification('Error loading service details', 'error');
  }
};

window.handleProductClick = async (productId, category) => {
  try {
    const products = await window.unityAPI.getProducts(category);
    const product = products.find(p => p.id == productId);
    
    if (product) {
      const content = `
        <div class="product-details">
          <h4>${product.name}</h4>
          <p>${product.description}</p>
          <div class="product-highlights">
            ${product.interestRate ? `<div class="highlight">
              <strong>Interest Rate:</strong> ${product.interestRate}
            </div>` : ''}
            ${product.maxAmount ? `<div class="highlight">
              <strong>Maximum Amount:</strong> ${product.maxAmount}
            </div>` : ''}
            ${product.minBalance ? `<div class="highlight">
              <strong>Minimum Balance:</strong> ${product.minBalance}
            </div>` : ''}
          </div>
          <ul class="product-features">
            ${product.features.map(feature => `
              <li>
                <i data-lucide="check"></i>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;

      const actions = [
        {
          text: 'Apply Now',
          class: 'btn-primary',
          onclick: `this.closest('.modal-overlay').remove(); showApplicationForm('${category}')`
        },
        {
          text: 'Close',
          class: 'btn-outline',
          onclick: `this.closest('.modal-overlay').remove()`
        }
      ];

      window.componentRenderer.createModal(product.name, content, actions);
    }
  } catch (error) {
    console.error('Error loading product details:', error);
    window.componentRenderer.createNotification('Error loading product details', 'error');
  }
};

window.showApplicationForm = (type) => {
  const formFields = {
    savings: `
      <div class="form-group">
        <label for="savingsType">Account Type</label>
        <select id="savingsType" required>
          <option value="">Select account type</option>
          <option value="regular">Regular Savings</option>
          <option value="goal">Goal Savings</option>
          <option value="fixed">Fixed Deposit</option>
        </select>
      </div>
      <div class="form-group">
        <label for="initialDeposit">Initial Deposit (KSh)</label>
        <input type="number" id="initialDeposit" min="1000" required>
      </div>
    `,
    loans: `
      <div class="form-group">
        <label for="loanType">Loan Type</label>
        <select id="loanType" required>
          <option value="">Select loan type</option>
          <option value="personal">Personal Loan</option>
          <option value="home">Home Loan</option>
          <option value="auto">Auto Loan</option>
          <option value="business">Business Loan</option>
        </select>
      </div>
      <div class="form-group">
        <label for="loanAmount">Loan Amount (KSh)</label>
        <input type="number" id="loanAmount" min="10000" required>
      </div>
      <div class="form-group">
        <label for="loanPurpose">Purpose</label>
        <textarea id="loanPurpose" rows="3" required></textarea>
      </div>
    `,
    investments: `
      <div class="form-group">
        <label for="investmentType">Investment Type</label>
        <select id="investmentType" required>
          <option value="">Select investment type</option>
          <option value="portfolio">Investment Portfolio</option>
          <option value="retirement">Retirement Planning</option>
          <option value="education">Education Fund</option>
        </select>
      </div>
      <div class="form-group">
        <label for="investmentAmount">Investment Amount (KSh)</label>
        <input type="number" id="investmentAmount" min="5000" required>
      </div>
    `
  };

  const content = `
    <form id="applicationForm" class="application-form">
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" required>
      </div>
      ${formFields[type] || ''}
    </form>
  `;

  const actions = [
    {
      text: 'Submit Application',
      class: 'btn-primary',
      onclick: 'submitApplication()'
    },
    {
      text: 'Cancel',
      class: 'btn-outline',
      onclick: `this.closest('.modal-overlay').remove()`
    }
  ];

  window.componentRenderer.createModal(`${type.charAt(0).toUpperCase() + type.slice(1)} Application`, content, actions);
};

window.submitApplication = async () => {
  const form = document.getElementById('applicationForm');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // Add form data from inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      data[input.id] = input.value;
    });

    const response = await window.unityAPI.submitForm(data);
    
    if (response.success) {
      document.querySelector('.modal-overlay').remove();
      window.componentRenderer.createNotification(response.message, 'success');
    }
  } catch (error) {
    window.componentRenderer.createNotification(error.message, 'error');
  }
};