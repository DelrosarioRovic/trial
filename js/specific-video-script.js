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
  const volumeBtn = document.getElementById('specific-volume-btn');
  const progressContainer = document.querySelector('.specific-progress-container');

  //check if paused
  if (videoState.isPaused) {
    video.pause();
    playPauseBtn.classList.replace('fa-pause', 'fa-play');
  }

  //mute unmute 
  volumeBtn.addEventListener('click', function() {
    if (video.muted) {
      video.muted = false;
      videoState.isMuted = false;
      volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high');
    } else {
      video.muted = true;
      videoState.isMuted = true;
      volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark');
    }
  });

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
  

progressContainer.addEventListener('click', function(e) {
  const rect = this.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  video.currentTime = percent * video.duration;
});

  // ====== ENHANCED MOBILE DRAG FUNCTIONALITY ======
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

 if (isTouchDevice) {
    let isDragging = false;
    let wasPlaying = false;
    let touchStartX = 0;
    let startTime = 0;
    let animationFrameId = null;

    // Create preview thumbnail (YouTube-style)
    const previewThumbnail = document.createElement('div');
    previewThumbnail.className = 'video-preview-thumbnail';
    progressContainer.appendChild(previewThumbnail);

    progressContainer.addEventListener('touchstart', function(e) {
      e.preventDefault();
      wasPlaying = !video.paused;
      
      isDragging = true;
      touchStartX = e.touches[0].clientX;
      startTime = video.currentTime;
      
      // Show preview immediately
      previewThumbnail.style.opacity = '1';
      updateDragPosition(e.touches[0].clientX);
    });

    document.addEventListener('touchmove', function(e) {
      if (!isDragging) return;
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        updateDragPosition(e.touches[0].clientX);
      });
    });

    document.addEventListener('touchend', function() {
      if (!isDragging) return;
      isDragging = false;
      cancelAnimationFrame(animationFrameId);
      
      // Hide preview
      previewThumbnail.style.opacity = '0';
      
      // Resume playback if needed
      if (wasPlaying && !video.paused) {
        video.play();
      }
    });

    function updateDragPosition(clientX) {
      const rect = progressContainer.getBoundingClientRect();
      let percent = (clientX - rect.left) / rect.width;
      percent = Math.max(0, Math.min(1, percent));
      
      const newTime = percent * video.duration;
      video.currentTime = newTime;
      
      // Update UI
      progressBar.style.width = `${percent * 100}%`;
      progressThumb.style.left = `calc(${percent * 100}% - 6px)`;
      
      // Update preview
      previewThumbnail.style.left = `${percent * 100}%`;
      previewThumbnail.textContent = formatTime(newTime);
      
      // Update state
      videoState.currentTime = newTime;
    }
  }


  // Helper function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

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

    app.style.display = "block";

    videoState = initialVideoState;
    
    if (currentFloatingCleanup) {
      currentFloatingCleanup.remove();
      currentFloatingCleanup = null;
    }
  });
}
