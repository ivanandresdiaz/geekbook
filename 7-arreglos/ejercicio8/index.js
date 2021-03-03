const container=document.querySelector('#container');
const totalTareas=document.querySelector('#totalTareas');
const small=document.querySelector('#small')
const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
  ];

function tareasInfo(){
  var tareasHechas=0;
  var tareasNoHechas=0;
  for (const item of tasks) {
    if(item.completed){
      tareasHechas=tareasHechas+1;
    }else{
      tareasNoHechas=tareasNoHechas+1
    }
  }
  totalTareas.innerHTML=tareasHechas;
  small.innerHTML=`faltan ${tareasNoHechas} tareas por hacer`;
}
tareasInfo()
for (task=0;task<tasks.length;task++) {
    if(tasks[task].completed){
      const checkBox=document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      checkBox.setAttribute('checked','');
      checkBox.setAttribute('class','checkbox');
      checkBox.setAttribute('id',`checkBox${task}`);
      const createElemento=document.createElement('li');
      createElemento.setAttribute('class','strike');
      createElemento.setAttribute('id',`task${task}`);
      const createText=document.createTextNode(tasks[task].name);
      createElemento.appendChild(createText);
      container.appendChild(createElemento);
      createElemento.appendChild(checkBox);
    }else{
      const checkBox=document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      checkBox.setAttribute('class','checkbox');
      checkBox.setAttribute('id',`checkBox${task}`);
      const createElemento=document.createElement('li');
      createElemento.setAttribute('id',`task${task}`);
      const createText=document.createTextNode(tasks[task].name);
      createElemento.appendChild(createText);
      container.appendChild(createElemento);
      createElemento.appendChild(checkBox);
    }
}
const task0=document.querySelector('#task0');
const task1=document.querySelector('#task1');
const task2=document.querySelector('#task2');
const task3=document.querySelector('#task3');
const checkBox0=document.querySelector('#checkBox0');
const checkBox1=document.querySelector('#checkBox1');
const checkBox2=document.querySelector('#checkBox2');
const checkBox3=document.querySelector('#checkBox3');
checkBox0.addEventListener('change',(event)=>{
  if(checkBox0.checked){
    task0.classList.add('strike');
    tasks[0].completed=true;
  }else{
    task0.classList.remove('strike');
    tasks[0].completed=false;
  }
  tareasInfo()
});
checkBox1.addEventListener('change',(event)=>{
  if(checkBox1.checked){
    task1.classList.add('strike');
    tasks[1].completed=true;
    }else{
      task1.classList.remove('strike');
      tasks[1].completed=false;
    }
    tareasInfo()
});
checkBox2.addEventListener('change',(event)=>{
  if(checkBox2.checked){
    task2.classList.add('strike');
    tasks[2].completed=true;
    }else{
      task2.classList.remove('strike');
      tasks[2].completed=false;
    }
    tareasInfo()
});
checkBox3.addEventListener('change',(event)=>{
  if(checkBox3.checked){
    task3.classList.add('strike');
    tasks[3].completed=true;
    }else{
      task3.classList.remove('strike');
      tasks[3].completed=false;
    }
    tareasInfo()
});