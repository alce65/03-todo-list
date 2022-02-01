import { TodoList } from '../components/todo-list.js';

const main = function () {
    console.log('Soy TODO');
    new TodoList();
};

document.addEventListener('DOMContentLoaded', main);
