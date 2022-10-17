document.addEventListener("DOMContentLoaded",function(){
    let gboard =document.getElementById("board");
    let sq = gboard.childNodes;
    console.log(sq);

    for(let k=0;k<sq.length;k++){
        console.log(sq[k].nodeType);

        if(sq[k].nodeType==1){
            sq[k].className= "square";
        }
    }
})