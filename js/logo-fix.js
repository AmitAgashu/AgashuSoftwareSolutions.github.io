// Enhanced logo visibility fix with multiple fallbacks
document.addEventListener('DOMContentLoaded', function() {
    // Immediate attempt to force the logo visibility
    (function forceLogoVisibility() {
        var logoLink = document.querySelector('.logo-link');
        if (logoLink) {
            logoLink.style.display = 'block';
            logoLink.style.visibility = 'visible';
            logoLink.style.opacity = '1';
        }
    })();
    
    // Function to check if main logo is visible
    function checkLogoVisibility() {
        var mainLogo = document.querySelector('.logo-image');
        var backupLogo = document.querySelector('.logo-image-small');
        var textFallback = document.querySelector('.logo-text-fallback');
        
        // Apply extra styling to ensure visibility
        var logoLink = document.querySelector('.logo-link');
        if (logoLink) {
            logoLink.style.backgroundColor = '#ffffff';
            logoLink.style.padding = '8px 12px';
            logoLink.style.borderRadius = '5px';
            logoLink.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        }
        
        // Check if main logo is not visible or has rendering issues
        var mainLogoNotVisible = !mainLogo || mainLogo.offsetWidth < 10 || mainLogo.offsetHeight < 10 || 
                                 mainLogo.naturalWidth === 0 || mainLogo.complete === false;
                                 
        if (mainLogoNotVisible) {
            // Try the backup logo
            if (mainLogo) mainLogo.style.display = 'none';
            
            if (backupLogo) {
                backupLogo.style.display = 'block';
                
                // Check if backup is also not visible
                setTimeout(function() {
                    var backupNotVisible = backupLogo.offsetWidth < 10 || backupLogo.offsetHeight < 10 ||
                                         backupLogo.naturalWidth === 0;
                                         
                    if (backupNotVisible && textFallback) {
                        // Use text fallback if both images fail
                        backupLogo.style.display = 'none';
                        textFallback.style.display = 'block';
                    }
                }, 300);
            } else if (textFallback) {
                // No backup logo, use text directly
                textFallback.style.display = 'block';
            }
        }
    }
    
    // Check after a short delay to allow initial rendering
    setTimeout(checkLogoVisibility, 100);
    
    // Check again after more content has loaded
    setTimeout(checkLogoVisibility, 500);
    
    // Final check after full page load
    window.addEventListener('load', function() {
        checkLogoVisibility();
        
        // Extra measure: create an SVG logo if everything else fails
        setTimeout(function() {
            var mainLogo = document.querySelector('.logo-image');
            var backupLogo = document.querySelector('.logo-image-small');
            var textFallback = document.querySelector('.logo-text-fallback');
            
            var allLogosInvisible = 
                (!mainLogo || mainLogo.offsetWidth < 10) && 
                (!backupLogo || backupLogo.offsetWidth < 10) &&
                (!textFallback || textFallback.offsetWidth < 10);
                
            if (allLogosInvisible) {
                // Create SVG text logo as last resort
                var logoLink = document.querySelector('.logo-link');
                if (logoLink) {
                    logoLink.innerHTML = `
                        <svg width="150" height="40" xmlns="http://www.w3.org/2000/svg">
                            <text x="5" y="25" font-family="Arial" font-size="24" font-weight="bold" fill="#667eea">AgaShu</text>
                            <text x="90" y="25" font-family="Arial" font-size="16" fill="#333333">Softech</text>
                        </svg>
                    `;
                    logoLink.style.padding = '5px';
                    logoLink.style.backgroundColor = '#ffffff';
                }
            }
        }, 1500);
    });
});
