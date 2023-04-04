import { createContainer } from './components/container.js';

import './style.css';

const appDiv = document.getElementById('app');

localStorage.setItem("myCat", "Tom");
const container = createContainer();

appDiv.appendChild(container);
