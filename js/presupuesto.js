let producto = document.getElementById("producto");
let plazo = document.getElementById("plazo");
let extras = document.querySelectorAll(".extra");
let resultado = document.getElementById("presupuestoFinal");

function calcularPresupuesto(){

    let total = parseInt(producto.value);

    extras.forEach(extra => {

        if(extra.checked){
            total += parseInt(extra.value);
        }

    });

    let dias = parseInt(plazo.value);

    if(dias >= 15){
        total = total * 0.9;
    }

    resultado.value = total.toFixed(2) + " €";
}

producto.addEventListener("change", calcularPresupuesto);
plazo.addEventListener("input", calcularPresupuesto);

extras.forEach(extra => {
    extra.addEventListener("change", calcularPresupuesto);
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let condiciones = document.getElementById("condiciones").checked;

    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/;
    let regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/;
    let regexTelefono = /^\d{9}$/;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        !regexNombre.test(nombre) ||
        !regexApellidos.test(apellidos) ||
        !regexTelefono.test(telefono) ||
        !regexEmail.test(email) ||
        !condiciones
    ){

        event.preventDefault();

        alert("Revisa todos los campos del formulario");
    }

});
