// Keep track of the current cleanup function
let currentPageCleanup = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app with the current page
    const initialPage = getCurrentPageFromHash();
    loadPage(initialPage);
    
    // Set active link based on current page
    updateActiveLink(initialPage);

    // Set up navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
        });
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function(e) {
        const page = e.state?.page || getCurrentPageFromHash() || 'home';
        loadPage(page);
        updateActiveLink(page);
    });
});

// Helper function to get current page from hash
function getCurrentPageFromHash() {
    return window.location.hash.substring(1).split('/')[0] || 'home';
}

// Helper function to update active link
function updateActiveLink(page) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const icon = link.querySelector('.nav-icon');
        const isActive = link.getAttribute('data-page') === page;

        // Set active class on link
        link.classList.toggle('active', isActive);

        if (icon) {
            // Toggle active-icon class
            icon.classList.toggle('active-icon', isActive);

            // Switch icon src based on active state
            const defaultSrc = icon.getAttribute('data-default-src');
            const activeSrc = icon.getAttribute('data-active-src');

            icon.src = isActive ? activeSrc : defaultSrc;
        }

        // Special handling for profile
        if (link.classList.contains('icon-profile')) {
            const profileIcon = link.querySelector('.icon-profile-active');
            const dot = link.querySelector('.active-dot');

            if (profileIcon) {
                profileIcon.classList.toggle('active-profile', isActive);
            }
            if (dot) {
                dot.classList.toggle('active-dot-green', isActive);
            }
        }
    });
}

// Centralized navigation function
function navigateTo(page) {
    // Update page content first
    loadPage(page);
    
    // Then update URL state
    if (getCurrentPageFromHash() !== page) {
        history.pushState({ page: page }, '', `#${page}`);
    }
    
    // Update active link
    updateActiveLink(page);
}

function loadPage(page) {
    const app = document.getElementById('app');
    console.log({page}, "loadpage");
    
    // Clear previous content and run cleanup
    if (currentPageCleanup) {
        console.log('Running cleanup for previous page');
        currentPageCleanup();
        currentPageCleanup = null;
    }
    
    // Clear the app container
    app.innerHTML = '';
    
    // Load the appropriate page
    switch(page) {
        case 'home':
            currentPageCleanup = loadHomePage(app);
            break;
        case 'trainer':
            currentPageCleanup = loadTrainerPage(app);
            break;
        case 'video':
            currentPageCleanup = loadVideoPage(app);
            break;
        case 'profile':
            currentPageCleanup = loadProfilePage(app);
            break;
        default:
            currentPageCleanup = loadHomePage(app);
    }
}

function loadHomePage(container) {
    const homePage = document.createElement('home-page');
    container.appendChild(homePage);

    // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/home.css';
    style.id = 'home-page-css';
    document.head.appendChild(style);

    // Return cleanup function
    return () => {
        console.log('Cleaning up home page styles');
        const styleElement = document.getElementById('home-page-css');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}

function loadTrainerPage(container) {
  const trainerPage = document.createElement('trainer-page');
  container.appendChild(trainerPage);

  // Create and append stylesheet
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = './css/trainer.css';
  style.id = 'trainer-page-styles';
  document.head.appendChild(style);

  // Create and append script
  const script = document.createElement('script');
  script.src = './js/trainer-carousel.js';
  script.id = 'trainer-page-script';
  script.onload = function() {
    // Initialize the carousel after script loads
    currentPageCleanup = initializeTrainerCarousel();
  };
  document.body.appendChild(script);
  
  // Return cleanup function
  return () => {
    // Remove stylesheet
    const styleElement = document.getElementById('trainer-page-styles');
    if (styleElement) {
      document.head.removeChild(styleElement);
    }
    console.log('Cleaning up trainer page resources');
    
    // Run the carousel cleanup if it exists
    if (currentPageCleanup) {
      currentPageCleanup();
    }
    
    // Remove script
    const scriptElement = document.getElementById('trainer-page-script');
    if (scriptElement) {
      document.body.removeChild(scriptElement);
    }
  };
}

function loadVideoPage(container) {
    const videoPage = document.createElement('video-page');
    container.appendChild(videoPage);

    // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/video.css';
    style.id = 'video-page-css';
    document.head.appendChild(style);

    // Return cleanup function
    return () => {
        console.log('Cleaning up video page styles');
        const styleElement = document.getElementById('video-page-css');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}

function loadProfilePage(container) {
    const profilePage = document.createElement('profile-page');
    container.appendChild(profilePage);

    // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/profile.css';
    style.id = 'profile-page-css';
    document.head.appendChild(style);

    // Return cleanup function
    return () => {
        console.log('Cleaning up profile page styles');
        const styleElement = document.getElementById('profile-page-css');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}