import { Component } from './component.js';

export class TodoList extends Component {
    template;
    tasks;
    constructor(tasks) {
        super();
        this.tasks = tasks;
        this.template = this.generateTemplate();
        this.render('#tasks');
        // this.manageComponent();
    }
    generateTemplate() {
        let template = `
            <div id="tasks">
                <div id="add-task"></div>
                <h3>
                    Lista de tareas
                </h3>
                <ul>`;
        this.tasks.forEach((item) => {
            template += `<li>${item}</li>`;
        });
        template += `
                </ul>
            </div>
        `;
        return template;
    }
}
