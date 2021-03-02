const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const peliculasDisponibles=[inception,theButterFlyEffect,eternalSunshineOfTheSM,blueVelvet,split];
const ul=document.querySelector('#ul')
const button=document.querySelector('#button');
button.addEventListener('click',()=>{
    for(i=0;i<peliculasDisponibles.length; i++){
        const crearButton=document.createElement('button');
        crearButton.setAttribute('onclick',`mostrarPeliculaEnConsola("${peliculasDisponibles[i]}")`);
        const crearContent=document.createTextNode(peliculasDisponibles[i]);
        crearButton.appendChild(crearContent);
        ul.appendChild(crearButton);
    }
});
function mostrarPeliculaEnConsola(peliculaMostrar){
    console.log(peliculaMostrar);
}