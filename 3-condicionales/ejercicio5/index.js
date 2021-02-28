const button=document.querySelector('#button');
const container=document.querySelector('#container');
const h1=document.querySelector('#h1');
const p=document.querySelector('#p');
button.addEventListener('click',()=>cambio.next());
const cambio=cambioNotificacion();
function* cambioNotificacion(){
    container.classList.add('success');
    h1.textContent="success";
    p.textContent="se ha realizado con exito";
    yield;
    container.classList.remove('success');
    container.classList.add('error');
    h1.textContent="error";
    p.textContent="ha ocurrido un Error";
    yield;
    container.classList.remove('error');
    container.classList.add('warning');
    h1.textContent="warning";
    p.textContent="¿esta seguro de seguir con esta operacion'";
    button.setAttribute('disabled','disabled');
    yield;
}