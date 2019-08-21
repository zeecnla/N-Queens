
"use strict";

function getThreatenMoves(x, y, board, size) {

    const threaten = [];
    //GET HORIZONTAL AND VERTICAL MOVES  
    for(let i=0; i < size;i++){
        threaten.push([x, i]);
        threaten.push([i, y]);
    }
    //BOTTOM UP DIAGONAL 
    
    while (x > 0 && y < size) {
        threaten.push([x--,y++]);
    }
    console.log(threaten);


    return threaten;
}