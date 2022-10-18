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
    let cx ="X";//CHEMICAL X POWER PUFF REFERENCE
    let ns =document.getElementsByClassName("square");

    for(let l=0; l<ns.length; l++){
        ns[l].addEventListener("click",function(){
            if(ns[l].innerHTML==""){
                if(cx=="X"){
                    ns[l].innerHTML="X";
                    ns[l].classList.add("X");
                    cx="O";
                } else {
                    ns[l].innerHTML="O";
                    ns[l].classList.add("O");
                    cx="X";
                }
            }
        })
    }

 
    
})

