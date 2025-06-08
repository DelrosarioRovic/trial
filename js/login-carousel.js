document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const controlButtons = document.querySelectorAll('.control-btn');
    let currentIndex = 0;
    let autoSlideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Minimum distance for a swipe
    // Initialize the carousel
    function initCarousel() {
        updateControls();
        startAutoSlide();
        setupTouchEvents();
    }
    // Show slide by index
    function showSlide(index) {
        // Wrap around if index is out of bounds
        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show the selected slide
        slides[index].classList.add('active');
        currentIndex = index;
        // Update control buttons
        updateControls();
    }
    // Update control buttons
    function updateControls() {
        controlButtons.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === currentIndex);
        });
    }
    // Next slide
    function nextSlide() {
        showSlide(currentIndex + 1);
        resetAutoSlide();
    }
    // Previous slide
    function prevSlide() {
        showSlide(currentIndex - 1);
        resetAutoSlide();
    }
    // Start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    // Setup touch events for swipe
    function setupTouchEvents() {
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }
    // Handle swipe gesture
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        
        // Swipe left (next slide)
        if (difference > swipeThreshold) {
            nextSlide();
        } 
        // Swipe right (previous slide)
        else if (difference < -swipeThreshold) {
            prevSlide();
        }
    }
    // Event listeners for control buttons
    controlButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });
    // Initialize
    initCarousel();
});