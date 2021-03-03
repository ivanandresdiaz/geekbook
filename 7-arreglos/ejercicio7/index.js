const maria=['maria',29,'diseñadora'];
const lucia=['lucia',31, 'ingeniera Quimica'];
const susana=['susana',34,'periodista'];
const rocio=['rocio', 25,'actriz'];
const inmaculada=['inmaculada',21,'diseñadora'];
const chicasGeek=[maria,lucia,susana,rocio,inmaculada];

function countGeekGirls(){
    console.log(`la cantidad de chicas Geek son de ${chicasGeek.length}`);
}
function averageAge(){
    const ages=chicasGeek.map((item)=>{
        return item[1];
    });
    const sumaEdades= ages.reduce((acomulador, elemento)=>{
        acomulador+elemento}, 0);
    const promedioEdad=sumaEdades/chicasGeek.length;
    console.log(`el promedio de edad es de ${promedioEdad}`)
}
function theYoungest(){
    var menor=chicasGeek[0];
    for (const item of chicasGeek) {
        if(menor[1]>item[1]){
            menor=item
        }
    }
    console.log(`la geekGirl mas joven es ${menor[0]}, ella es ${menor[2]} y tiene ${menor[1]}`);
}