document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profile-btn');
    const dropdownContent = document.getElementById('dropdown-content');
    const profileName = document.getElementById('profile-name');
    const profileImg = document.getElementById('profile-img');
    const signinOption = document.getElementById('signin-option');
    const signupOption = document.getElementById('signup-option');
    const profileOption = document.getElementById('profile-option');
    const ordersOption = document.getElementById('orders-option');
    const signoutOption = document.getElementById('signout-option');

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Update UI based on login status
    function updateUI() {
        if (isLoggedIn) {
            profileName.textContent = userData.name || 'User';
            profileImg.src = userData.profileImage || 'pic10.jpeg';
            signinOption.style.display = 'none';
            signupOption.style.display = 'none';
            profileOption.style.display = 'block';
            ordersOption.style.display = 'block';
            signoutOption.style.display = 'block';
        } else {
            profileName.textContent = 'Sign In';
            profileImg.src = 'pic10.jpeg';
            signinOption.style.display = 'block';
            signupOption.style.display = 'block';
            profileOption.style.display = 'none';
            ordersOption.style.display = 'none';
            signoutOption.style.display = 'none';
        }
    }

    // Toggle dropdown
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });

    // Handle sign out
    signoutOption.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        window.location.href = 'index.html';
    });

    // Initialize UI
    updateUI();
}); 