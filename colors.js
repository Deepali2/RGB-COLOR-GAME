let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

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


