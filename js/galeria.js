// GALERÍA SIMPLE

const galleryImages = document.querySelectorAll(".gallery img");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.getElementById("close-btn");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
});

modal.addEventListener("click", event => {

    if(event.target === modal){

        modal.style.display = "none";
    }
});
