const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const container=document.querySelector('#container')
const button=document.querySelector('#button');
button.addEventListener('click',()=>{
    peliculasDisponibles=[inception,theButterFlyEffect,eternalSunshineOfTheSM,blueVelvet,split];
    for(i=0;i<peliculasDisponibles.length; i++){
        const crearButton=document.createElement('button');
        crearButton.setAttribute('onclick',`mostrarPeliculaEnConsola("${peliculasDisponibles[i]}")`);
        const crearContent=document.createTextNode(peliculasDisponibles[i]);
        crearButton.appendChild(crearContent);
        container.appendChild(crearButton);
    }
});
function mostrarPeliculaEnConsola(peliculaMostrar){
    console.log(peliculaMostrar);
}