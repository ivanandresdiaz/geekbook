const button=document.querySelector('#button');
const input=document.getElementById('input');
const julian=document.getElementById('julian');
const duvan=document.getElementById('duvan');
const daniel=document.getElementById('daniel');
var nombreSolicitado;
input.addEventListener('blur',(event)=>{
    nombreSolicitado= event.target.value;
})
button.addEventListener('click',()=>{
    const consulta=nombreSolicitado.charAt(0).toUpperCase() + nombreSolicitado.slice(1);
    debugger
    if(consulta==julian.innerText||consulta==duvan.innerText||consulta==daniel.innerText){
        document.write(`Bienvenido señor ${consulta}`);
    }else{
        document.write(`lo siento, su nombre ${consulta} no aparece en los registros`);
    }
})