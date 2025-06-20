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
         }, 400); 
    }
  }
);