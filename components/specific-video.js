customElements.define(
  "specific-video",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="specificVideo"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- specific video -->
      <section slot="specificVideo">
        <div class="specific-video-container" id="specific-video-container">
          <div class="specific-video-header-container">
            <i class="fas fa-arrow-left fa-2xl specific-video-back-btn" id="specific-video-back-btn" style="color: #ffffff"></i>
            <h2 class="header-subscribe">SUBSCRIBE</h2>
           </div>
           <div class="specific-video-box">
            <div class="specific-video-frame">
              <video width="100%" id="specific-video-id">
                <source src="./assets/video/sample1.webp" type="video/webp">
                <source src="./assets/video/sample1.webp" type="video/ogg">
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div class="specific-video-controller">
              <div class="specific-progress-container">
                <div class="specific-progress-bar" id="specific-progress-bar">
                  <div class="specific-progress-thumb" id="specific-progress-thumb"></div>
                </div>
              </div>
              <div class="specific-controls-row">
                <div>
                  <i class="fa-solid fa-play fa-2xl specific-play-pause-btn" style="color: #ffffff;"></i>
                  <i class="fa-solid fa-forward-step fa-2xl specific-forward-btn" style="color: #ffffff;"></i>
                </div>
                <i class="fa-solid fa-angle-right fa-2xl specific-skip-forward-btn" style="color: #ffffff;"></i>
                <i class="fa-solid fa-expand fa-2xl fullscreen-btn" id="fullscreen-btn" style="color: #ffffff;"></i>
              </div>
            </div>
            </div>
            <div class="specific-video-content">
              <h3 class="specific-video-content-title">Striking Combinations</h3>
              <p class="specific-video-content-name">Michael Chang</p>
              <div class="specific-social-container">
                <p>35,000 views</p>
                <div class="specific-social-control-c">
                  <i class="fa-regular fa-thumbs-up fa-lg" style="color: #ffffff;"></i>
                  <p>1,2k</p>
                  <i class="fa-solid fa-share fa-lg" style="color: #ffffff;"></i>
                </div>
              </div>
              <div class="specific-video-content-horizontal-line"></div>
              <p class="specific-video-description">Improve your striking skills with these combinations.</p>
              <div class="specific-video-comments-container">
                <i class="fa-regular fa-comment fa-xl"></i>
                <p class="specific-video-comment">28 comments</p>
              </div>
            </div>
          </div> 
      </section>`;
    }
  }
);