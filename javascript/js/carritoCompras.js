"Use strict"
 
    let costo_producto = 110000

function aumentarCantProducto (){

    aumentarCantProductoInput()
    costoProducto()

    let cantidad_producto = document.getElementById("can_Productos").innerHTML;
    let cantidad_productoInt = parseInt(cantidad_producto);

    if ( cantidad_producto <10) {
        document.getElementById("can_Productos").innerHTML= cantidad_productoInt + 1
    }
        
}

function aumentarCantProductoInput (){

    let cantidad_producto1 = document.getElementById("cantidad_producto").value;
    let cantidad_productoInt2 = parseInt(cantidad_producto1);
    
    if ( cantidad_producto1 <10) {
        document.getElementById("cantidad_producto").value = cantidad_productoInt2 + 1
    }
            
}

function costoProducto (){ 
    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let subtotal = costo_producto * Number(cantidad_producto);
    document.getElementById("costo_producto").innerHTML = subtotal
}

 



function disminuirCantProducto (){

    disminuirCantProductoInput()
    costoProducto()

    let cantidad_producto = document.getElementById("can_Productos").innerHTML;
    let cantidad_productoInt = parseInt(cantidad_producto);
     
    if (cantidad_producto > 0){
        document.getElementById("can_Productos").innerHTML = cantidad_productoInt - 1 
    }
}

function disminuirCantProductoInput (){

    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let cantidad_productoInt = parseInt(cantidad_producto);
     
    if (cantidad_producto > 0){
        document.getElementById("cantidad_producto").value = cantidad_productoInt - 1 
    }
}