const input=document.getElementById('input');
const add=document.querySelector('#add');
const restar=document.querySelector('#restar');
const update=document.querySelector('#update');
const h1=document.querySelector('#h1');
var inicioContador=0;
var counter;
counter=makeCounter(inicioContador)
input.addEventListener('blur',(event)=>{
    inicioContador=parseInt(event.target.value);
    counter=makeCounter(inicioContador)
    counter.getCount();
})
function makeCounter(n){
    let count=n;
    return{
        increase:function(){
            count=count+1;
            console.log(count);
        },
        decrease:function(){
            count=count-1;
            console.log(count);
        },
        getCount:function(){
            h1.innerHTML=count;
            console.log(count);
        }
    }
}
add.addEventListener('click',()=>{
    counter.increase();
});
restar.addEventListener('click',()=>{
    counter.decrease();
})
update.addEventListener('click',()=>{
    counter.getCount()
})
