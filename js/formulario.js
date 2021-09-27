//VERIFICACION DE INICIO DE SESION
const linksNoVisibles = document.querySelectorAll(".NoVisible")
const linksVisibles = document.querySelectorAll(".Visible")

const verificacionInicio = user => {
    if(user){
        linksVisibles.forEach(link => link.style.display = "block");
        linksNoVisibles.forEach(link => link.style.display = "none");
    }else{
        linksVisibles.forEach(link => link.style.display = "none");
        linksNoVisibles.forEach(link => link.style.display = "block");
    }
}

//EVENTO INGRESAR
const form =  document.querySelector("#formulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#inputEmail").value;
        const contra = document.querySelector("#inputPassword").value;

        //firebase--metodo para crear usuario
        auth
        .signInWithEmailAndPassword(email, contra)
        .then(userCredential => {
            //limpiar formulario
            form.reset();
            //cerrar modal
            $("#modalIngreso").modal('hide');
            console.log("Ingreso Correctamente")
            console.log("registrado")
        })
});

//EVENTO REGISTRO
document.querySelector("#formularioRegistro");
modalRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.querySelector("#inputEmailRegistro").value;
    const contra = document.querySelector("#inputPasswordRegistro").value;

    auth
        .createUserWithEmailAndPassword(email, contra)
        .then(userCredential => {
            //limpiar formulario
            form.reset();
            //cerrar modal
            $("#modalRegistro").modal('hide');
            console.log("Ingreso Correctamente")
        })
})

//EVENTO CERRAR SESION
const cerrarSesion = document.querySelector("#cerrarSesion");
    cerrarSesion.addEventListener("click", (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log("cerraste sesion")
        })

});

//Coleccion de Datos
auth.onAuthStateChanged(user => {
    if(user){
        fs.collection("box")
        .get()
        .then((snapshot) => {
            console.log("Usuario Registrado")
            verificacionInicio(user)
        })
    }else{
        console.log("Usuario no Registrado")
        verificacionInicio(user);
    }
});

//INGRESAR CON GOOGLE
const botonGoogle = document.querySelector("#google")
botonGoogle.addEventListener("click", e =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(resultado => {
        //limpiar formulario
        form.reset();

        //cerrar modal
        $("#modalIngreso").modal('hide');

    })
    .catch(error =>{
        console.log(error)
    })
})

//INGRESAR CON FACEBOOK
const botonFacebook = document.querySelector("#facebook")
    botonFacebook.addEventListener("click", e =>{
        e.preventDefault();
        const provider= new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
        .then(resultado =>{
            console.log(resultado)
            console.log("facebook sign in")
        })
        .catch(error => {
            console.log(error)
        })
    })  

