const li1=document.querySelector('.teacher--isra');
const li2= document.querySelector('.teacher--tuerto');
const li3=document.querySelector('.teacher--nasi');
const teachers=document.querySelector('.teachers');
const favorite=document.querySelectorAll('.favorite');
teachers.addEventListener('click',()=>{
    if(favorite[0].innerText=="Añadir"){
        for(i=0;i<favorite.length;i++){
            favorite[i].innerHTML="Quitar";
        }
        
    }else{
        for(i=0;i<favorite.length;i++){
            favorite[i].innerHTML="Añadir";
        }
    }
})
li1.addEventListener('click',()=>{
    li1.classList.toggle('.teacher--selected')
})
li2.addEventListener('click',()=>{
    li2.classList.toggle('.teacher--selected')
})
li3.addEventListener('click',()=>{
    li3.classList.toggle('.teacher--selected')
});