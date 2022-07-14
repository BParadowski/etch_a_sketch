const squareContainer = document.getElementById("squares");
const squareNumbers = document.getElementById("numOfSquares");
squareNumbers.textContent = "16x16";
const button = document.getElementById("newGrid");
let xbyx = 16;
drawGrid(xbyx);

const squares = document.querySelectorAll('#row div');
squares.forEach(square => square.addEventListener('mouseover', paint));
button.addEventListener('click', backToWhite);

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
    squareNumbers.textContent = `${x}x${x}`;
}

function paint(e){
    this.classList.add("colored");
}

function backToWhite(){
    squares.forEach(square => square.classList.remove("colored"));
}

