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
    
    // Clear previous content
    app.innerHTML = '';
    
    // Load the appropriate page
    switch(page) {
        case 'home':
            loadHomePage(app);
            break;
        case 'trainer':
            loadTrainerPage(app);
            break;
        case 'video':
            loadVideoPage(app);
            break;
        case 'profile':
            loadProfilePage(app);
            break;
        default:
            loadHomePage(app);
    }
}

function loadHomePage(container) {
    const homePage = document.createElement('home-page');
    container.appendChild(homePage);

    // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/home.css'; // Path to your home page styles
    style.id = 'home-page-css'; // Give it an ID so we can remove it later

    console.log({
      style
    });
    

    // Append to head
    document.head.appendChild(style);

    // You might want to remove this stylesheet when unmounting
    // Return a cleanup function
    return () => {
        const styleElement = document.getElementById('home-page-css');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}

function loadTrainerPage(container) {
    const homePage = document.createElement('trainer-page');
    container.appendChild(homePage);

     // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/trainer.css'; // Path to your trainer page styles
    style.id = 'trainer-page-styles'; // Give it an ID so we can remove it later
    
    // Append to head
    document.head.appendChild(style);

    // You might want to remove this stylesheet when unmounting
    // Return a cleanup function
    return () => {
        const styleElement = document.getElementById('trainer-page-styles');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}

function loadVideoPage(container) {
    const videoPage = document.createElement('video-page');
    container.appendChild(videoPage);

    // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './css/video.css'; // Path to your video page styles
    style.id = 'video-page-css'; // Give it an ID so we can remove it later

    // Append to head
    document.head.appendChild(style);

    // You might want to remove this stylesheet when unmounting
    // Return a cleanup function
    return () => {
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
    style.href = './css/profile.css'; // Path to your profile page styles
    style.id = 'profile-page-css'; // Give it an ID so we can remove it later

    // Append to head
    document.head.appendChild(style);

    // You might want to remove this stylesheet when unmounting
    // Return a cleanup function
    return () => {
        const styleElement = document.getElementById('profile-page-css');
        if (styleElement) {
            document.head.removeChild(styleElement);
        }
    };
}