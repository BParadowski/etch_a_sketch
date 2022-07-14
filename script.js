const square = document.createElement('div');
const squareContainer = document.getElementById("squares");
let xbyx = 4;

function drawGrid(x){
    let j = 0;
    let square;
    let i =0;
    while (j < x){
    square = document.createElement('div');
    square.setAttribute('id','row')
    i = 0;
    while (i <x){
        square.appendChild(document.createElement('div'));
        i++;
    }
    squareContainer.appendChild(square);
    j++;
    }
}
drawGrid(xbyx);