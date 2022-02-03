import { STORE_NAME } from '../config.js';
import { Component } from './component.js';

export class AddTask extends Component {
    template;
    tasks;
    constructor(tasks, selector = '#add-task') {
        super();
        this.tasks = tasks;
        this.template = this.generateTemplate();
        this.render(selector);
        this.manageComponent();
    }
    generateTemplate() {
        let template = `
            <form id='add-task-form'>
                <input type="text" id="new-tarea"
                    placeholder="Add tarea" required>
                <button type="submit">Add</button>
            </form>`;
        return template;
    }
    manageComponent() {
        const element = document.querySelector('#add-task-form');
        element.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.tasks.push(element.querySelector('input').value);
            localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks));
            element.querySelector('input').value = '';
            this.template = this.generateTemplate();
            this.render('#tasks');
            location.reload();
        });
    }
}
