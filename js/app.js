import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';
import { Menu } from '../components/menu.js';

(() => {
    const main = () => {
        const options = [
            { path: '/index.html', label: 'Home' },
            { path: '/pages/todo.html', label: 'Todo' },
            { path: '/pages/about.html', label: 'About' },
        ];
        new Header('Lista de tareas').render('#header');
        new Menu(options).render('#menu');
        new Footer('Pepito').render('#footer');
    };

    document.addEventListener('DOMContentLoaded', main);
})();
