
function initializeFullscreenVideoControls() {
  const video = document.getElementById('fullscreen-video-id');
  if (!video) return;
  const playPauseBtn = document.querySelector('.fullscreen-play-pause-btn');
  const progressBar = document.getElementById('fullscreen-progress-bar');
  const progressThumb = document.getElementById('fullscreen-progress-thumb');
  const backButton = document.getElementById('fullscreen-video-back-btn');
  const progressContainer = document.querySelector('.fullscreen-progress-container');
  const startTime = document.getElementById('fullscreen-start-time');
  const endTime = document.getElementById('fullscreen-end-time');

  // Play/Pause functionality
  playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playPauseBtn.classList.replace('fa-play', 'fa-pause');
    } else {
      video.pause();
      playPauseBtn.classList.replace('fa-pause', 'fa-play');
    }
  });

// Progress bar functionality - fixed version
progressContainer.addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  video.currentTime = percent * video.duration;
});

// Also update the thumb position on timeupdate
video.addEventListener('timeupdate', function() {
  const percent = (video.currentTime / video.duration) * 100;
  console.log({currentTime: video.currentTime, duration: video.duration, percent});
  startTime.textContent = new Date(video.currentTime * 1000).toISOString().substr(14, 5);
  endTime.textContent = new Date(video.duration * 1000).toISOString().substr(14, 5);
  
  progressBar.style.width = percent + '%';
  progressThumb.style.left = `calc(${percent}% - 6px)`; // Adjust for thumb width
});

  // Back button functionality
  backButton.addEventListener('click', function() {
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
}
