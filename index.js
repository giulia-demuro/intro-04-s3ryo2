import { createContainer } from './components/container.js';

import './style.css';

const appDiv = document.getElementById('app');

const container = createContainer();

appDiv.appendChild(container);
