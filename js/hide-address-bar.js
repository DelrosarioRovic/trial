// Newest iOS Safari requires this approach
document.addEventListener('DOMContentLoaded', function() {
  if (navigator.standalone) {
    // Already fullscreen if launched from home screen
    return;
  }
  
  // Scroll manipulation for regular Safari browsing
  setTimeout(function() {
    window.scrollTo(0, 1);
    
    // Additional trick for iOS 15+ dynamic address bar
    if (window.innerHeight === window.outerHeight) {
      document.body.style.height = (window.innerHeight + 50) + 'px';
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 100);
    }
  }, 10);
});

// Handle orientation changes
window.addEventListener('orientationchange', function() {
  setTimeout(function() {
    window.scrollTo(0, 1);
  }, 100);
});