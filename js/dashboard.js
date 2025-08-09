// Dashboard JavaScript functionality
class DashboardManager {
    constructor() {
        this.currentPage = 'dashboard';
        this.user = {
            name: 'Andrew Osindo',
            balance: 150000,
            totalSavings: 45500,
            totalGroups: 1
        };
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadDashboardData();
        this.setupEventListeners();
        
        // Initialize icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.getAttribute('data-page');
                this.showPage(page);
            });
        });
    }

    showPage(pageName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-page="${pageName}"]`).classList.add('active');

        // Update content
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`${pageName}-page`).classList.add('active');

        this.currentPage = pageName;
        this.loadPageData(pageName);
    }

    async loadPageData(pageName) {
        switch (pageName) {
            case 'groups':
                await this.loadGroupsData();
                break;
            case 'wallet':
                await this.loadWalletData();
                break;
            case 'activity':
                await this.loadActivityData();
                break;
            case 'settings':
                this.loadSettingsData();
                break;
        }
    }

    async loadDashboardData() {
        try {
            // Update stats
            document.getElementById('totalGroups').textContent = this.user.totalGroups;
            document.getElementById('walletBalance').textContent = this.formatCurrency(this.user.balance);
            document.getElementById('totalSavings').textContent = this.formatCurrency(this.user.totalSavings);

            // Load recent activity
            await this.loadRecentActivity();
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }

    async loadRecentActivity() {
        const activities = [
            {
                id: 1,
                type: 'contribution',
                title: 'Contributed to Alpha Chama',
                description: '2 hours ago • Alpha Chama',
                amount: 5000,
                icon: 'arrow-up-right',
                positive: true
            },
            {
                id: 2,
                type: 'withdrawal',
                title: 'Withdrew from Beta Group',
                description: '1 day ago • Beta Group',
                amount: -2500,
                icon: 'arrow-down-left',
                positive: false
            }
        ];

        const activityList = document.getElementById('activityList');
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon ${activity.positive ? 'green' : 'red'}">
                    <i data-lucide="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
                <div class="activity-amount ${activity.positive ? 'positive' : 'negative'}">
                    ${activity.positive ? '+' : ''}${this.formatCurrency(Math.abs(activity.amount))}
                </div>
            </div>
        `).join('');

        // Reinitialize icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    async loadGroupsData() {
        const groups = [
            {
                id: 1,
                name: 'Alpha Investment Group',
                description: 'Monthly savings for investment opportunities',
                members: 12,
                maxMembers: 20,
                monthlyContribution: 5000,
                totalSaved: 240000
            },
            {
                id: 2,
                name: 'Beta Savings Circle',
                description: 'Emergency fund and financial security',
                members: 8,
                maxMembers: 15,
                monthlyContribution: 3000,
                totalSaved: 96000
            },
            {
                id: 3,
                name: 'Gamma Business Fund',
                description: 'Support for small business ventures',
                members: 15,
                maxMembers: 25,
                monthlyContribution: 7500,
                totalSaved: 450000
            }
        ];

        const groupsGrid = document.getElementById('allGroupsGrid');
        if (groupsGrid) {
            groupsGrid.innerHTML = groups.map(group => `
                <div class="group-card">
                    <div class="group-info">
                        <h4>${group.name}</h4>
                        <p>${group.description}</p>
                        <div class="group-stats">
                            <span>${group.members}/${group.maxMembers} members</span>
                            <span>Monthly: ${this.formatCurrency(group.monthlyContribution)}</span>
                            <span>Total: ${this.formatCurrency(group.totalSaved)}</span>
                        </div>
                    </div>
                    <div class="group-actions">
                        <button class="btn btn-primary btn-sm" onclick="joinGroup(${group.id})">
                            ${group.members < group.maxMembers ? 'Join' : 'Full'}
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    async loadWalletData() {
        const transactions = [
            {
                id: 1,
                type: 'deposit',
                description: 'Bank Transfer',
                amount: 50000,
                date: '2024-01-15',
                status: 'completed'
            },
            {
                id: 2,
                type: 'contribution',
                description: 'Alpha Chama Contribution',
                amount: -5000,
                date: '2024-01-14',
                status: 'completed'
            },
            {
                id: 3,
                type: 'withdrawal',
                description: 'Emergency Fund Access',
                amount: -15000,
                date: '2024-01-12',
                status: 'completed'
            }
        ];

        const transactionList = document.getElementById('transactionList');
        const currentBalance = document.getElementById('currentBalance');
        
        if (currentBalance) {
            currentBalance.textContent = this.formatCurrency(this.user.balance);
        }

        if (transactionList) {
            transactionList.innerHTML = transactions.map(tx => `
                <div class="activity-item">
                    <div class="activity-icon ${tx.amount > 0 ? 'green' : 'red'}">
                        <i data-lucide="${tx.amount > 0 ? 'arrow-down-left' : 'arrow-up-right'}"></i>
                    </div>
                    <div class="activity-content">
                        <h4>${tx.description}</h4>
                        <p>${new Date(tx.date).toLocaleDateString()} • ${tx.status}</p>
                    </div>
                    <div class="activity-amount ${tx.amount > 0 ? 'positive' : 'negative'}">
                        ${tx.amount > 0 ? '+' : ''}${this.formatCurrency(Math.abs(tx.amount))}
                    </div>
                </div>
            `).join('');

            // Reinitialize icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    async loadActivityData() {
        const detailedActivities = [
            {
                date: '2024-01-15',
                activities: [
                    { time: '14:30', description: 'Contributed to Alpha Chama', amount: -5000 },
                    { time: '10:15', description: 'Received interest payment', amount: 750 }
                ]
            },
            {
                date: '2024-01-14',
                activities: [
                    { time: '16:45', description: 'Joined Beta Savings Circle', amount: -3000 },
                    { time: '12:20', description: 'Wallet top-up via M-Pesa', amount: 25000 }
                ]
            }
        ];

        const detailedActivity = document.getElementById('detailedActivity');
        if (detailedActivity) {
            detailedActivity.innerHTML = detailedActivities.map(day => `
                <div class="activity-day">
                    <h4>${new Date(day.date).toLocaleDateString()}</h4>
                    <div class="day-activities">
                        ${day.activities.map(activity => `
                            <div class="activity-item">
                                <div class="activity-time">${activity.time}</div>
                                <div class="activity-content">
                                    <p>${activity.description}</p>
                                </div>
                                <div class="activity-amount ${activity.amount > 0 ? 'positive' : 'negative'}">
                                    ${activity.amount > 0 ? '+' : ''}${this.formatCurrency(Math.abs(activity.amount))}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    loadSettingsData() {
        // Settings data is already in the HTML
        // Add form submission handlers
        const settingsForm = document.querySelector('.settings-form');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.updateProfile();
            });
        }
    }

    setupEventListeners() {
        // Create group form handler
        const createGroupForm = document.getElementById('createGroupForm');
        if (createGroupForm) {
            createGroupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.createGroup();
            });
        }
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-KE', {
            style: 'currency',
            currency: 'KES',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('KES', 'KSh');
    }

    // Modal functions
    showCreateGroupModal() {
        const modal = document.getElementById('createGroupModal');
        modal.classList.add('active');
    }

    hideCreateGroupModal() {
        const modal = document.getElementById('createGroupModal');
        modal.classList.remove('active');
        document.getElementById('createGroupForm').reset();
    }

    async createGroup() {
        const formData = new FormData(document.getElementById('createGroupForm'));
        const groupData = Object.fromEntries(formData.entries());

        try {
            // Simulate API call
            console.log('Creating group:', groupData);
            
            // Show success notification
            if (window.componentRenderer) {
                window.componentRenderer.createNotification('Group created successfully!', 'success');
            }
            
            this.hideCreateGroupModal();
            
            // Refresh groups if on groups page
            if (this.currentPage === 'groups') {
                await this.loadGroupsData();
            }
        } catch (error) {
            console.error('Error creating group:', error);
            if (window.componentRenderer) {
                window.componentRenderer.createNotification('Failed to create group. Please try again.', 'error');
            }
        }
    }

    async updateProfile() {
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        try {
            // Simulate API call
            console.log('Updating profile:', formData);
            
            if (window.componentRenderer) {
                window.componentRenderer.createNotification('Profile updated successfully!', 'success');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            if (window.componentRenderer) {
                window.componentRenderer.createNotification('Failed to update profile. Please try again.', 'error');
            }
        }
    }
}

// Global functions
window.showPage = (pageName) => {
    if (window.dashboardManager) {
        window.dashboardManager.showPage(pageName);
    }
};

window.showCreateGroupModal = () => {
    if (window.dashboardManager) {
        window.dashboardManager.showCreateGroupModal();
    }
};

window.hideCreateGroupModal = () => {
    if (window.dashboardManager) {
        window.dashboardManager.hideCreateGroupModal();
    }
};

window.joinGroup = (groupId) => {
    console.log('Joining group:', groupId);
    if (window.componentRenderer) {
        window.componentRenderer.createNotification('Successfully joined the group!', 'success');
    }
};

window.handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
};

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardManager = new DashboardManager();
});

// Mobile menu toggle
window.toggleMobileMenu = () => {
    const sidebar = document.querySelector('.dashboard-sidebar');
    sidebar.classList.toggle('mobile-open');
};