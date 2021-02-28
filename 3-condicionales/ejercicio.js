function proximoAñobisiesto(añoActual=2021){
    const añoDivido= Math.floor(añoActual/4);
    const siguienteAño= (añoDivido+1)*4;
    const cuantosFalta= 4-(añoActual % 4);
    console.log(siguienteAño);
    cuantosFalta===4?console.log(`este año ${añoActual} es bisiesto, sin embargo, faltan ${cuantosFalta} años para el siguiente año viciesto`):console.log(`faltan ${cuantosFalta} años para el siguiente año viciesto`);
}