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
        <div class="specific-video-container">
            gg
        </div>
      </section>`;
    }
  }
);