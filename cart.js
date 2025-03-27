// Cart functionality
let cart = [];

// Function to add item to cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    saveCartToLocalStorage();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCartToLocalStorage();
    displayCartSummary();
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Function to display cart summary
function displayCartSummary() {
    const cartModal = document.getElementById('cartModal');
    const cartContent = document.getElementById('cartContent');
    const pickupFormContainer = document.getElementById('pickupFormContainer');
    
    // Hide pickup form and show cart content
    pickupFormContainer.style.display = 'none';
    cartContent.style.display = 'block';
    
    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Your cart is empty</p>';
        cartModal.style.display = 'block';
        return;
    }

    let cartHTML = '';
    cart.forEach((item, index) => {
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p><strong>Brand:</strong> ${item.brand}</p>
                    <p><strong>Model:</strong> ${item.modelNo}</p>
                    <p><strong>Year Bought:</strong> ${item.yearBought}</p>
                    <p><strong>Condition:</strong> ${item.condition}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    cartHTML += `
        <div class="cart-summary">
            <button class="schedule-pickup-btn" onclick="showPickupForm()">
                Schedule Pickup
            </button>
        </div>
    `;

    cartContent.innerHTML = cartHTML;
    cartModal.style.display = 'block';
}

// Function to show pickup form
function showPickupForm() {
    const cartContent = document.getElementById('cartContent');
    const pickupFormContainer = document.getElementById('pickupFormContainer');
    
    // Hide cart content and show pickup form
    cartContent.style.display = 'none';
    pickupFormContainer.style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickupDate').min = today;
}

// Function to hide pickup form
function hidePickupForm() {
    const cartContent = document.getElementById('cartContent');
    const pickupFormContainer = document.getElementById('pickupFormContainer');
    
    // Show cart content and hide pickup form
    cartContent.style.display = 'block';
    pickupFormContainer.style.display = 'none';
}

// Function to handle pickup form submission
function handlePickupFormSubmit(e) {
    e.preventDefault();
    
    // Validate phone number
    const phoneNumber = document.getElementById('contactNumber').value;
    const phoneError = document.getElementById('phoneError');
    
    if (phoneNumber.length !== 10) {
        phoneError.textContent = 'Please enter a valid 10-digit mobile number';
        return;
    } else {
        phoneError.textContent = '';
    }
    
    // Get form data
    const formData = {
        date: document.getElementById('pickupDate').value,
        timeSlot: document.getElementById('timeSlot').value,
        address: document.getElementById('address').value,
        landmark: document.getElementById('landmark').value,
        contactNumber: phoneNumber,
        items: cart
    };
    
    // Here you would typically send this data to your backend
    console.log('Pickup scheduled:', formData);
    
    // Close the cart modal
    closeCartModal();
    
    // Show confirmation animation
    const confirmation = document.getElementById('pickupConfirmation');
    confirmation.classList.add('show');
    
    // Hide confirmation after 3 seconds and reset everything
    setTimeout(() => {
        confirmation.classList.remove('show');
        // Clear cart
        cart = [];
        updateCartCount();
        saveCartToLocalStorage();
    }, 3000);
}

// Function to close cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
    
    // Reset form and views
    const pickupFormContainer = document.getElementById('pickupFormContainer');
    const cartContent = document.getElementById('cartContent');
    pickupFormContainer.style.display = 'none';
    cartContent.style.display = 'block';
    document.getElementById('pickupForm').reset();
}

// Function to show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    
    // Add show class for animation
    toast.classList.add('show');
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add event listener for phone number input
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('contactNumber');
    const phoneError = document.getElementById('phoneError');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Remove any non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            // Show error if length is not 10
            if (this.value.length > 0 && this.value.length !== 10) {
                phoneError.textContent = 'Phone number must be 10 digits';
            } else {
                phoneError.textContent = '';
            }
        });
    }
    
    // Rest of the initialization code...
    loadCartFromLocalStorage();
    
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', displayCartSummary);
    }
    
    const pickupForm = document.getElementById('pickupForm');
    if (pickupForm) {
        pickupForm.addEventListener('submit', handlePickupFormSubmit);
    }
}); 