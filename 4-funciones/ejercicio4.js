const borderBox={
    isContentBox:false,
    contentWith:100,
    padding:10,
    border:2
}
const contentBox={
    isContentBox:true,
    contentWith:100,
    padding:10,
    border:2
}
function calculador({isContentBox, contentWith, padding, border}){
    if(isContentBox){
        const withTotal=contentWith+padding+border;
        console.log(withTotal);
    }
    else{
        const withTotal=contentWith;
        console.log(withTotal);
    }
}
calculador(borderBox);
calculador(contentBox)