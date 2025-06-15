document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'specific-video'
    const videoElements = document.querySelectorAll('.specific-video');
    
    // Add click event to each video element
    videoElements.forEach(videoElement => {
        videoElement.addEventListener('click', function() {
            const specificElement = document.getElementById('specific-video-container');
            
            if (specificElement) {
                specificElement.style.display = 'block';
            }
        });
    });
});