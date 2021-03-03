const libro=document.getElementById('libro');
const cancion=document.getElementById('cancion');
const pelicula=document.getElementById('pelicula');
const deporte=document.getElementById('deporte');
const button=document.getElementById('button');
const container=document.querySelector('#container');
var favoritos=[]
libro.addEventListener('blur',(event)=>{
    favoritos.push(event.target.value);
});
cancion.addEventListener('blur',(event)=>{
    favoritos.push(event.target.value);
});
pelicula.addEventListener('blur',(event)=>{
    favoritos.push(event.target.value);
});
deporte.addEventListener('blur',(event)=>{
    favoritos.push(event.target.value);
});
button.addEventListener('click',()=>{
    for (const item of favoritos) {
        const createElement=document.createElement('li');
        const createText=document.createTextNode(`¡A mí también me encantó ${item}! Tenemos mucho en común, humano.`);
        createElement.appendChild(createText);
        container.appendChild(createElement);
    }
})