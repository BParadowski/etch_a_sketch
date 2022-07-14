const squareContainer = document.getElementById("squares");
const squareNumbers = document.getElementById("numOfSquares");
squareNumbers.textContent = "16x16";
const button = document.getElementById("newGrid");
const slider = document.getElementById("myRange");

let xbyx = 16;
drawGrid(xbyx);

slider.oninput = function() {
    squareNumbers.textContent = `${this.value}x${this.value}`;
  }

// squares.forEach(square => square.addEventListener('mouseover', paint));
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
    let squares = document.querySelectorAll('#row div');
    squares.forEach(square => square.addEventListener('mouseover', paint));
}

function paint(e){
    this.classList.add("colored");
}

function backToWhite(){
    let newX = slider.value;
    while (squareContainer.firstChild){
        squareContainer.removeChild(squareContainer.firstChild);
    }
    drawGrid(newX);

}

