function CreateSpecificVideoscreen() {
    // Get all elements with class 'specific-video'
    const videoElements = document.querySelectorAll('.specific-video');
    
    if (!videoElements) {
        return
    }

    // Add click event to each video element
    videoElements.forEach(videoElement => {
        videoElement.addEventListener('click', function() {
                // Remove current floating cleanup if it exists
                if (currentFloatingCleanup) {
                    currentFloatingCleanup.remove();
                    currentFloatingCleanup = null;
                }
                // Create a new specific video element
                const floatContent = document.getElementById('floating-content');
                currentFloatingCleanup = document.createElement('specific-video');
                //append the new specific video element to the floating content
                floatContent.appendChild(currentFloatingCleanup);
                initializeSpecificVideoControls();
        });
    });
};

function CreateFullScreenVideo() {
    // Get all elements with class 'specific-video'
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    if (!fullscreenBtn) {
        return
    }

    // Add click event to fullscreen button
    fullscreenBtn.addEventListener('click', function() {
        // Remove current floating cleanup if it exists
        if (currentFloatingCleanup) {
            currentFloatingCleanup.remove();
            currentFloatingCleanup = null;
        }

        // Create a new fullscreen video element
        const floatContent = document.getElementById('floating-content');
        currentFloatingCleanup = document.createElement('fullscreen-video');
        //append the new fullscreen video element to the floating content
        floatContent.appendChild(currentFloatingCleanup);
        initializeFullscreenVideoControls();
    });
}   