// Ensure all images are loaded properly
document.addEventListener('DOMContentLoaded', function() {
    // Fix for images that fail to load
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            this.style.display = 'block';
            this.style.background = '#f1f1f1';
            this.style.minHeight = '150px';
            this.alt = 'Image could not be loaded';
            
            // Try to load from a different source if available
            if (this.src.includes('LogoUsed.png')) {
                this.src = 'images/LogoFull.png';
            } else if (this.src.includes('portfolio-img')) {
                // Try generic portfolio placeholder
                this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23667eea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
            }
        };
    });
    
    // Ensure navbar is visible after load
    setTimeout(function() {
        const navbar = document.querySelector('.custom-navbar');
        if (navbar) {
            navbar.style.display = 'block';
            navbar.style.visibility = 'visible';
        }
        
        // Check if logo is visible, if not, try to fix it
        const logo = document.querySelector('.navbar-header img');
        if (logo && (logo.offsetWidth === 0 || logo.offsetHeight === 0)) {
            logo.style.display = 'block';
            logo.style.height = '50px';
            logo.style.visibility = 'visible';
        }
    }, 500);
});

// Force redraw of problematic elements
window.addEventListener('load', function() {
    const elementsToRedraw = [
        '.custom-navbar',
        '.navbar-header',
        '.navbar-collapse',
        '.navbar-nav',
        '.portfolio-item',
        '.service-card'
    ];
    
    elementsToRedraw.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Force redraw by accessing offsetHeight
            el.style.display = 'none';
            el.offsetHeight; // This is intentional to force a reflow
            el.style.display = '';
        });
    });
});
