const input=document.getElementById('input');
const h1=document.querySelector('#h1');
input.addEventListener('change',(event)=>{
    const moodToday=event.target.value;
    h1.innerHTML=moodToday;
})