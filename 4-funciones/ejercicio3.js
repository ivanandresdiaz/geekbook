function generarIva(precioNeto=10){
    console.log(`precio sin Iva es de ${precioNeto}`);
    const Iva=precioNeto*0.21;
    const precioTotal=precioNeto+Iva;
    console.log(precioTotal)
}