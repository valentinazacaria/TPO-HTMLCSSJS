const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const consulta = document.getElementById("consulta")
const enviar = document.getElementById("enviar")

function camposNoVacios() {
    if (nombre.value.lenght != 0 || 
        correo.value.lenght != 0 ||
        consulta.value.lenght != 0) {
        return true
    } else {
        return false
    }
}

// function validarCorreo() {
//     if (correo.value.includes("@") &&
//         correo.value.includes(".com")) {
//         return true
//     } else {
//         return false
//     }
// }

enviar.addEventListener("click", (e) => {
    e.preventDefault()
    if (camposNoVacios() === true) {
        alert("Gracias por contactarnos! ♥")
    } else {
        alert("Complete los campos vacios")
    }
})