// let miFormulario=document.getElementById("formulario");
function validarFormulario() {
    // event.preventDefault();
    miFormulario.reset();
}

// nuevo usuario y contraseña
var newName = document.getElementById("newName");
var newPass = document.getElementById("newPass");

// funcion guardar en local storage
function store(event) {
    event.preventDefault();
    localStorage.setItem("newName", newName.value);
    localStorage.setItem("newPass", newPass.value);
    swal("Te registraste correctamente", "", "success");
}

// confirma si el usuario y contraseña son correctos
function check(event) {
    event.preventDefault();
    var storedName = localStorage.getItem("newName");
    var storedPass = localStorage.getItem("newPass");

// usuario ya creado intenta ingresar
    var userName = document.getElementById("userName");
    var userPass = document.getElementById("userPass");

    // verifica si es valida
    if(userName.value == storedName && userPass.value == storedPass) {
        swal("Ingresaste correctamente", "", "success");
                // alert('Ingresaste correctamente');
    }else {
        swal("Usuario o contraseña icorrecta", "", "error");    }
}

