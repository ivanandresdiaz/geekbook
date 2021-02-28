const input=document.getElementById('input');
const button=document.querySelector('button');
var edadPerro;
var edadHumano;
input.addEventListener('blur',(event)=>{
    edadPerro=event.target.value;
});
button.addEventListener('click',()=>{
    if(edadPerro==1){
        edadHumano=15;
        console.log(`la edad del perrro convertidad a edad humana es de ${edadHumano}`);
    }else if (edadPerro==2) {
        edadHumano=24;
    } else {
        const nuevaEdad=edadPerro-2;
        edadHumano=(nuevaEdad*5)+24;
    }
    document.write(`la edad humano es de ${edadHumano}`);
})