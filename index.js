


function drawBoard(size) {
    console.log("board drawn");
    const container = document.createElement("div");
    container.classList="container ";
    //container.style.gridTemplateColumns = `repeat(${size},1fr)`;

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList= "row";
        for (let j = 0; j < size; j++) {
            const column = document.createElement('div');
            column.classList = "column ";
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
}

function solve(){

    const queens = document.getElementById("queens").value;
    drawBoard(queens);

    var board = [];

    for (let i = 0; i < queens; i++) {
        board[i] = [];
        for(let j =0; j < queens; j++) {
            board[i][j] = 0;
        }
    }
    console.log(board);

}

function checkTargets(x,y){

}

