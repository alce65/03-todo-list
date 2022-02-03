import { STORE_NAME } from '../config.js';
import { Component } from './component.js';

export class TodoList extends Component {
    template;
    tasks;
    constructor(tasks) {
        super();
        this.tasks = tasks;
        this.template = this.generateTemplate();
        this.render('#tasks');
        this.manageComponent();
    }
    generateTemplate() {
        let template = `
            <div id="tasks">
                <div id="add-task"></div>
                <h3>
                    Lista de tareas
                </h3>
                <ul>`;
        this.tasks.forEach((item, i) => {
            template += `
                <li>${item}
                    <span role="button" style="cursor:pointer" data-id="${i}">
                    🗑️
                    </span>
                </li>`;
        });
        template += `
                </ul>
            </div>
        `;
        return template;
    }
    manageComponent() {
        const component = document.querySelector('#tasks');
        [...component.querySelectorAll('[role]')].forEach((item) =>
            item.addEventListener('click', (ev) => {
                this.deleteItems(+ev.target.dataset.id);
            })
        );
    }
    deleteItems(id) {
        this.tasks.splice(id, 1);
        // this.tasks.filter(item => item.id !== id)
        localStorage.setItem(STORE_NAME, JSON.stringify(this.tasks));
        location.reload();
    }
}
