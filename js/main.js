function setAppHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Initial call
setAppHeight();

// Re-apply on resize or orientation change
window.addEventListener('resize', setAppHeight);