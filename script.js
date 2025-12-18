document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Change icon based on state
        const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
        mobileMenuBtn.innerHTML = `<i data-lucide="${icon}" class="w-7 h-7"></i>`;
        lucide.createIcons();
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="w-7 h-7"></i>`;
            lucide.createIcons();
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white/95');
        } else {
            // Keep it visible but slightly less shadowed at top if needed
            // currently styled to be fixed always
        }
    });

    // Cart Functionality (Mock)
    let cartCount = 0;
    const cartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartIconCount = document.querySelector('.cart-btn span');
    const cartIconBtn = document.querySelector('.cart-btn');

    // Create Toast Element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <div class="bg-green-500 rounded-full p-1">
            <i data-lucide="check" class="w-4 h-4 text-white"></i>
        </div>
        <div class="font-medium">Товар добавлен в корзину</div>
    `;
    document.body.appendChild(toast);
    // Re-init icons for toast
    lucide.createIcons();

    cartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Animation for button
            this.classList.add('scale-95');
            setTimeout(() => this.classList.remove('scale-95'), 100);

            // Increment Cart
            cartCount++;
            cartIconCount.textContent = cartCount;

            // Animate Cart Icon
            cartIconBtn.classList.add('bump-anim');
            setTimeout(() => cartIconBtn.classList.remove('bump-anim'), 300);

            // Show Toast
            showToast();
        });
    });

    function showToast() {
        toast.classList.add('toast-visible');
        setTimeout(() => {
            toast.classList.remove('toast-visible');
        }, 3000);
    }
});