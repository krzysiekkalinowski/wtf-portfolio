import { hamburgerToggle } from "./hamburger.js";
import { fetchRepositories } from "./github.js";

document.addEventListener('DOMContentLoaded', () => {
    hamburgerToggle();
    fetchRepositories();
});