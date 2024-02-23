export const hamburgerToggle = () => {
    const hamburgerTrigger = document.querySelector(".hamburger--js");
    const hamburgerMenu = document.querySelector(".menu--js");
    hamburgerTrigger.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("hidden");
    });
}