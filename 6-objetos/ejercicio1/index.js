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
presentacion(geekGirl1);
