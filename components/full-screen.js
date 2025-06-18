customElements.define(
  "fullscreen-video",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="fullscreenVideo"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- fullscreen video -->
      <section slot="fullscreenVideo">
        <div class="fullscreen-video-container">
         <div class="fullscreen-video-header-container">
           <i class="fas fa-arrow-left fa-2xl fullscreen-video-back-btn" id="fullscreen-video-back-btn" style="color: #ffffff"></i>
           <i class="fa-solid fa-volume-high fa-xl" id="fullscreen-volume-btn"></i>
         </div>
         <div class="fullscreen-play-pause-btn-frame">
          <i class="fa-solid fa-pause fa-2xl video-icon fullscreen-play-pause-btn"></i>
         </div>
         <div class="fullscreen-video-content">
           <video playsinline autoplay id="fullscreen-video-id">
             <source src="${videoState.url}" type="video/mp4">
             Your browser does not support the video tag.
           </video>
         </div>
         <div class="fullscreen-bottom-container">
           <h2 class="fullscreen-video-title">Striking Combinations</h2>
           <p class="fullscreen-video-uname">Michael Chang</p>
           <div class="fullscreen-progress-container">
             <div class="fullscreen-progress-bar" id="fullscreen-progress-bar">
               <div class="fullscreen-progress-thumb" id="fullscreen-progress-thumb"></div>
             </div>
             <div class="fullscreen-time-container">
               <p id="fullscreen-start-time"></p>
               <p id="fullscreen-end-time"></p>
             </div>
           </div>
         </div>
        </div>
      </section>`;
    }
  }
);