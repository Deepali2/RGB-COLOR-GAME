let numSquares = 6;
let easyNumSquares = 3;
let veryHardNumSquares = 9;
let master = 12;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

//init() runs as soon as the page loads
init();

resetButton.addEventListener("click", function() {  
  reset();
})

function init() {
  setupModeButtons();
  setupSquares();  
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() { 
      for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }       
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = easyNumSquares
        : this.textContent === "Very Hard" ? numSquares = veryHardNumSquares
        : this.textContent === "Master" ? numSquares = master
        : numSquares = 6;
      reset();    
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {  
    squares[i].addEventListener("click", function() {    
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {      
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "PLAY AGAIN";
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) { 
    squares[i].style.display = "block"; 
    if (colors[i]) squares[i].style.backgroundColor = colors[i];
    else squares[i].style.display = "none";
  }
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = '';
  h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor() {
  let number = Math.floor(Math.random() * colors.length);  
  return colors[number];
}

function rgbColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}

function random() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(rgbColor());
  }
  return arr;
}


