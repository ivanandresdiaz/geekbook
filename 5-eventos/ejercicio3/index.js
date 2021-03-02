const container=document.querySelector('#container');
const nuevoParrafo=()=>{
    console.log('funciona');
    const nuevoParrafo=document.createElement('p');
    const contenido=document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sunt, tenetur ab quibusdam dolorum adipisci alias delectus optio rem ducimus perspiciatis dolor ut, pariatur asperiores, expedita esse harum aspernatur mollitia');
    container.appendChild(nuevoParrafo);
    nuevoParrafo.appendChild(contenido);
};
container.addEventListener('mouseenter',nuevoParrafo);
