const input=document.getElementById('input');
const button=document.querySelector('#button');
var nombre;
input.addEventListener('blur',(event)=>{
    nombre=event.target.value;
});
button.addEventListener('click',()=>{
    document.write(`Bienvenido ${nombre}`);
})