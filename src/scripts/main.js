import { hamburgerToggle } from "./hamburger.js";
import { fetchRepositories } from "./github.js";
import { demoIcon } from '../img/demo-icon.svg'

document.addEventListener('DOMContentLoaded', () => {
    fetchRepositories();
    hamburgerToggle();
});





