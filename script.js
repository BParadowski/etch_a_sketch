const squareContainer = document.getElementById("squares");
const squareNumbers = document.getElementById("numOfSquares");
squareNumbers.textContent = "16x16";
const button = document.getElementById("newGrid");
const slider = document.getElementById("myRange");
let toggle = 1; // 0 for black, 1 for rainbow, 2 for opacity
drawGrid(16); // Initial grid generation

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
    if (toggle===1){
        squares.forEach(square => square.addEventListener('mouseover', paintTheRainbow));
        console.log("Agabu");
    }
    else{
        squares.forEach(square => square.addEventListener('mouseover', paint));
    }
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

function paintTheRainbow(e){
    this.style["background-color"] = getRandomColor();
}

function getRandomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    console.log(`rgb(${r}, ${g}, ${b})`)
    return `rgb(${r}, ${g}, ${b})`;
}