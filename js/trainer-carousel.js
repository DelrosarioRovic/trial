// Add this to your trainer.js or main.js
function initializeTrainerCarousel() {
  const carousel = document.querySelector('.trainer-carousel');
  const slides = document.querySelectorAll('.trainer-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let intervalId;
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide]?.classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  // Dot click handlers
  function handleDotClick(index) {
    return () => showSlide(index);
  }

  // Touch handlers
  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    e.preventDefault();
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    const threshold = 50;
    
    if (Math.abs(touchEndX - touchStartX) > threshold) {
      e.preventDefault(); // Prevent jump-to-top
      handleSwipe();
    }
  }

  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance in pixels
    
    if (touchStartX - touchEndX > threshold) {
      // Swipe left - next slide
      showSlide(currentSlide + 1);
    } else if (touchEndX - touchStartX > threshold) {
      // Swipe right - previous slide
      showSlide(currentSlide - 1);
    }
  }

  // Initialize
  const dotClickHandlers = [];
  dots.forEach((dot, index) => {
    const handler = handleDotClick(index);
    dot.addEventListener('click', handler);
    dotClickHandlers.push({ dot, handler });
  });

  // Add touch events
  carousel?.addEventListener('touchstart', handleTouchStart, { passive: false });
  carousel?.addEventListener('touchend', handleTouchEnd, { passive: false });

  // Auto-advance every 5 seconds
  intervalId = setInterval(() => showSlide(currentSlide + 1), 5000);

  // Return cleanup function
  return function cleanup() {
    clearInterval(intervalId);
    
    // Remove dot click handlers
    dotClickHandlers.forEach(({ dot, handler }) => {
      dot?.removeEventListener('click', handler);
    });
    
    // Remove touch handlers
    carousel?.removeEventListener('touchstart', handleTouchStart, { passive: true});
    carousel?.removeEventListener('touchend', handleTouchEnd, { passive: true});
    
    console.log('Carousel cleaned up');
  };
}