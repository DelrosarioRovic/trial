
function initializeSpecificVideoControls() {
  const video = document.getElementById('specific-video-id');
  if (!video) return;
  const playPauseBtn = document.querySelector('.specific-play-pause-btn');
  const forwardBtn = document.querySelector('.specific-forward-btn');
  const skipForwardBtn = document.querySelector('.specific-skip-forward-btn');
  const progressBar = document.getElementById('specific-progress-bar');
  const progressThumb = document.getElementById('specific-progress-thumb');
  const backButton = document.getElementById('specific-video-back-btn');

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
  
  // Forward 10 seconds
  forwardBtn.addEventListener('click', function() {
    video.currentTime += 10;
  });
  
  // Skip forward 30 seconds
  skipForwardBtn.addEventListener('click', function() {
    video.currentTime += 30;
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
});
  
  // Back button functionality
  backButton.addEventListener('click', function() {
    currentFloatingCleanup.remove();
  });
}
