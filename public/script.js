/**
 * ===========================================
 * EXCLUSIVE WEARS - JAVASCRIPT LOGIC
 * ===========================================
 * Handles product data, cart manipulation, modal interactions,
 * search functionality, and simulated login.
 */

// --- 1. Product Data (Simulated Database) ---
const products = [
    // Promo Items (Total 5)
    { id: 101, name: 'Sapphire Silk Tie', category: 'promo', price: 99.99, oldPrice: 120.00, desc: 'A hand-stitched silk tie in a deep sapphire hue. The epitome of classic elegance.', image: 'saphire1.jpg', images: ['saphire2.jpg', 'saphire3.jpg','saphire4.jpg'] },
    { id: 102, name: 'The Sovereign Watch', category: 'promo', price: 499.50, oldPrice: 650.00, desc: 'Swiss-made timepiece with a minimalist gold face and genuine leather strap.', image: 'watch1.jpg', images: ['watch2.jpg', 'watch3.jpg', 'watch4.jpg'] },
    { id: 103, name: 'Cashmere Wool Scarf', category: 'promo', price: 149.99, oldPrice: 180.00, desc: 'Incredibly soft and warm cashmere scarf, perfect for adding a touch of class.', image: 'scarf1.jpg', images: ['scarf2.jpg', 'scarf3.jpg', 'scarf4.jpg'] },
    { id: 104, name: 'Classic Leather Gloves', category: 'promo', price: 79.99, oldPrice: 100.00, desc: 'Italian Nappa leather gloves, lined with silk for supreme comfort.', image: 'gloves1.jpg', images: ['gloves2.jpg', 'gloves3.jpg', 'gloves4.jpg'] },
    { id: 105, name: 'The Diplomat Suit', category: 'promo', price: 899.00, oldPrice: 1200.00, desc: 'A meticulously tailored two-piece suit in charcoal grey, ideal for the boardroom.', image: 'suit1.jpg', images: ['suit2.jpg', 'suit3.jpg', 'suit4.jpg'] },

    // Apparel Items (Total 8)
    { id: 201, name: 'The Grand White Shirt', category: 'apparel', price: 150.00, desc: 'Crisp white oxford shirt, essential for a sophisticated look.', image: 'shirt1.jpg', images: ['shirt2.jpg', 'shirt3.jpg', 'shirt4.jpg'] },
    { id: 202, name: 'Regal Blazer', category: 'apparel', price: 350.00, desc: 'Navy wool blazer with gold-tone buttons and a slim fit.', image: 'blazer1.jpg', images: ['blazer2.jpg', 'blazer3.jpg', 'blazer4.jpg'] },
    { id: 203, name: 'Slim-Fit Trousers', category: 'apparel', price: 180.00, desc: 'Lightweight Italian wool trousers, tailored for a modern silhouette.', image: 'trousers1.jpg', images: ['trousers2.jpg', 'trousers3.jpg', 'trousers4.jpg'] },
    { id: 204, name: 'Signature Trench Coat', category: 'apparel', price: 550.00, desc: 'Classic double-breasted trench coat in beige with premium lining.', image: 'trench1.jpg', images: ['trench2.jpg', 'trench3.jpg', 'trench4.jpg'] },
    { id: 205, name: 'Merino V-Neck Sweaters', category: 'apparel', price: 120.00, desc: 'Super-fine merino wool sweater, perfect for layering.', image: 'sweater1.jpg', images: ['sweater2.jpg', 'sweater3.jpg', 'sweater4.jpg'] },
    { id: 206, name: 'The Chelsea Boot', category: 'apparel', price: 290.00, desc: 'Handcrafted leather Chelsea boots for everyday elegance.', image: 'boot1.jpg', images: ['boot2.jpg', 'boot3.jpg', 'boot4.jpg'] },
    { id: 207, name: 'Linen Summer Shirt', category: 'apparel', price: 130.00, desc: 'Breathable linen shirt for sophisticated summer comfort.', image: 'linen1.jpg', images: ['linen2.jpg', 'linen3.jpg', 'linen4.jpg'] },
    { id: 208, name: 'Polo Shirt', category: 'apparel', price: 90.00, desc: 'High-quality cotton polo, a classic redefined.', image: 'polo1.jpg', images: ['polo2.jpg', 'polo3.jpg', 'polo4.jpg'] },
    { id: 209, name: 'Levis FSE Jeans', category: 'apparel', price: 90.00, desc: 'High-quality  jeans, female special edition .', image: 'jeans1.jpg', images: ['jeans2.jpg', 'jeans3.jpg', 'jeans4.jpg'] },
    { id: 210, name: 'Fine Knit Cardigan', category: 'apparel', price: 90.00, desc: 'Soft fine-knit cotton cardigan for a casual, refined look', image: 'cardigan1.jpg', images: ['cardigan2.jpg', 'cardigan3.jpg', 'cardigan4.jpg'] },


    // Accessories Items (Total 8)
    { id: 301, name: 'Executive Pen Set', category: 'accessory', price: 199.00, desc: 'Rollerball and fountain pen set with gold plating.', image: 'pen1.jpg', images: ['pen2.jpg', 'pen3.jpg'] },
    { id: 302, name: 'Leather Messenger Bag', category: 'accessory', price: 390.00, desc: 'Full-grain leather messenger bag, perfect for the modern professional.', image: 'bag1.jpg', images: ['bag2.jpg', 'bag3.jpg'] },
    { id: 303, name: 'Polarized Aviator Sunglasses', category: 'accessory', price: 120.00, desc: 'Timeless aviator style with superior polarized lenses.', image: 'glasses3.jpg', images: ['glasses2.jpg', 'glasses1.jpg'] },
    { id: 304, name: 'Sterling Silver Cufflinks', category: 'accessory', price: 110.00, desc: 'Elegant square cufflinks in polished sterling silver.', image: 'cufflinks3.jpg', images: ['cufflinks2.jpg', 'cufflinks1.jpg'] },
    { id: 305, name: 'Silk Pocket Square', category: 'accessory', price: 45.00, desc: 'Hand-rolled silk pocket square with a subtle pattern.', image: 'pocketsquare1.jpg', images: ['pocketsquare2.jpg', 'pocketsquare3.jpg'] },
    { id: 306, name: 'Bi-fold Leather Wallet', category: 'accessory', price: 65.00, desc: 'Slim profile bi-fold wallet made from premium Italian leather.', image: 'wallet1.jpg', images: ['wallet2.jpg', 'wallet3.jpg'] },
    { id: 307, name: 'Gold-Plated Belt Buckle', category: 'accessory', price: 85.00, desc: 'Solid brass belt buckle with a rich gold-plated finish.', image: 'buckle1.jpg', images: ['buckle2.jpg', 'buckle3.jpg'] },
    { id: 308, name: 'Luxury Umbrella', category: 'accessory', price: 135.00, desc: 'Large, windproof umbrella with a polished wooden handle.', image: 'umbrella1.jpg', images: ['umbrella2.jpg', 'umbrella3.jpg'] },

    // Add more items to reach 20+ total
    { id: 401, name: 'The Voyager Backpack', category: 'accessory', price: 320.00, desc: 'Elegant, functional canvas and leather backpack for travel.', image: 'backpack1.jpg', images: ['backpack2.jpg', 'backpack3.jpg'] },
    { id: 404, name: 'Luxury Candle Set', category: 'accessory', price: 95.00, desc: 'Set of three hand-poured luxury scented candles.', image: 'candle1.jpg', images: ['candle2.jpg', 'candle3.jpg'] },
];

let cart = JSON.parse(localStorage.getItem('exclusiveWearsCart')) || []; // Load cart from local storage
let isLoggedIn = false;

// --- 2. Utility Functions ---

/**
 * Formats a number as USD currency string.
 * @param {number} amount
 * @returns {string}
 */
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};

/**
 * Saves the current cart to local storage.
 */
const saveCart = () => {
    localStorage.setItem('exclusiveWearsCart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems(); // Re-render cart modal content
};

/**
 * Updates the visible cart counter badge.
 */
const updateCartCount = () => {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalCount;
      const cartShirt = document.getElementById('cart-shirt');
      const cartShirt2 = document.getElementById('cart2');

    cartShirt.classList.toggle('visible', totalCount > 0);
     cartShirt2.classList.toggle('visible', totalCount > 0);


    // Check if the current user is the admin to show/hide the admin link
    const adminLink = document.querySelector('.nav-links a[href="admin.html"]');
    if (isLoggedIn && !adminLink) {
        // Simple client-side addition of a placeholder admin link
        const navList = document.querySelector('.nav-links');
        const li = document.createElement('li');
        li.innerHTML = '<a href="admin.html" class="admin-link"><i class="fas fa-tools"></i> Admin</a>';
        navList.appendChild(li);
    } else if (!isLoggedIn && adminLink) {
        adminLink.parentElement.remove();
    }
};



/**
 * Renders products into the respective category grids.
 */
const renderProducts = () => {
    const promoGrid = document.getElementById('promo-grid');
    const apparelGrid = document.getElementById('apparel-grid');
    const accessoryGrid = document.getElementById('accessory-grid');

    [promoGrid, apparelGrid, accessoryGrid].forEach(grid => grid.innerHTML = ''); // Clear grids

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);

        let priceHtml = '';
        if (product.oldPrice) {
            // Promo price display
            priceHtml = `
                <span class="old-price">${formatCurrency(product.oldPrice)}</span>
                <span class="product-price">${formatCurrency(product.price)}</span>
                <span class="promo-tag">PROMO</span>
            `;
        } else {
            // Regular price display
            priceHtml = `<span class="product-price">${formatCurrency(product.price)}</span>`;
        }

        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <p class="product-name">${product.name}</p>
            ${priceHtml}
            <div class="card-actions">
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
                <button class="view-details-btn" data-id="${product.id}">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        `;

        // Append to the correct grid based on category
        switch (product.category) {
            case 'promo':
                promoGrid.appendChild(productCard);
                break;
            case 'apparel':
                apparelGrid.appendChild(productCard);
                break;
            case 'accessory':
                accessoryGrid.appendChild(productCard);
                break;
        }
    });

    // Attach event listeners to all new "Add to Cart" and "Details" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            addItemToCart(productId);
        });
    });

    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.currentTarget.dataset.id);
            showProductDetails(productId);
        });
    });
};

// --- 3. Cart Logic ---

/**
 * Adds an item to the cart or increments its quantity.
 * @param {number} productId
 */
const addItemToCart = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    const productToAdd = products.find(p => p.id === productId);

    if (!productToAdd) return; // Guard clause

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.image,
            quantity: 1
        });
    }

    saveCart();
    // Unique "WOW" Animation: Button feedback
    const btn = document.querySelector(`.add-to-cart-btn[data-id="${productId}"]`);
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    btn.style.backgroundColor = '#5cb85c';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
        btn.style.backgroundColor = ''; // Revert to CSS default
    }, 800);
};

/**
 * Renders the list of items inside the cart modal.
 */
const renderCartItems = () => {
    const container = document.getElementById('cartItemsContainer');
    const subtotalDisplay = document.getElementById('cartSubtotal');
    container.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 20px;">Your shopping bag is empty. Start exploring our exclusive collection!</p>';
        subtotalDisplay.textContent = formatCurrency(0);
        return;
    }

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="item-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <span class="item-name">${item.name}</span>
                    <p>${formatCurrency(item.price)} each</p>
                </div>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                <button class="quantity-btn remove-btn" data-id="${item.id}" style="background-color: #D64545;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        container.appendChild(itemElement);
    });

    subtotalDisplay.textContent = formatCurrency(subtotal);

    // Attach quantity/remove event listeners
    document.querySelectorAll('.increase-btn').forEach(btn => btn.addEventListener('click', (e) => updateItemQuantity(parseInt(e.currentTarget.dataset.id), 1)));
    document.querySelectorAll('.decrease-btn').forEach(btn => btn.addEventListener('click', (e) => updateItemQuantity(parseInt(e.currentTarget.dataset.id), -1)));
    document.querySelectorAll('.remove-btn').forEach(btn => btn.addEventListener('click', (e) => updateItemQuantity(parseInt(e.currentTarget.dataset.id), 0))); // 0 means remove
};

/**
 * Updates the quantity of an item in the cart.
 * @param {number} productId
 * @param {number} change - 1 (increase), -1 (decrease), 0 (remove)
 */
const updateItemQuantity = (productId, change) => {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        if (change === 0) {
            // Remove item
            cart.splice(itemIndex, 1);
        } else {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                // Remove if quantity drops to 0 or less
                cart.splice(itemIndex, 1);
            }
        }
    }

    saveCart();
};

// --- 4. Product Details Modal ---

/**
 * Shows the product detail modal with the selected product's information.
 * @param {number} productId
 */
const showProductDetails = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const detailContent = document.getElementById('productDetailContent');
    detailContent.innerHTML = '';

    // Generate thumbnail gallery HTML
    const thumbnailsHtml = product.images.map((img, index) => `
        <img src="${img}" alt="${product.name} image ${index + 1}" class="thumb-image" data-full-src="${img}" ${index === 0 ? 'class="active-thumb"' : ''}>
    `).join('');

    let priceHtml = `<span class="detail-price">${formatCurrency(product.price)}</span>`;
    if (product.oldPrice) {
        priceHtml = `
            <span class="old-price">${formatCurrency(product.oldPrice)}</span>
            <span class="detail-price">${formatCurrency(product.price)} (PROMO)</span>
        `;
    }

    detailContent.innerHTML = `
        <div class="detail-gallery">
            <img src="${product.image}" alt="${product.name} main image" class="main-image" id="mainDetailImage">
            <div class="thumbnail-images">
                ${thumbnailsHtml}
            </div>
        </div>
        <div class="detail-info">
            <h2>${product.name}</h2>
            ${priceHtml}
            <p class="description">${product.desc}</p>
            <div class="detail-actions">
                <button class="cta-button" onclick="addItemToCart(${product.id}); document.getElementById('productDetailModal').style.display='none';">
                    <i class="fas fa-shopping-bag"></i> Add to Bag
                </button>
            </div>
        </div>
    `;

    // Add thumbnail click functionality
    document.querySelectorAll('.thumb-image').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            const mainImage = document.getElementById('mainDetailImage');
            mainImage.src = e.target.dataset.fullSrc;

            // Update active state
            document.querySelectorAll('.thumb-image').forEach(t => t.classList.remove('active-thumb'));
            e.target.classList.add('active-thumb');
        });
    });

    document.getElementById('productDetailModal').style.display = 'block';
};

// --- 5. Search Functionality ---

/**
 * Handles product search and displays results in a dropdown.
 * @param {string} query
 */
const handleSearch = (query) => {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (query.length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 results for brevity

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = '<p class="search-result-item">No results found.</p>';
        resultsContainer.style.display = 'block';
        return;
    }

    filteredProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = product.name;
        item.addEventListener('click', () => {
            showProductDetails(product.id);
            resultsContainer.style.display = 'none';
            document.getElementById('searchInput').value = '';
        });
        resultsContainer.appendChild(item);
    });

    resultsContainer.style.display = 'block';
};

// --- 6. Admin/Login Simulation ---

const handleLogin = (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Default Admin Credentials
    const ADMIN_USER = 'ADMIN';
    const ADMIN_PASS = 'Admin123';

    if (usernameInput === ADMIN_USER && passwordInput === ADMIN_PASS) {
        isLoggedIn = true;
        alert('Login Successful! Welcome, Admin.');
        document.getElementById('loginModal').style.display = 'none';
        
        // Redirect to a simulated admin page (or show admin tools on current page)
        // For this template, we'll just redirect to a placeholder page.
        window.location.href = 'admin.html'; // Placeholder page
    } else {
        alert('Login Failed. Invalid username or password.');
    }
};

// --- 7. Order/Payment Simulation ---

let selectedPaymentMethod = null;

const handleProceedToOrder = () => {
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('orderModal').style.display = 'block';

    // Reset order modal state
    document.getElementById('paymentSelection').classList.remove('hidden');
    document.getElementById('orderConfirmation').classList.add('hidden');
    document.getElementById('placeOrderBtn').disabled = true;
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('selected'));
    selectedPaymentMethod = null;
};

const handlePaymentSelection = (e) => {
    if (e.target.classList.contains('payment-btn')) {
        document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        selectedPaymentMethod = e.target.dataset.method;
        document.getElementById('placeOrderBtn').disabled = false;
    }
};

const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) return;

    // Simulate payment processing delay (optional)
    document.getElementById('placeOrderBtn').textContent = 'Processing...';
    document.getElementById('placeOrderBtn').disabled = true;

    setTimeout(() => {
        // Successful order placement
        cart = []; // Empty the cart
        saveCart(); // Update local storage and count

        document.getElementById('paymentSelection').classList.add('hidden');
        document.getElementById('orderConfirmation').classList.remove('hidden');
        document.getElementById('placeOrderBtn').textContent = 'Place Order';
        document.getElementById('placeOrderBtn').disabled = false;
    }, 1500);
};

///====== Hamburger Menu ==//

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.fa-bars');
  const nav = document.querySelector('.main-nav');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuIcon.classList.toggle('active');
  });

  // Optional: close nav when a link is clicked
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuIcon.classList.remove('active');
    });
  });
});


// --- 8. Event Listeners and Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Initial load of products and cart count
    renderProducts();
    updateCartCount();

    // --- Modal Handlers (Generic) ---
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close-btn');
    const loginBtn = document.getElementById('loginBtn');
    const cartIcon = document.getElementById('cartIcon');
    const cartIcon2 = document.getElementById('cart2');
   

    loginBtn.addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'block';
    });

    cartIcon.addEventListener('click', () => {
        renderCartItems(); // Ensure cart is up-to-date before opening
        document.getElementById('cartModal').style.display = 'block';
    });

    cartIcon2.addEventListener('click', () => {
        renderCartItems(); // Ensure cart is up-to-date before opening
        document.getElementById('cartModal').style.display = 'block';
    });


    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // --- Specific Form/Button Handlers ---
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('proceedToOrderBtn').addEventListener('click', handleProceedToOrder);

    document.getElementById('orderModal').addEventListener('click', handlePaymentSelection);
    document.getElementById('placeOrderBtn').addEventListener('click', handlePlaceOrder);

    // --- Search Input Handler (Live Search) ---
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Hide search results when clicking anywhere else
    document.addEventListener('click', (e) => {
        if (!document.querySelector('.search-container').contains(e.target)) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });

    // Handle search button click (optional, can just use live search)
    searchButton.addEventListener('click', () => {
        handleSearch(searchInput.value);
    });

    // --- Placeholder Admin Page Simulation ---
    // If we were on 'admin.html', we would run the admin-specific code here.
});

//------Hero section logic---//
/* JavaScript */
(function () {
  const images = [
    '/public/bg1.png',
    '/public/bg2.png',
    '/public/bg3.png'
  ];

  const intervalMs = 3000;     // time each image shows
  const bgA = document.querySelector('.hero-bg.bg-a');
  const bgB = document.querySelector('.hero-bg.bg-b');

  // Preload images for smoother transitions
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // Setup initial state
  let currentIndex = 0;          // index of image currently visible (on the visible layer)
  let showingA = true;          // which DOM layer is currently visible

  // Set initial backgrounds
  bgA.style.backgroundImage = `url(${images[0]})`;
  bgB.style.backgroundImage = `url(${images[1]})`; // preload next

  // Swap function
  function showNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    if (showingA) {
      // place next image into B, fade B in, A out
      bgB.style.backgroundImage = `url(${images[nextIndex]})`;
      bgB.style.opacity = 1;
      bgA.style.opacity = 0;
    } else {
      bgA.style.backgroundImage = `url(${images[nextIndex]})`;
      bgA.style.opacity = 1;
      bgB.style.opacity = 0;
    }

    showingA = !showingA;
    currentIndex = nextIndex;
  }

  // Start rotation
  const timer = setInterval(showNext, intervalMs);

  // OPTIONAL: pause on hover (uncomment if wanted)
  // const hero = document.getElementById('hero');
  // hero.addEventListener('mouseenter', () => clearInterval(timer));
  // hero.addEventListener('mouseleave', () => setInterval(showNext, intervalMs));
})();



/*
 * --- Placeholder for Admin Page (admin.html) ---
 * Since the user requested an admin page, a real implementation would
 * involve server-side handling of item/image uploads. Below is a conceptual
 * client-side simulation.
 *
 * If this code were in admin.html, it would allow adding a new item *only*
 * to the client's local storage/session, not permanently.
 */
// if (window.location.pathname.endsWith('admin.html')) {
//     // Code to check login status
//     // Code to render a form for adding new products (name, price, desc, image upload)
//     // Code to handle form submission and add item to 'products' array (temporarily)
// }