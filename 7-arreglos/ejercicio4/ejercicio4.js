const button1=document.getElementById("button1");
const containerNextYear=document.querySelector('#containerNextYear');
const h1=document.querySelector('#h1');
var lunaCazadorYear=[];
button1.addEventListener('click',async()=>{
    await whenItIsNext();
    const arrayIncluir= lunaCazadorYear.map((item)=>{
        return `en el año ${item[2]} de ${item[1]} del año ${item[0]} habra luna Cazadora`
    });
    console.log(arrayIncluir)
    arrayIncluir.map((item)=>{
        const createElement=document.createElement('li');
        const createText=document.createTextNode(`${item}`);
        createElement.appendChild(createText);
        containerNextYear.appendChild(createElement);
        return
    })
})
var añosBisiestos=[];
for(i=2016;i<2100;i=i+4){
    añosBisiestos.push(i);
}
function whenItIsNext(){
    var acomuladoDias=5;
    var mes='octubre';
    for(i=2017;i<2060;i=i+3){
        if(añosBisiestos.includes(i)){
            acomuladoDias=acomuladoDias+1
            lunaCazadorYear.push([i,mes,acomuladoDias]);
            
        }else{
            lunaCazadorYear.push([i,mes,acomuladoDias])
        }
    }
}
