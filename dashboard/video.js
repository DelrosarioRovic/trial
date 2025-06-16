customElements.define(
  "video-page",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="video"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- video -->
      <section slot="video">
        <div class="container-v">
        <!-- boxing section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">Boxing</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Jab</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing2.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Counter Punch</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing3.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Combination</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Jab</p>
              </div>
            </div>
          </div>
        <!-- muay Thai section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">Muay Thai</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Roundhouse Kick</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai2.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Front Kick</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai3.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Clinch</p>
              </div>
               <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai3.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Clinch</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai2.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Front Kick</p>
              </div>
            </div>
          </div>
        <!-- MMA section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">Mma</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Ground & Pound</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma2.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Armbar</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma3.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Rear Naked Choke</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Ground & Pound</p>
              </div>
            </div>
          </div>
        <!-- karate section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">Karate</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Jab</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing2.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Counter Punch</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing3.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Combination</p>
              </div>
              <div class="video-item specific-video">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing1.png" alt="">
                  <i class="fa-solid fa-play fa-xl video-icon"></i>
                </div>
                <p>Jab</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
    }
  }
);