const squareContainer = document.getElementById("squares");
const squareNumbers = document.getElementById("numOfSquares");
squareNumbers.textContent = "16x16";
const button = document.getElementById("newGrid");
const slider = document.getElementById("myRange");
let toggle = 1; // 0 for black, 1 for rainbow, 2 for opacity
drawGrid(16); // Initial grid generation
const buttonBlack = document.getElementById("black");
const buttonRainbow = document.getElementById("rainbow");
const buttonOpacity = document.getElementById("opacity");

button.addEventListener('click', backToWhite);
buttonBlack.addEventListener('click', function (e) { 
    toggle = 0; 
    this.classList.add("selected");
    buttonRainbow.classList.remove("selected");
    buttonOpacity.classList.remove("selected")});
buttonRainbow.addEventListener('click', function (e) { 
    toggle = 1; 
    this.classList.add("selected");
    buttonOpacity.classList.remove("selected");
    buttonBlack.classList.remove("selected");})
buttonOpacity.addEventListener('click', function (e) { 
    toggle = 2; 
    this.classList.add("selected");
    buttonBlack.classList.remove("selected");
    buttonRainbow.classList.remove("selected");})

slider.oninput = function() {
    squareNumbers.textContent = `${this.value}x${this.value}`;
  }


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
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove("selected"));

}

function paintTheRainbow(e){
    this.style["background-color"] = getRandomColor();
}

function getRandomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}