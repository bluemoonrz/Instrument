const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav--bar");

hamburger.addEventListener("click", () => {
    const visible = hamburger.getAttribute("data-visible");

    if (visible === "false") {
        hamburger.setAttribute("data-visible", true);

        navbar.setAttribute("aria-expanded", true);
    }
    else {
        hamburger.setAttribute("data-visible", false);

        navbar.setAttribute("aria-expanded", false);
    }
});