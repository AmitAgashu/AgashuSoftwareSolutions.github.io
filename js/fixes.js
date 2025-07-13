// Fixed navigation bar visibility
jQuery(document).ready(function($) {
    // Make sure navigation bar is visible
    $(".custom-navbar").css('display', 'block');
    $(".navbar-fixed-top").css('display', 'block');
    
    // Ensure all menu items are visible
    $(".navbar-nav li a").css('display', 'block');
    
    // Fix mobile menu toggling
    $(".navbar-toggle").click(function() {
        if ($(".navbar-collapse").hasClass("in")) {
            $(".navbar-collapse").removeClass("in").css('display', 'none');
        } else {
            $(".navbar-collapse").addClass("in").css('display', 'block');
        }
    });
    
    // Mobile-specific fixes
    if ($(window).width() < 768) {
        $(".navbar-collapse").css({
            'position': 'absolute',
            'top': '70px',
            'width': '100%',
            'background-color': '#fff',
            'left': '0',
            'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)',
            'z-index': '1000',
            'padding': '10px 15px'
        });
    }
    
    // Add scroll event listener to ensure navbar stays visible
    $(window).scroll(function() {
        $(".custom-navbar").css('display', 'block');
    });
});

// Fix portfolio item visibility
jQuery(document).ready(function($) {
    // Set explicit dimensions for portfolio items
    $('.iso-box').css({
        'width': '33.33%',
        'display': 'block',
        'float': 'left'
    });
    
    // Make sure images display properly
    $('.iso-box img').css({
        'max-width': '100%',
        'height': 'auto',
        'display': 'block'
    });
    
    // Fix portfolio filters
    $('.filter-wrapper li a').click(function(event) {
        event.preventDefault();
        var filterValue = $(this).attr('data-filter');
        
        // Make all boxes visible first
        $('.iso-box').show();
        
        // Then hide the ones that don't match
        if (filterValue !== '*') {
            $('.iso-box:not(' + filterValue + ')').hide();
        }
        
        // Update selected filter
        $('.filter-wrapper li a').removeClass('selected');
        $(this).addClass('selected');
    });
});

// Fix service box heights
jQuery(document).ready(function($) {
    function equalizeHeights() {
        // Reset heights
        $('.service-card').css('height', 'auto');
        
        // Only equalize on desktop
        if ($(window).width() > 767) {
            var maxHeight = 0;
            $('.service-card').each(function() {
                var height = $(this).outerHeight();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            $('.service-card').css('height', maxHeight + 'px');
        }
    }
    
    // Run on load
    equalizeHeights();
    
    // Run on window resize
    $(window).resize(function() {
        equalizeHeights();
    });
});

// Fix about section tabs
jQuery(document).ready(function($) {
    // Make sure first tab is active
    $('.nav-tabs li:first-child').addClass('active');
    $('.tab-content .tab-pane:first-child').addClass('active');
    
    // Handle tab clicks
    $('.nav-tabs li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        
        // Update active tab
        $('.nav-tabs li').removeClass('active');
        $(this).parent().addClass('active');
        
        // Update active content
        $('.tab-pane').removeClass('active');
        $(target).addClass('active');
    });
});
