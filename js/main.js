// MENÚ ACTIVO AUTOMÁTICO, SE EJECUTA EN TODAS LAS PÁGINAS

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if(linkPage === currentPage){

        link.classList.add("active");
    }
});


// =========================
// SCROLL SUAVE
// =========================

document.documentElement.style.scrollBehavior = "smooth";
