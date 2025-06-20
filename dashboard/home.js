customElements.define(
  "home-page",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
          .loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .loader {
            border: 4px solid rgba(255, 255, 255, 0.2);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
        <div class="loader-overlay">
          <div class="loader"></div>
        </div>
        <slot name="home"></slot>`;
      }
    connectedCallback() {
      setTimeout(() => {
        this.shadowRoot.querySelector('.loader-overlay')?.remove();
      this.innerHTML = `<!-- home -->
      <section slot="home">
        <div class="ios-install-modal" id="iosInstallModal">
          <div class="ios-install-content">
            <h3>Add Legends to Home Screen</h3>
            <ol class="ios-install-steps">
              <li>Tap the <strong>Share</strong> button <img src="./assets/icons/ios-share.png" width="14" style="vertical-align: middle"></li>
              <li>Select <strong>"Add to Home Screen"</strong></li>
              <li>Tap <strong>"Add"</strong> in top-right corner</li>
            </ol>
            <div class="ios-install-arrow">↓</div>
            <button class="ios-install-close" id="closeInstallModal">Got It!</button>
          </div>
        </div>

        <div class="container-h">
          <div class="container-s">
            <div class="clip1">
              <img class="clip1-img" src="./assets/images/carousel-1.png" alt="">
              <div class="carousel-floating-c-text-1">
                <p class="carousel-e-text-title">Boxing</p>
                <p class="carousel-e-text">Fundamentals</p>
              </div>
            </div>
            <div class="clip2">
              <img class="clip2-img" src="./assets/images/carousel-2.png" alt="">
              <div class="carousel-floating-c-text-2">
                <p class="carousel-e-text-title">MMA</p>
                <p class="carousel-e-text">Techniques</p>
              </div>
              <img src="./assets/icons/next.png" class="next" alt="">
            </div>
          </div>
          <button class="add-to-home" id="addToHome">
            Add Legends App Icon
          </button>
          <!-- popular videos -->
          <div>
            <h2 class="popular-title">POPULAR VIDEOS</h2>
            <div class="popular-container">
              <div class="popular-e-item specific-video">
                <div>
                  <img class="popular-img" src="./assets/images/popular-1.png" alt="">
                </div>
                <p class="popular-e-item-t-text">MuayThai</p>
                <p>Beginer</p>
                <p>Mark Duncan</p>
              </div>
              <div class="popular-e-item specific-video">
                <div>
                  <img class="popular-img" src="./assets/images/popular-2.png" alt="">
                </div>
                <p class="popular-e-item-t-text">Jiu- Jitsu</p>
                <p>Intermediate</p>
                <p>James Lee</p>
              </div>
              <div  class="popular-e-item specific-video">
                <div>
                  <img class="popular-img" src="./assets/images/popular-3.png" alt="">
                </div>
                <p class="popular-e-item-t-text">Kick Boxing</p>
                <p>All Level</p>
                <p>David Chan</p>
              </div>
              <div class="popular-e-item specific-video">
                <div>
                  <img class="popular-img" src="./assets/images/popular-4.png" alt="">
                </div>
                <p class="popular-e-item-t-text">Kick Boxing</p>
                <p>Beginer</p>
                <p>Sarah Collins</p>
              </div>
            </div>
          </div>
          <!-- live -->
          <div>
           <h2 class="live-title">LIVE</h2>
           <div class="live-container">
             <div class="live-e-item live-e-item--small">
               <div class="live-e-status">
                 <p class="">LIVE</p>
               </div>
               <button class="live-e-button live-e-button--small">
                 JOIN LIVE NOW
               </button>
               <img class="live-image" src="./assets/images/live-1.png" alt="">
             </div>
             <div class="live-e-item">
               <button class="live-e-button">
                 START YOUR FREE TRIAL
               </button>
               <img class="live-image" src="./assets/images/live-2.png" alt="">
             </div>
           </div>
          </div>
        </div>
      </section>
      `;

      // PWA Installation Logic
      const installButton = this.querySelector('#addToHome');
      let deferredPrompt;

      // Check if PWA is already installed
        const isInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

        if (isInstalled) {
          installButton.style.display = 'none'; // Hide if already installed
        } else {
          // Modern browsers (including iOS 16.4+)
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installButton.style.display = 'block';
          });

          // Legacy iOS detection
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          const isSafari = navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');

          if ((isIOS && isSafari) || isIOS) {
            installButton.style.display = 'block'; // Show for iOS even without beforeinstallprompt
          }

          installButton.addEventListener('click', async () => {
            if (deferredPrompt) {
              // Modern browsers (Chrome, Edge, iOS 16.4+)
              deferredPrompt.prompt();
              const { outcome } = await deferredPrompt.userChoice;
              if (outcome === 'accepted') {
                installButton.style.display = 'none';
              }
            }
          });
        }
        // Initialize PWA installation
        this.setupPWAInstallation();
      }, 400); 
    }
     setupPWAInstallation() {
    const installButton = this.querySelector('#addToHome');
    const iosModal = this.querySelector('#iosInstallModal');
    const closeModal = this.querySelector('#closeInstallModal');
    let deferredPrompt;

    // Check if already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                        window.navigator.standalone;

    if (isInstalled) {
      installButton.style.display = 'none';
      return;
    }

    // Android/Chrome: Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installButton.style.display = 'flex';
    });

    // iOS: Show button even without beforeinstallprompt
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    if (isIOS && !isInstalled) {
      installButton.style.display = 'flex';
    }

    // Handle install button click
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        // Android/Chrome - show native prompt
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          installButton.style.display = 'none';
        }
      } else if (isIOS) {
        // iOS - show visual guide
        iosModal.style.display = 'flex';
      } else {
        // Fallback
        alert('Look for "Install" in your browser menu');
      }
    });

    // Close iOS modal
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        iosModal.style.display = 'none';
      });
    }
  }
  }
);