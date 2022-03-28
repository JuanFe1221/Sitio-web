"use strict"

class Automovil{
    constructor(marca, modelo, precio, imagen){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Mazda ", "RX-8 ", "$55.000.000 ", "img/1280px-Mazda_RX8.jpg")

let auto2 = new Automovil ("Mazda ", "3 ", "$8.000.000 ", "img/2009-Mazda-RX-8-1024x732.jpg")

let auto3 = new Automovil ("Mazda ", "CX-3", "$80.000.000 ", "img/mazda cx3.png")

function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

//Segunda busqueda

let yamaha = new Automovil ("Yamaha ", "Xtz 250", "$20.000.000", "img/xtz-250.jpg");

let yamaha2 = new Automovil ("Yamaha ", "MT-09 ", "$85.000.000", "img/mt-09.jpg");

let yamaha3 = new Automovil ("Yamaha ", "Rx 112 ", "$12.000.000", "img/rx.jpg");

function mostrarYamaha () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", yamaha.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(yamaha.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(yamaha.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(yamaha.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
    
    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", yamaha2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(yamaha2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(yamaha2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(yamaha2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto 

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", yamaha3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(yamaha3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(yamaha3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(yamaha3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automóviles disponibles") {
            mostrarVehiculo(auto, auto2, auto3);
            mostrarToyota(toyota, toyota2, toyota3);
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
        else if (busqueda == "Mazda") {
            mostrarVehiculo(auto, auto2, auto3);
        }
        else if (busqueda == "Yamaha") {
            mostrarYamaha(yamaha, yamaha2, yamaha3);}

        else {
            alert("No se han encontrado resultados que coincidan con la busqueda");
        } 
    }
})

function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}