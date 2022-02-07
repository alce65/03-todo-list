export class VCard extends HTMLElement {
    heading;
    subheading;
    constructor() {
        super();
        this.heading = '';
        this.subheading = '';
    }
    connectedCallback() {
        this.heading = this.getAttribute('heading');
        this.subheading = this.getAttribute('subheading');
        this.render();
    }

    render() {
        this.innerHTML = `
        <address>
            <h2>${this.heading}</h2>
            <p>${this.subheading}</p>
        </address>
        `;
    }
}

customElements.define('v-card', VCard);
