
function initializeSpecificVideoControls() {
  const video = document.getElementById('specific-video-id');
  if (!video && !videoState.url) return;
  
  if (videoState.currentTime > 0) {
    console.log("testing videoState.currentTime", videoState.currentTime);
    
    video.currentTime = parseFloat(videoState.currentTime) || 0;
    video.duration = parseFloat(videoState.duration) || 0;
  }
  
  const playPauseBtn = document.querySelector('.specific-play-pause-btn');
  const progressBar = document.getElementById('specific-progress-bar');
  const progressThumb = document.getElementById('specific-progress-thumb');
  const backButton = document.getElementById('specific-video-back-btn');

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
      videoState.isPaused = true; // Update videoState
      video.pause();
      playPauseBtn.classList.replace('fa-pause', 'fa-play');
    }
  });

  // Fullscreen functionality
  CreateFullScreenVideo();
  
  // Progress bar functionality - fixed version
const progressContainer = document.querySelector('.specific-progress-container');
progressContainer.addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  video.currentTime = percent * video.duration;
});

// Also update the thumb position on timeupdate
video.addEventListener('timeupdate', function() {
  const percent = (video.currentTime / video.duration) * 100;
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
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video time
    }

    videoState = initialVideoState;
    
    if (currentFloatingCleanup) {
      currentFloatingCleanup.remove();
      currentFloatingCleanup = null;
    }
  });
}
