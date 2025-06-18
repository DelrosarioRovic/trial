function initializeFullscreenVideoControls() {
  const video = document.getElementById('fullscreen-video-id');
  if (!video) return;
  video.removeAttribute('controls'); // Remove default controls

  video.currentTime = parseFloat(videoState.currentTime) || 0;
  video.duration = parseFloat(videoState.duration) || 0;

  const playPauseBtn = document.querySelector('.fullscreen-play-pause-btn');
  const playPauseBtnFrame = document.querySelector('.fullscreen-play-pause-btn-frame');
  const progressBar = document.getElementById('fullscreen-progress-bar');
  const progressThumb = document.getElementById('fullscreen-progress-thumb');
  const backButton = document.getElementById('fullscreen-video-back-btn');
  const progressContainer = document.querySelector('.fullscreen-progress-container');
  const startTime = document.getElementById('fullscreen-start-time');
  const endTime = document.getElementById('fullscreen-end-time');
  const volumeBtn = document.getElementById('fullscreen-volume-btn');


  // Variable to store the timeout ID
  let playPauseTimeout;

  // Function to hide play/pause button after delay
  function hidePlayPauseButton() {
    playPauseTimeout = setTimeout(() => {
      playPauseBtnFrame.style.opacity = '0';
      playPauseBtnFrame.style.transition = 'opacity 0.5s ease';
    }, 3000);
  }

  // Function to show play/pause button
  function showPlayPauseButton() {
    clearTimeout(playPauseTimeout);
    playPauseBtnFrame.style.opacity = '1';
    playPauseBtnFrame.style.transition = 'opacity 0.2s ease';
    hidePlayPauseButton(); // Start the hide timer again
  }

  // Initial setup
  playPauseBtnFrame.style.opacity = '1';
  hidePlayPauseButton();

  //check if paused
  if (videoState.isPaused) {
    video.pause();
    playPauseBtn.classList.replace('fa-pause', 'fa-play');
  }

  if (videoState.isMuted) {
    video.muted = true;
    volumeBtn.classList.replace('fa-pause', 'fa-play');
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
  playPauseBtnFrame.addEventListener('click', function() {
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
    showPlayPauseButton(); // Show button when clicked and restart timer
  });

  // Show controls when video is hovered or touched
  playPauseBtnFrame.addEventListener('mouseenter', showPlayPauseButton);
  video.addEventListener('mouseenter', showPlayPauseButton);

  // Progress bar functionality - fixed version
  progressContainer.addEventListener('click', function(e) {
      e.preventDefault();
      const rect = this.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      video.currentTime = percent * video.duration;
      showPlayPauseButton(); // Show controls when seeking
      
      if (video.ended) {
          video.play();
          playPauseBtn.classList.replace('fa-rotate-right', 'fa-pause');
          videoState.isPaused = false;
          videoState.isEnded = false;
      } else if (video.paused) {
          video.play();
          playPauseBtn.classList.replace('fa-play', 'fa-pause');
          videoState.isPaused = false;
      }
  });

    // ====== ENHANCED MOBILE DRAG FUNCTIONALITY ======
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

 if (isTouchDevice) {
    let isDragging = false;
    let wasPlaying = false;
    let touchStartX = 0;
    let startTime = 0;
    let animationFrameId = null;

    progressContainer.addEventListener('touchstart', function(e) {
      e.preventDefault();
      wasPlaying = !video.paused;
      
      isDragging = true;
      touchStartX = e.touches[0].clientX;
      startTime = video.currentTime;

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

      // Update state
      videoState.currentTime = newTime;
    }
  }

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
    showPlayPauseButton(); // Show controls when video ends
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