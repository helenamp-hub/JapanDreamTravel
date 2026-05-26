// GALERÍA SIMPLE

// =========================
// ELEMENTOS
// =========================

const galleryImages = document.querySelectorAll(".gallery img");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.getElementById("close-btn");


// =========================
// ABRIR MODAL
// =========================

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;
    });
});


// =========================
// CERRAR MODAL
// =========================

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
});


// =========================
// CERRAR HACIENDO CLICK FUERA
// =========================

modal.addEventListener("click", event => {

    if(event.target === modal){

        modal.style.display = "none";
    }
});
