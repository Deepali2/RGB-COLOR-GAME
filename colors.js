let numSquares = 6;
let easyNumSquares = 3;


let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

//code for when the easy level is chosen
easyBtn.addEventListener("click", function() {  
  numSquares = easyNumSquares;
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);  
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    //populate the top three squares with the three colors
    if(colors[i]) squares[i].style.backgroundColor = colors[i];
    else squares[i].style.display = "none";
  }
  messageDisplay.textContent = '';
});

// code for when the hard level is chosen
hardBtn.addEventListener("click", function() {
  numSquares = 6;
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {   
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  } 
  messageDisplay.textContent = '';
});

//reset button
resetButton.addEventListener("click", function() {  
  //generate all new colors  
  colors = generateRandomColors(numSquares);
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
  h1.style.backgroundColor = "steelblue";
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
      resetButton.textContent = "PLAY AGAIN";
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


