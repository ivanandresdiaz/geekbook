const geekGirl1={
    nombre:'susana',
    edad:34,
    profesion:'periodista'
}
const geekGirl2={
    nombre:'rocio',
    edad:25,
    profesion:'actriz'
}
function presentacion(persona){
    document.write(`mi Nombre es ${persona.nombre}, tengo ${persona.edad} y soy ${persona.profesion}`);
}
function Run(){
    console.log(`estoy corriendo`)
}
Run.prototype.runAMarathon=function(distance=50){
    console.log(`estoy corriendo una maraton de ${distance} kilometros`);
}
Run.prototype.showBio=function(persona=geekGirl1){
    console.log(`mi nombre es ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.profesion}`);
}
Run.prototype.showBio(geekGirl1);
Run.prototype.showBio(geekGirl2);