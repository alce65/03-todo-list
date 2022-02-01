import { Component } from './component.js';

export class Footer extends Component {
    template;
    constructor(author = 'Alejandro Cerezo') {
        super();
        this.template = `
            <footer>
                <address>${author}</address>
            </footer>
        `;
    }
}

// document.querySelector()
// document.querySelectorAll()
// document.addEventListener()
// document.innerHTML
// document.outerHTML
// document.classList
// document.value
