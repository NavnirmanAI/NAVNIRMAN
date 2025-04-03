document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const categoriesBtn = document.querySelector('.categories-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const categoryLinks = document.querySelectorAll('.dropdown-content a');
    const productsContainer = document.querySelector('.products-container');

    // Toggle dropdown menu
    categoriesBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.categories-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Handle category selection
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedCategory = this.getAttribute('data-category');
            
            // Update button text
            categoriesBtn.textContent = `Categories: ${this.textContent}`;
            
            // Close dropdown
            dropdownContent.classList.remove('show');
            
            // Filter products
            filterProducts(selectedCategory);
        });
    });

    // Function to filter products
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (category === 'all' || category === productCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Add smooth animation for dropdown
    dropdownContent.style.transition = 'all 0.3s ease';
});

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-container button');
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.querySelector('.products-grid');

    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasVisibleProducts = false;
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();
            
            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
                hasVisibleProducts = true;
            } else {
                card.style.display = 'none';
            }
        });

        showNoResults(!hasVisibleProducts);
    }

    // Function to show/hide no results message
    function showNoResults(show) {
        let noResultsMessage = document.querySelector('.no-results-message');
        
        if (show) {
            if (!noResultsMessage) {
                noResultsMessage = document.createElement('div');
                noResultsMessage.className = 'no-results-message';
                noResultsMessage.innerHTML = `
                    <i class="fas fa-search"></i>
                    <p>No products found matching your search.</p>
                    <p>Try different keywords or browse all categories.</p>
                `;
                productsGrid.appendChild(noResultsMessage);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    // Add event listeners
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
        performSearch();
    });

    searchInput.addEventListener('input', function() {
        if (!this.value.trim()) {
            productCards.forEach(card => {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
            });
            showNoResults(false);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const productDetailsForm = document.getElementById('productDetailsForm');
    let currentProductImage = '';

    // Function to open modal
    function openModal(productName, productImage) {
        modal.style.display = 'block';
        modalProductTitle.textContent = productName;
        currentProductImage = productImage;
        
        // Reset form
        productDetailsForm.reset();
        
        // Add animation
        modal.querySelector('.modal-content').style.animation = 'modalFadeIn 0.3s';
    }

    // Function to close modal
    function closeModalHandler() {
        modal.style.display = 'none';
        productDetailsForm.reset();
    }

    // Add click event listeners to all "ADD TO CART" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productImage = this.getAttribute('data-image');
            openModal(productName, productImage);
        });
    });

    // Close modal when clicking the X button
    closeModal.addEventListener('click', closeModalHandler);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalHandler();
        }
    });

    // Handle form submission
    productDetailsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const productData = {
            name: modalProductTitle.textContent,
            brand: document.getElementById('brand').value,
            modelNo: document.getElementById('modelNo').value,
            yearBought: document.getElementById('yearBought').value,
            condition: document.getElementById('condition').value,
            image: currentProductImage
        };

        // Add to cart using the cart.js function
        addToCart(productData);
        
        // Close modal and reset form
        closeModalHandler();
        
        // Show success message
        showToast('Item added to cart successfully!');
    });

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
});