function calcularPrecioConDescuento(precio, descuento){
    const porcentajeconPrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeconPrecioDescuento) / 100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    let Cupon = document.getElementById("InputCupon");
    let CuponDescuento = Cupon.value;
   
    const InputDescuento = document.getElementById("InputDescuento");
    const DescuentoTotal = InputDescuento.value;
    //Price.innerText = "El precio con descuento es de: $" + precioConDescuento;
    
    if(CuponDescuento === "David_15"){

        dicountValue = 15;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;

    }
    else if(CuponDescuento === "Perra_en_calor_30"){
        
        dicountValue = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;
    }

    else if(CuponDescuento === "Yunicua_25"){
        
        dicountValue = 25;
        precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio con descuento es de: $" + precioConDescuento;
    }

    else if (CuponDescuento != "") {
        alert ("Cupon no valido, intente de nuevo");
    }

}


/*
const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
//Imprimiendo valor del precio
const Price = document.getElementById("ResultPrice");
Price.innerText = "El precio con descuento es de: " + precioConDescuento; 
*/