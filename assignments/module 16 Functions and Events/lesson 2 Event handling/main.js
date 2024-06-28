// TASK 1

// select the button
const ColorButton = document.getElementById("colorButton");

//Attach an onclick event listener to the button
ColorButton.addEventListener("click", () => {
  const randomColor = `rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
  document.body.style.backgroundColor = randomColor;
});
// generate random value for red , green and blue. Am using 256 because the rgb values run from 2-255

function getRandomValue() {
  return Math.floor(Math.random() * 256);
}

// Task 2
// selecting the paragraph element
const text = document.getElementById("text");

// attaching the event listener - onMouseOver
text.addEventListener("mouseover", () => {
  // changing the color of my paragraph and increase the size when I hover
  text.style.color = "yellow";
  text.style.fontSize = "30px";
});
// adding onMouseOut event listener
text.addEventListener("mouseout", () => {
  text.style.color = "black";
  text.style.fontSize = "18px";
});

// Task 3
// create a function that starts the clock and update it every second
function startClock() {
  // function updating the clock
  function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = `${date} ${time}`;
  }
  //  call the function immediately once the page loads
  updateClock();
  //  refresh the time after every 1 second
  setInterval(updateClock, 1000);
}
document.getElementById("email").addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Display an alert message
  alert("Form submission intercepted.");
});
