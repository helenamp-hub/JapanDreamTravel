fetch("data/noticias.json")

.then(response => response.json())

.then(data => {

    let contenedor = document.getElementById("contenedorNoticias");

    data.forEach(noticia => {

        contenedor.innerHTML += `

            <article>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.texto}</p>
            </article>

        `;

    });

})

.catch(error => console.log(error));
