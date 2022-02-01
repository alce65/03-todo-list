import { Component } from './component.js';

export class Header extends Component {
    template;
    constructor(title = 'Todo List') {
        super();
        this.template = `
            <header>
                <h1>${title}</h1>
                <div id="menu"></div>
            </header>
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
