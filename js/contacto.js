// MAPA
// =========================
// CREAR MAPA
// =========================

// COORDENADAS EMPRESA

const empresa = [35.6895, 139.6917];

// CREAR MAPA

const map = L.map('map').setView(empresa, 10);


// =========================
// CAPA OPENSTREETMAP
// =========================

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap'

}).addTo(map);


// =========================
// MARCADOR EMPRESA
// =========================

L.marker(empresa)

.addTo(map)

.bindPopup("Japan Dream Travel")

.openPopup();


// =========================
// GEOLOCALIZACIÓN CLIENTE
// =========================

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position => {

        const cliente = [

            position.coords.latitude,

            position.coords.longitude
        ];

        // MARCADOR CLIENTE

        L.marker(cliente)

        .addTo(map)

        .bindPopup("Tu ubicación");


        // LÍNEA ENTRE CLIENTE Y EMPRESA

        L.polyline(

            [cliente, empresa],

            {
                color: '#4F8CB4'
            }

        ).addTo(map);

    });

}
