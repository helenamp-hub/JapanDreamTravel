// ELEMENTOS

const producto = document.getElementById("producto");

const plazo = document.getElementById("plazo");

const extras = document.querySelectorAll(".extra");

const total = document.getElementById("total");


// =========================
// CALCULAR PRESUPUESTO
// =========================

function calcularPresupuesto(){

    // PRECIO BASE

    let precioBase = parseInt(producto.value);

    // EXTRAS

    let extrasTotal = 0;

    extras.forEach(extra => {

        if(extra.checked){

            extrasTotal += parseInt(extra.value);
        }
    });

    // TOTAL TEMPORAL

    let presupuestoFinal = precioBase + extrasTotal;

    // DESCUENTO POR PLAZO

    let dias = parseInt(plazo.value);

    if(dias >= 15){

        presupuestoFinal *= 0.90;
    }

    // MOSTRAR RESULTADO

    total.textContent = presupuestoFinal + " €";
}


// =========================
// EVENTOS
// =========================

producto.addEventListener("change", calcularPresupuesto);

plazo.addEventListener("input", calcularPresupuesto);

extras.forEach(extra => {

    extra.addEventListener("change", calcularPresupuesto);
});


// =========================
// INICIAR
// =========================

calcularPresupuesto();
