// Text visibility fixes
document.addEventListener('DOMContentLoaded', function() {
  // Add text visibility to all section titles
  const sectionTitles = document.querySelectorAll('.section-title strong, .section-title h1, .section-title hr');
  sectionTitles.forEach(function(element) {
    if (element.tagName === 'STRONG' || element.tagName === 'H1') {
      element.style.color = '#ffffff';
      element.style.textShadow = '0 2px 4px rgba(0,0,0,0.3)';
    } else if (element.tagName === 'HR') {
      element.style.borderColor = 'rgba(255,255,255,0.5)';
    }
  });
  
  // Add text visibility to all paragraphs in sections except service boxes
  const sectionParagraphs = document.querySelectorAll('section p:not(.service-box p)');
  sectionParagraphs.forEach(function(p) {
    p.style.color = '#ffffff';
    p.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)';
  });
  
  // Portfolio filter links
  const filterLinks = document.querySelectorAll('.filter-wrapper li a');
  filterLinks.forEach(function(link) {
    link.style.color = '#ffffff';
    link.style.opacity = '1';
    link.style.fontWeight = 'bold';
    link.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)';
  });
  
  // Contact section specific elements
  const contactElements = document.querySelectorAll('#contact h2, #contact h3, #contact p, #contact i');
  contactElements.forEach(function(element) {
    element.style.color = '#ffffff';
    element.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)';
  });
  
  // Form inputs and buttons
  const formElements = document.querySelectorAll('input, textarea, button');
  formElements.forEach(function(element) {
    element.style.backgroundColor = 'rgba(255,255,255,0.9)';
    element.style.color = '#333333';
    element.style.border = '1px solid rgba(255,255,255,0.5)';
  });
  
  // Footer text
  const footerText = document.querySelectorAll('footer p');
  footerText.forEach(function(element) {
    element.style.color = '#ffffff';
    element.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)';
  });
});
