import { AddTask } from '../components/add-task.js';
import { TodoList } from '../components/todo-list.js';
import { STORE_NAME } from '../config.js';

const main = function () {
    console.log('Soy TODO');
    const tasks = localStorage.getItem(STORE_NAME)
        ? JSON.parse(localStorage.getItem(STORE_NAME))
        : [];
    new TodoList(tasks);
    new AddTask(tasks);
};

document.addEventListener('DOMContentLoaded', main);
