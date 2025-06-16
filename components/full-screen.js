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
         </div>
         <div class="fullscreen-video-content">
           <video id="fullscreen-video-id">
             <source src="https://ik.imagekit.io/ldhtvbchc/video/boxing-fullscreen.mp4?updatedAt=1750062019231" type="video/mp4">
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
           <div class="fullscreen-controls-container">
             <span></span>
             <i class="fa-solid fa-play fa-2xl video-icon fullscreen-play-pause-btn"></i>
             <i class="fa-solid fa-volume-high fa-xl"></i>
           </div>
           <div class="fullscreen-description-container">
             <p class="fullscreen-description-text">Improved your striking skills with these effective combinations.</p>
           </div>
         </div>
        </div>
      </section>`;
    }
  }
);