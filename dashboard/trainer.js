customElements.define(
  "trainer-page",
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
        <slot name="trainer"></slot>`;
    }
    connectedCallback() {
      setTimeout(() => {
      this.shadowRoot.querySelector('.loader-overlay')?.remove();
      this.innerHTML = `<!-- trainer -->
      <section slot="trainer">
       <div class="container-t">
          <div class="trainer-section">
            <div class="section-header">
              <h2>Meet Our Expert Trainers</h2>
              <p class="section-subtitle">World-class professionals to guide your fitness journey</p>
            </div>

            <!-- Trainer Carousel for Mobile -->
            <div class="trainer-carousel">
              <!-- Trainer 1 -->
              <div class="trainer-slide active">
                <div class="trainer-img-frame">
                  <img class="carousel-img" src="./assets/images/trainer-4.jpg" alt="Jacbon Carter boxing">
                  <div class="trainer-info">
                    <p class="trainer-title">Jacbon Carter</p>
                    <p class="trainer-status-1">UP AND COMING</p>
                    <div class="trainer-specialty">
                      <span>🥊 Boxing</span>
                      <span>💪 Strength</span>
                    </div>
                  </div>
                </div>
                <div class="trainer-bio">
                  <p>Former amateur boxing champion with 5+ years professional coaching experience. Specializes in advanced footwork and defensive techniques.</p>
                  <button class="btn-book">Book Session</button>
                </div>
              </div>

              <!-- Trainer 2 -->
              <div class="trainer-slide">
                <div class="trainer-img-frame">
                  <img class="carousel-img" src="./assets/images/trainer-5.png" alt="Michael Chang MMA">
                  <div class="trainer-info">
                    <p class="trainer-title">Michael Chang</p>
                    <p class="trainer-status-2">LEGENDARY</p>
                    <div class="trainer-specialty">
                      <span>🥋 MMA</span>
                      <span>🧘 Flexibility</span>
                    </div>
                  </div>
                </div>
                <div class="trainer-bio">
                  <p>UFC veteran with 15+ years experience training champion fighters. Renowned worldwide for elite-level conditioning and strength programs.</p>
                  <button class="btn-book">Book Session</button>
                </div>
              </div>

              <!-- Carousel dots -->
              <div class="carousel-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
              </div>
            </div>
          </div>

          <!-- Categories Section -->
          <div class="categories">
            <h3 class="categories-title">Training Categories</h3>
            <div class="categories-grid">
              <div class="category-card">
                <img class="category-img" src="./assets/images/trainer-1.jpg" alt="">
                <p class="category-name">Boxing</p>
                <p class="category-link">View Programs <i class="fas fa-arrow-right"></i></p>
              </div>
              <div class="category-card">
                <img class="category-img" src="./assets/images/trainer-2.jpg" alt="">
                <p class="category-name">MMA</p>
                <p class="category-link">View Programs <i class="fas fa-arrow-right"></i></p>
              </div>
              <div class="category-card">
                <img class="category-img" src="./assets/images/trainer-3.jpg" alt="">
                <p class="category-name">Karate</p>
                <p class="category-link">View Programs <i class="fas fa-arrow-right"></i></p>
              </div>
              <div class="category-card">
                <img class="category-img" src="./assets/images/trainer-4.jpg" alt="">
                <p class="category-name">Kick Boxing</p>
                <p class="category-link">View Programs <i class="fas fa-arrow-right"></i></p>
              </div>
            </div>
          </div>
          <div class="view-all-trainers">
            <button class="btn-view-all">
              See more 
            </button>
          </div>
        </div>
      </section>
      `;
      }, 300);
    }
  }
);