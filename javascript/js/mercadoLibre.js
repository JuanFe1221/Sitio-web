"Use strict"

class Automovil {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

let auto = new Automovil("Nissan Skyline", "GT-R R34", 120000000);

function validarObjetos() {
    alert(auto.marca + " " + auto.modelo);
}

function mostrarVehiculo(){
    let contenedorPrincipal = document.getElementById("encabezado");
   let divAuto =  document.createElement("div");
   
   
    
}