const numbers=[10,20,30,40,50];
var acomulado=0;
var media;
function sacaLaMedia (){
    for(i=0;numbers.length>i;i++){
    acomulado=acomulado+numbers[i];
    }
    media=acomulado/numbers.length;
    console.log(media);
}
