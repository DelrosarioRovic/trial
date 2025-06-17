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
              <video autoplay width="100%" id="specific-video-id">
                <source src="${videoState.url}" type="video/mp4">
                <source src="${videoState.url}" type="video/ogg">
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
                  <i class="fa-solid fa-pause fa-2xl specific-play-pause-btn" style="color: #ffffff;"></i>
                  <i class="fa-solid fa-forward-step fa-2xl specific-forward-btn" style="color: #ffffff;"></i>
                </div>
                <i class="fa-solid fa-expand fa-2xl fullscreen-btn" id="fullscreen-btn" style="color: #ffffff;"></i>
              </div>
            </div>
            </div>
            <div class="specific-video-content">
              <h3 class="specific-video-content-title">Mastering Striking Combinations</h3>
              <div class="specific-social-container">
                <p>35,842 views • 2 days ago</p>
                <div class="specific-social-control-c">
                  <i class="fa-regular fa-thumbs-up fa-lg" style="color: #ffffff;"></i>
                  <p>1,284</p>
                  <i class="fa-regular fa-thumbs-down fa-lg" style="color: #ffffff;"></i>
                  <p>23</p>
                  <i class="fa-solid fa-share fa-lg" style="color: #ffffff;"></i>
                  <p>Share</p>
                </div>
              </div>
              
              <div class="channel-info">
                <div class="channel-avatar">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chang">
                </div>
                <div class="channel-details">
                  <div class="channel-name">Michael Chang</div>
                  <div class="channel-subs">45K subscribers</div>
                </div>
              </div>
              
              <div class="video-tags">
                <div class="video-tag">#Striking</div>
                <div class="video-tag">#MMA</div>
                <div class="video-tag">#Training</div>
                <div class="video-tag">#Boxing</div>
              </div>
              
              <div class="specific-video-content-horizontal-line"></div>
              
              <p class="specific-video-description">
                In this tutorial, we break down 5 essential striking combinations that every martial artist should master. 
                These combinations work in MMA, boxing, and kickboxing. We'll cover the mechanics of each strike, 
                proper weight transfer, and how to chain them together effectively.
                <br><br>
                Timestamps:
                <br>
                0:45 - Jab-Cross-Hook
                <br>
                2:30 - Lead Hook-Rear Uppercut
                <br>
                4:15 - Teep-Roundhouse
                <br>
                6:00 - Superman Punch Setup
                <br>
                8:20 - Spinning Back Kick
              </p>
            </div>
          </div> 
      </section>`;
    }
  }
);