const kiwi={
    precio:5,
    kg:2
}
const peras={
    precio:2,
    kg:4
}
const uvas={
    precio:4,
    kg:0.5
}
const listaMercado = [kiwi,peras,uvas];
const totalMercado = listaMercado.map((item)=>{
    return item.kg*item.precio;
})
const cantidadProductos =totalMercado.length;
const precioTotal = totalMercado.reduce((acomulado, add)=> acomulado+ add , 0);
console.log(`el precio total de su mercado es de ${precioTotal} y su cantidad de productos se de ${cantidadProductos}`);