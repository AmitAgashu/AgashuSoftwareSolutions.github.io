// Portfolio and Section Layout Fixes
document.addEventListener('DOMContentLoaded', function() {
    // Fix the portfolio filter functionality
    var filterLinks = document.querySelectorAll('.filter-wrapper li a');
    var portfolioItems = document.querySelectorAll('.iso-box');
    
    // Make sure all portfolio items are initially visible
    portfolioItems.forEach(function(item) {
        item.style.display = 'block';
    });
    
    // Add click event to filter links
    filterLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove selected class from all links
            filterLinks.forEach(function(l) {
                l.classList.remove('selected');
            });
            
            // Add selected class to clicked link
            this.classList.add('selected');
            
            var filterValue = this.getAttribute('data-filter');
            
            // Show/hide items based on filter
            portfolioItems.forEach(function(item) {
                if (filterValue === '*') {
                    item.style.display = 'block';
                } else if (item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Fix service card heights
    function equalizeServiceCardHeights() {
        var serviceCards = document.querySelectorAll('.service-card');
        var maxHeight = 0;
        
        // Reset heights first
        serviceCards.forEach(function(card) {
            card.style.height = 'auto';
        });
        
        // Find the tallest card
        serviceCards.forEach(function(card) {
            var height = card.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        
        // Set all cards to the height of the tallest card
        if (maxHeight > 0 && window.innerWidth > 767) {
            serviceCards.forEach(function(card) {
                card.style.height = maxHeight + 'px';
            });
        }
    }
    
    // Run on load
    equalizeServiceCardHeights();
    
    // Run on window resize
    window.addEventListener('resize', function() {
        equalizeServiceCardHeights();
    });
    
    // Fix social icon links
    var socialIcons = document.querySelectorAll('.social-icon li a');
    socialIcons.forEach(function(icon) {
        icon.style.display = 'flex';
        icon.style.alignItems = 'center';
        icon.style.justifyContent = 'center';
    });
});
