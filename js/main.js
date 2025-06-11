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
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
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
        case 'searcn':
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
    const trainerPage = document.createElement('div');
    trainerPage.className = 'page trainer active';
    trainerPage.innerHTML = `
        <div class="about-content">
            <h1>About Us</h1>
            <p>We are a team of passionate developers creating modern web applications.</p>
            <p>This SPA demonstrates how to create a multi-page experience without framework dependencies.</p>
            <h2>Our Mission</h2>
            <p>To build performant, accessible web applications that delight users.</p>
        </div>
    `;
    container.appendChild(trainerPage);

     // Create and append stylesheet
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'trainer-styles.css'; // Path to your trainer page styles
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