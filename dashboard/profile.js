customElements.define(
  "profile-page",
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
        <slot name="profile"></slot>`;
      }
    connectedCallback() {
      setTimeout(() => {
      this.shadowRoot.querySelector('.loader-overlay')?.remove();
      this.innerHTML = `<!-- profile -->
      <section slot="profile">
        <div class="container-p">
          <!-- upper section -->
           <div class="upper-section">
            <div class="profile-frame">
              <img class="profile-img" src="./assets/images/profile-picture.png" alt="">
            </div>
            <h4 class="profile-name">John</h4>
            <div class="profile-status">
              <p>Member</p>
            </div>
           </div>
           <!-- training summary section -->
           <div class="training-summary-container">
            <div>
              <h5>42</h5>
              <p>Videos Watched</p>
            </div>
            <div>
              <h5>320</h5>
              <p>Minutes Trained</p>
            </div>
            <div>
              <h5>8</h5>
              <p>Badges</p>
            </div>
           </div>
           <!-- achievements section -->
           <div class="achievement-container">
            <h2>ACHIEVEMENTS</h2>
            <div class="achievements-badge-container">
              <div>
                <img src="./assets/icons/thropy.png" alt="">
              </div>
              <div>
                <img src="./assets/icons/fire.png" alt="">
              </div>
              <div>
                <img src="./assets/icons/barbel.png" alt="">
              </div>
              <div>
                <img src="./assets/icons/shield.png" alt="">
              </div>
            </div>
           </div>
           <!-- payment section -->
            <div class="payment-container">
              <h2>Start your premium membership</h2>
              <div class="payment-options">
                <div>
                  <h5>BASIC</h5>
                  <p>$9.99/MO</p>
                </div>
                <div>
                  <h5>PLUS</h5>
                  <p>$19.99/MO</p>
                </div>
                <div>
                  <h5>PRO</h5>
                  <p>$29.99/MO</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      `;
       }, 300)
    }
  }
);