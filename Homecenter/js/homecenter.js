"Use strict"

let botonForm = document.getElementById("botonForm");
let botonCerrar = document.getElementById("botonCerrar");
let popUp = document.getElementById("pop-up");
let lupa = document.getElementById("lupa")
let lupaMenos = document.getElementById("lupaMenos")

/* ANITA */
botonForm.addEventListener("click", mostrarForm);
botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm(){
    popUp.classList.add("transform-visible");
    popUp.classList.remove("trasnform-hide");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
}

function ocultarForm() {
    popUp.classList.remove("transform-visible");
    popUp.classList.add("trasnform-hide");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");
}


/* lupa */

function mostrarHeader2(){
    document.getElementById("header2").classList.remove("header2")
    document.getElementById("header2").classList.add("headerIn")
    
    document.getElementById("header").classList.remove("header")
    document.getElementById("header").classList.add("headerPrincipalIn")
}
lupa.addEventListener("click", mostrarHeader2)

/* lupa menos */

function ocultarHeader2(){
    document.getElementById("header2").classList.add("header2")
    document.getElementById("header2").classList.remove("headerIn")
    
    document.getElementById("header").classList.add("header")
    document.getElementById("header").classList.remove("headerPrincipalIn")
}
lupaMenos.addEventListener("click", ocultarHeader2)

