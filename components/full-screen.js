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
        <div class="full-screen-container">
            gg
        </div>
      </section>`;
    }
  }
);