// Task 1: Change Text Using JavaScript
const text = document.getElementById("head");
text.innerText = "Welcome To javascript ";
console.log(text);

// Task 2: Change Paragraph Text on Button Click
const para = document.getElementById("para");
const btn = document.getElementById("btn");
btn.onclick = function () {
  para.textContent = "Paragraph Text Changed";
};

// Task 3: Change Background Color on Button Click
const btn1 = document.getElementById("btn1");
btn1.onclick = function () {
  document.body.style.backgroundColor = "lightblue";
};

// Task 4: Show Alert Message on Button Click
const btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  alert("Button Clicked!");
};

// Task 5: Update Text Using Input Field

const input = document.getElementById("input");
const btn3 = document.getElementById("btn3");
const para2 = document.getElementById("para2");

btn3.onclick = function () {
  // Read input value
  let userText = input.value;

  // Display text inside paragraph
  para2.textContent = userText;
};
