
function initializeFullscreenVideoControls() {
  const video = document.getElementById('fullscreen-video-id');
  if (!video) return;

  video.currentTime = parseFloat(videoState.currentTime) || 0;
  video.duration = parseFloat(videoState.duration) || 0;

  const playPauseBtn = document.querySelector('.fullscreen-play-pause-btn');
  const progressBar = document.getElementById('fullscreen-progress-bar');
  const progressThumb = document.getElementById('fullscreen-progress-thumb');
  const backButton = document.getElementById('fullscreen-video-back-btn');
  const progressContainer = document.querySelector('.fullscreen-progress-container');
  const startTime = document.getElementById('fullscreen-start-time');
  const endTime = document.getElementById('fullscreen-end-time');

  //check if paused
  if (videoState.isPaused) {
    video.pause();
    playPauseBtn.classList.replace('fa-pause', 'fa-play');
  }
  
  // Play/Pause functionality
  playPauseBtn.addEventListener('click', function() {
    if (video.ended) {
      video.currentTime = 0;
      video.play();
      playPauseBtn.classList.replace('fa-rotate-right', 'fa-pause');
    } else if (video.paused) {
      video.play();
      videoState.isPaused = false;
      playPauseBtn.classList.replace('fa-play', 'fa-pause');
    } else {
      video.pause();
      videoState.isPaused = true;
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
  startTime.textContent = new Date(video.currentTime * 1000).toISOString().substr(14, 5);
  endTime.textContent = new Date(video.duration * 1000).toISOString().substr(14, 5);
  
  progressBar.style.width = percent + '%';
  progressThumb.style.left = `calc(${percent}% - 6px)`; // Adjust for thumb width
  videoState.currentTime = video.currentTime; // Update videoState
  videoState.duration = video.duration; // Update videoState
});

video.addEventListener('ended', function() {
  playPauseBtn.classList.replace('fa-pause', 'fa-rotate-right'); // Show play icon when video ends
  videoState.isEnded = true;
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
