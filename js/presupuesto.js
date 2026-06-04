// ELEMENTOS

const producto = document.getElementById("producto");

const plazo = document.getElementById("plazo");

const extras = document.querySelectorAll(".extra");

const total = document.getElementById("total");

function calcularPresupuesto(){

    let precioBase = parseInt(producto.value);

    let extrasTotal = 0;

    extras.forEach(extra => {

        if(extra.checked){

            extrasTotal += parseInt(extra.value);
        }
    });


    let presupuestoFinal = precioBase + extrasTotal;

    let dias = parseInt(plazo.value);

    if(dias >= 15){

        presupuestoFinal *= 0.90;
    }

    total.textContent = presupuestoFinal + " €";
    }

    producto.addEventListener("change", calcularPresupuesto);

    plazo.addEventListener("input", calcularPresupuesto);

    extras.forEach(extra => {

        extra.addEventListener("change", calcularPresupuesto);
    });


calcularPresupuesto();

const form = document.getElementById("budget-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre");

    const apellidos = document.getElementById("apellidos");

    const telefono = document.getElementById("telefono");

    const email = document.getElementById("email");

    const condiciones = document.getElementById("condiciones");

    let valido = true;

    limpiarErrores();

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,15}$/;

    const regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{1,40}$/;

    const regexTelefono = /^[0-9]{9}$/;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexNombre.test(nombre.value)){

        mostrarError(
            nombre,
            "error-nombre",
            "Nombre inválido"
        );

        valido = false;
    }


    if(!regexApellidos.test(apellidos.value)){

        mostrarError(
            apellidos,
            "error-apellidos",
            "Apellidos inválidos"
        );

        valido = false;
    }

    if(!regexTelefono.test(telefono.value)){

        mostrarError(
            telefono,
            "error-telefono",
            "Teléfono inválido"
        );

        valido = false;
    }

    if(!regexEmail.test(email.value)){

        mostrarError(
            email,
            "error-email",
            "Correo inválido"
        );

        valido = false;
    }

    if(!condiciones.checked){

        document.getElementById("error-condiciones").textContent =
            "Debes aceptar las condiciones";

        valido = false;
    }

    if(valido){

        alert("Formulario enviado correctamente");
        
        form.reset();

        calcularPresupuesto();
    }

});

function mostrarError(input, errorId, mensaje){

    input.classList.add("input-error");

    document.getElementById(errorId).textContent = mensaje;
}


function limpiarErrores(){

    const errores = document.querySelectorAll(".error");

    errores.forEach(error => {

        error.textContent = "";
    });

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        input.classList.remove("input-error");
    });
}
