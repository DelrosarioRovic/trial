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
        <div class="container">
        <!-- boxing section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">Boxing</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing1.png" alt="">
                </div>
                <p>Jab</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing2.png" alt="">
                </div>
                <p>Counter Punch</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/boxing3.png" alt="">
                </div>
                <p>Combination</p>
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
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai1.png" alt="">
                </div>
                <p>Roundhouse Kick</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai2.png" alt="">
                </div>
                <p>Front Kick</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/muaythai3.png" alt="">
                </div>
                <p>Clinch</p>
              </div>
            </div>
          </div>
        <!-- MMA section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">MMA</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
            <div class="video-container">
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma1.png" alt="">
                </div>
                <p>Ground & Pound</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma2.png" alt="">
                </div>
                <p>Armbar</p>
              </div>
              <div class="video-item">
                <div class="thumbnail-frame">
                  <img class="thumbnail-img" src="./assets/images/mma3.png" alt="">
                </div>
                <p>Rear Naked Choke</p>
              </div>
            </div>
          </div>
        <!-- karate section -->
          <div class="section-container">
            <div class="section-header-container">
              <p class="section-header">MMA</p>
              <img class="right-arrow" src="./assets/icons/right-arrow.png" alt="right arrow">
            </div>
          </div>
        </div>
      </section>
      `;
    }
  }
);