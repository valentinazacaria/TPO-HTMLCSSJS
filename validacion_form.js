const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const consulta = document.getElementById("consulta")
const enviar = document.getElementById("enviar")

//Función que valida que los campos de los inputs no estén vacios
function camposNoVacios() {
    if (nombre.value != "" ||
        correo.value != "" ||
        consulta.value != "") {
        return true
    } else {
        return false
    }
}

//Función que valida el campo de correo electrónico
function validarCorreo() {
    if (correo.value.includes("@") &&
        correo.value.includes(".com")) {
        return true
    } else {
        return false
    }
}

enviar.addEventListener("click", (e) => {
    e.preventDefault()
    if (validarCorreo() === true &&
        camposNoVacios() === true) {
        alert("Gracias por contactarnos! ♥")
    } else {
        alert("Correo electrónico con formato incorrecto o hay campos vacios")
    }
})