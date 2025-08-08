// Products page specific functionality

class ProductsManager {
  constructor() {
    this.currentCategory = 'savings';
    this.init();
  }

  async init() {
    await this.loadProducts();
    this.initProductTabs();
    this.initLoanCalculator();
  }

  async loadProducts() {
    try {
      const products = await window.unityAPI.getAllProducts();
      this.renderProducts(products);
    } catch (error) {
      console.error('Error loading products:', error);
      this.showError('Failed to load products');
    }
  }

  renderProducts(products) {
    // Render savings products
    this.renderProductCategory('savings', products.savings);
    this.renderProductCategory('loans', products.loans);
    this.renderProductCategory('investments', products.investments);
  }

  renderProductCategory(category, products) {
    const container = document.getElementById(category);
    if (!container) return;

    const grid = container.querySelector('.products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => 
      window.componentRenderer.renderProductCard(product, category)
    ).join('');

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Remove active class from all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        button.classList.add('active');
        document.getElementById(category).classList.add('active');
        
        this.currentCategory = category;
      });
    });
  }

  initLoanCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
      this.calculateLoan();
    });

    // Calculate on input change
    const inputs = ['loanAmount', 'interestRate', 'loanTerm'];
    inputs.forEach(inputId => {
      const input = document.getElementById(inputId);
      if (input) {
        input.addEventListener('input', () => {
          this.calculateLoan();
        });
      }
    });

    // Initial calculation
    this.calculateLoan();
  }

  calculateLoan() {
    const amount = parseFloat(document.getElementById('loanAmount')?.value || 0);
    const rate = parseFloat(document.getElementById('interestRate')?.value || 0);
    const years = parseFloat(document.getElementById('loanTerm')?.value || 0);

    if (amount > 0 && rate > 0 && years > 0) {
      const result = window.unityAPI.calculateLoanPayment(amount, rate, years);
      this.displayLoanResult(result);
    } else {
      this.clearLoanResult();
    }
  }

  displayLoanResult(result) {
    const resultDiv = document.getElementById('calculationResult');
    if (!resultDiv) return;

    resultDiv.style.display = 'block';
    
    document.getElementById('monthlyPayment').textContent = 
      window.componentRenderer.formatCurrency(result.monthlyPayment);
    document.getElementById('totalInterest').textContent = 
      window.componentRenderer.formatCurrency(result.totalInterest);
    document.getElementById('totalAmount').textContent = 
      window.componentRenderer.formatCurrency(result.totalAmount);
  }

  clearLoanResult() {
    const resultDiv = document.getElementById('calculationResult');
    if (resultDiv) {
      resultDiv.style.display = 'none';
    }
  }

  showError(message) {
    window.componentRenderer.createNotification(message, 'error');
  }
}

// Initialize products manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.product-categories')) {
    window.productsManager = new ProductsManager();
  }
});