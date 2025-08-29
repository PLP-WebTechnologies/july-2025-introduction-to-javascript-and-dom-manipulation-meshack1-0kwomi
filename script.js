//Part 1: Mastering JavaScript Basics :Demonstrating variables, data types, operators, and conditionals.One is prompted to enter an age that will print a message/
let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
  document.getElementById("eligibility").textContent = "Happy Coding!!";
} else {
  document.getElementById("eligibility").textContent = "You are not an adult";
}

// Part 2: A code that take inputs, process them, and return or display results.In the example this will give the product of 150 & 3/
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(150, 3);
  document.getElementById("total").textContent = "Total Price of your weekly spending is= $" + total;
}
//Part 3 :This iterates through the numbers and gives the countdown
function startCountdown() {
  let count = 5; // starting number
  let output = "";

  while (count > 0) {
    output += count + " ";
    count--;
  }

  document.getElementById("countdown").textContent = "Countdown: " + output;
}
//this code generates a list of fruits on your webpage
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitList = document.getElementById("fruit-list");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  fruitList.appendChild(li);
}
  

// Part 4: DOM Manipulation

// Change background color
document.getElementById("changeColour").addEventListener("click", function () {
  document.body.style.backgroundColor = "Pink"; 
});

// Toggle ALL CAPS
document.getElementById("Text").addEventListener("click", function () {
  let domArea = document.getElementById("dom-area");
  domArea.style.textTransform = 
    domArea.style.textTransform === "uppercase" ? "none" : "uppercase";
});

// Create new element
document.getElementById("addElement").addEventListener("click", function () {
  let newPara = document.createElement("p");
  newPara.textContent = "A new element has been added!";
  document.getElementById("dom-area").appendChild(newPara);
});