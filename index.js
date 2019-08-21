"use strict";


function drawBoard(size) {
    const container = document.createElement("table");
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        row.classList= "row";
        for (let j = 0; j < size; j++) {
            
            const column = document.createElement('td');
            column.classList = "column ";
            column.id = `${i}_${j}`;
            if (i % 2 == j % 2) {
                column.classList += "white";
            } else {
                column.classList += "black";
            }
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    document.body.appendChild(container);

    document.querySelectorAll("td").forEach(item=> item.addEventListener("click", function(e){

        if(item.hasChildNodes()) {
            item.innerHTML = ''
        } else {
            const frame = document.createElement("div");
            frame.classList = "image_container"
            const image = document.createElement("img");
            image.src="queen.png";
            frame.appendChild(image);
            item.appendChild(frame);
        }
    }));
}

function generate(){

    const queens = document.getElementById("queens").value;
    drawBoard(queens);
    solve(queens);
}

function solve(size) {

    var board = [];

    for(let i = 0; i < size; i++){
        board[i] = [];
        for(let j =0; j< size; j++){
            board[i][j] = 0;
        }
    }
}


