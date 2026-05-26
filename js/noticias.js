//CARGAR NOTICIAS EXTERNAS, USAR AJAX Y LEER JSON
fetch("data/noticias.json")

.then(response => response.json())

.then(data => {

    const container = document.getElementById("news-container");

    data.forEach(noticia => {

        container.innerHTML += `

            <div class="news-card">

                <h3>${noticia.titulo}</h3>

                <p>${noticia.texto}</p>

            </div>

        `;
    });

})

.catch(error => {

    console.error("Error cargando noticias:", error);

});
