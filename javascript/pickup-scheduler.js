// Function to show pickup scheduling modal
function showPickupScheduler() {
    const cartModal = document.getElementById('cartModal');
    const pickupFormContainer = document.getElementById('pickupFormContainer');
    const cartContent = document.getElementById('cartContent');
    
    // Show cart modal and pickup form
    cartModal.style.display = 'block';
    pickupFormContainer.style.display = 'block';
    cartContent.style.display = 'none';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickupDate').min = today;
}

// Add event listener to the schedule pickup button
document.addEventListener('DOMContentLoaded', () => {
    const scheduleButtons = document.querySelectorAll('.schedule-pickup-btn');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', showPickupScheduler);
    });
});

document.getElementById('pickupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const pickupDate = document.getElementById('pickupDate').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const address = document.getElementById('address').value;
    const landmark = document.getElementById('landmark').value;
    const contactNumber = document.getElementById('contactNumber').value;
    
    // Get cart items
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Clear the cart
    localStorage.removeItem('cart');
    updateCartCount();
    
    // Show confirmation message
    document.getElementById('pickupConfirmation').classList.add('show');
}); 