customElements.define(
  "header-initial",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="headerInitial"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- Header -->
      <section slot="headerInitial">
          <div class="initial-header-container">
            <h2 class="home-title">LEGENDS</h2>
            <img src="./assets/icons/search.png" class="search-icon" alt="">
          </div>
      </section>`;
    }
  }
);