// Add this to your trainer.js or main.js
document.addEventListener('DOMContentLoaded', function() {
  // Simple carousel functionality
  const slides = document.querySelectorAll('.trainer-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  // Auto-advance every 5 seconds
  setInterval(() => showSlide(currentSlide + 1), 5000);
});