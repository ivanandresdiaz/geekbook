const url= 'http://placehold.it/300x300';
const containerPadre=document.querySelector('.container');
const nuevoContainer=document.createElement('div');
const nuevaImagen=document.createElement('img');
const url2='http://www.fillmurray.com/300/300';
nuevoContainer.appendChild(nuevaImagen);
nuevaImagen.src=url;
containerPadre.appendChild(nuevoContainer);
function cargarImagen(){
    nuevaImagen.src=url2;
}
