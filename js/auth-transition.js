document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('startBtn');
  const carousel = document.getElementById('carousel');
  const loginContainer = document.getElementById('loginContainer');

  startBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Hide carousel
    carousel.style.transform = 'translateY(-100%)';
    carousel.style.opacity = '0';
    
    // Show login form with fall down animation
    loginContainer.classList.add('visible');
  });
});