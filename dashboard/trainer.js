customElements.define(
  "trainer-page",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      }).innerHTML = `
        <slot name="trainer"></slot>`;
    }
    connectedCallback() {
      this.innerHTML = `<!-- trainer -->
      <section slot="trainer">
        <div>
            
        </div>
      </section>
      `;
    }
  }
);