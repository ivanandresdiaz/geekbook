const container=document.querySelector('#container');
document.addEventListener('keydown',(event)=>{
    console.log(event.keyCode);
    if(event.keyCode===77){
        container.classList.remove('red');
        container.classList.remove('white');
        container.classList.add('purple');
    }else if(event.keyCode===82){
        container.classList.add('red');
        container.classList.remove('white');
        container.classList.remove('purple');
    }else if(event.keyCode===66){
        container.classList.remove('red');
        container.classList.add('white');
        container.classList.remove('purple');
    }
    console.log(event);
})