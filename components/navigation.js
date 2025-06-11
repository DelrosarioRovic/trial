customElements.define(
  "nav-bar",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="navBar"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- Header -->
      <section slot="navBar">
        <header class="header" id="header">
          <!-- Top Nav -->
          <div class="header-container">
            <h2 class="home-title">LEGENDS</h2>
            <img src="./assets/icons/search.png" class="search-icon" alt="">
        </div>
            <nav class="navbar" id="navbar">
            <a class="nav-logo">Logo</a>
            <div class="nav-links" id="navLinks">
                <a class="icon-container nav-link" data-page="home">
                <img class="mobile-icon nav-icon" src="./assets/icons/home.png" alt="home" data-default-src="./assets/icons/home.png" data-active-src="./assets/icons/active-home.png" >
                <span class="desktop-text">Home</span>
                </a>
                <a class="icon-container nav-link" data-page="video">
                <img class="mobile-icon nav-icon" src="./assets/icons/video.png" alt="video" data-default-src="./assets/icons/video.png" data-active-src="./assets/icons/active-video.png">
                <span class="desktop-text">Video</span>
                </a>
                <a class="icon-container nav-link" data-page="trainer">
                <img class="mobile-icon nav-icon" src="./assets/icons/trainer.png" alt="trainer" data-default-src="./assets/icons/trainer.png" data-active-src="./assets/icons/active-trainer.png">
                <span class="desktop-text">Trainer</span>
                </a>
                <a class="icon-profile nav-link" data-page="profile">
                <div>
                    <img class="profile-img" src="./assets/images/16.png" alt="profile">
                </div>
                <span class="active-dot">
                    <img src="./assets/icons/Vector.png" class="active-dot-logo" alt="">
                </span>
                </a>
            </div>
            </nav>
        </header>
      </section>`;
    }
  }
);