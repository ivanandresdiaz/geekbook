const peliculas=['Gato con Botas','Matrix','Dark'];
peliculas.push('interestelar');
console.log(peliculas);
peliculas[2]='Game of Thrones';
console.log(peliculas);
peliculas[3]='cenicienta';
console.log(peliculas);
(function workWithMovies(){
    console.log(peliculas)
})();