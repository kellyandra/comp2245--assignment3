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
    let ns =document.getElementsByClassName("square");//new squaress ☺

    for(let l=0; l<ns.length; l++){
        ns[l].addEventListener("click",function(){ //adds X and 0 on click

            if(ns[l].innerHTML==""){
                if(cx=="X"){
                    ns[l].innerHTML="X";
                    ns[l].classList.add("X"); 
                    if(row(ns)||col(ns)||dia(ns)){
                        winstats.innerHTML=`Congrats ${cx} won`;
                        winstats.className("you-won");
                    }
                    cx="O";

                } else {
                    ns[l].innerHTML="O";
                    ns[l].classList.add("O");  
                    if(row(ns)||col(ns)||dia(ns)){
                        winstats.innerHTML=`Congrats ${cx} won`;
                        winstats.className("you-won");
                    }
                    cx="X";
                }
            }
        })


        ns[l].addEventListener("mouseover", function(){ //Pink hover 
            ns[l].classList.add("hover");
        })
        ns[l].addEventListener("mouseout", function(){
            ns[l].classList.remove("hover");
        }
       
        )
    }

    //NEW GAME   //DOES NOT WORK
    let button =document.getElementsByClassName("btn");
    button[0].addEventListener("click",function(){
    for (let n=0;n>sq.length;n++){
        winstats="Move your mouse over a square and click to play an X or an O.";
        winstats=classList.remove("you-won");
        sq[n].innerHTML="";
        sq[n].className = "square";
        }})


    let winstats = document.getElementById("status");
   
    function row(sq){ //checks the rows
        if(sq[0].innerHTML != ""){
            if(sq[0].innerHTML==sq[1].innerHTML && sq[0].innerHTML==ssq[2].innerHTML)
            return true;
        }
        if(sq[3].innerHTML != ""){
            if(sq[3].innerHTML==sq[4].innerHTML && sq[3].innerHTML==sq[5].innerHTML)
            return true;
        }
        if(sq[6].innerHTML != ""){
            if(sq[6].innerHTML==sq[7].innerHTML && sq[6].innerHTML==sq[8].innerHTML)
            return true;
        }

    }

    function col(ns){//checks the columns
        if(sq[0].innerHTML != ""){
            if(sq[0].innerHTML==sq[3].innerHTML && sq[0].innerHTML==sq[6].innerHTML)
            return true;
        }
        if(sq[1].innerHTML != ""){
            if(sq[1].innerHTML==sq[4].innerHTML && sq[1].innerHTML==sq[7].innerHTML)
            return true;
        }
        if(sq[2].innerHTML != ""){
            if(sq[2].innerHTML == sq[5].innerHTML && sq[2].innerHTML == sq[8].innerHTML)
            return true;
        }

    }

    function dia(sq){//checks the diagonal
        if(sq[0].innerHTML != ""){
            if(sq[0].innerHTML == sq[4].innerHTML && sq[0].innerHTML == sq[8].innerHTML)
            return true;
        }
        if(sq[2].innerHTML != ""){
            if(sq[2].innerHTML == sq[4].innerHTML && sq[2].innerHTML == sq[6].innerHTML)
            return true;
        }
      

    }
       
        


})

/*function row(sq){ //checks the rows  ISSUE IS THAT IT DECLARES WIN AFTER IT FINDS 2 OF EITHER X OR 0
if(sq[0].innerHTML != ""){
    if(sq[0].innerHTML==(sq[1].innerHTML && sq[2].innerHTML))
    return true;
}
if(sq[3].innerHTML != ""){
    if(sq[3].innerHTML==(sq[4].innerHTML && sq[5].innerHTML))
    return true;
}
if(sq[6].innerHTML != ""){
    if(sq[6].innerHTML==(sq[7].innerHTML && sq[8].innerHTML))
    return true;
}

}

function col(ns){//checks the columns
if(sq[0].innerHTML != ""){
    if(sq[0].innerHTML==(sq[3].innerHTML && sq[6].innerHTML))
    return true;
}
if(sq[1].innerHTML != ""){
    if(sq[1].innerHTML==(sq[4].innerHTML && sq[7].innerHTML))
    return true;
}
if(sq[2].innerHTML != ""){
    if(sq[2].innerHTML==(sq[5].innerHTML && sq[8].innerHTML))
    return true;
}

}

function dia(sq){//checks the diagonal
if(sq[0].innerHTML != ""){
    if(sq[0].innerHTML==(sq[4].innerHTML && sq[8].innerHTML))
    return true;
}
if(sq[2].innerHTML != ""){
    if(sq[2].innerHTML==(sq[4].innerHTML && sq[6].innerHTML))
    return true;
}


}
*/