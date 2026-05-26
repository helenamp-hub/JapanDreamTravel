// MENÚ ACTIVO AUTOMÁTICO, SE EJECUTA EN TODAS LAS PÁGINAS

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    if(link.href === window.location.href){

        link.classList.add("active");
    }
});
