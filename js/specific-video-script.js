document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('specific-video-id');
  const playPauseBtn = document.querySelector('.play-pause-btn');
  const forwardBtn = document.querySelector('.forward-btn');
  const skipForwardBtn = document.querySelector('.skip-forward-btn');
  const fullscreenBtn = document.querySelector('.fullscreen-btn');
  const progressBar = document.getElementById('specific-progress-bar');
  const progressThumb = document.getElementById('specific-progress-thumb');
  const backButton = document.querySelector('.back-button');
  
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
  fullscreenBtn.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
  
  // Progress bar functionality
  progressBar.addEventListener('click', function(e) {
    const percent = e.offsetX / this.offsetWidth;
    video.currentTime = percent * video.duration;
  });
  
  // Update progress bar as video plays
  video.addEventListener('timeupdate', function() {
    const percent = (video.currentTime / video.duration) * 100;
    progressThumb.style.width = percent + '%';
  });
  
  // Back button functionality
  backButton.addEventListener('click', function() {
    window.history.back();
  });
  
  // Toggle controls when video is hovered (optional)
  const videoContainer = document.querySelector('.specific-video-box');
  const videoController = document.querySelector('.specific-video-controller');
  
  videoContainer.addEventListener('mouseenter', function() {
    videoController.style.opacity = '1';
  });
  
  videoContainer.addEventListener('mouseleave', function() {
    videoController.style.opacity = '0';
  });
});