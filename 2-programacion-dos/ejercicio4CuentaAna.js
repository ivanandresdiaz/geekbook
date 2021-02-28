const amigosCenaNavidad=['Ana','amigo1','amigo2','amigo3','amigo4','amigo5','amigo6','amigo7','amigo8'];
const cuenta=128;
const descontando2DolaresAna=cuenta-2;
const cuentasPersonales=amigosCenaNavidad.map((amigo)=>{
    const cuentaPersonal=descontando2DolaresAna/9;
    return [amigo,cuentaPersonal];
});
cuentasPersonales[0][1]=cuentasPersonales[0][1]+2;
const cuentaOrdenadaObjeto=Object.fromEntries(cuentasPersonales);
console.log(cuentaOrdenadaObjeto);
