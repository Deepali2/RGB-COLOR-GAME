let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {  
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (let i = 0; i < squares.length; i++) {  
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  //reset the text of the button to new colors
  resetButton.textContent = "New Colors";
  //reset the text of the message display to empty
  messageDisplay.textContent = '';
  //reset the background color of the h1 to the original color
  h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {  
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {    
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    //compare color to pickedColor
    if (clickedColor === pickedColor) {      
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "PLAY AGAIN?";
      changeColors(pickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
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


