// Function to update the text of the h1 element
function updateText() {
  const newText = document.getElementById("newText").value;
  document.getElementById("targetElement").innerHTML = newText;
}

// Function to update the style of the h1 element
function updateStyle() {
  const textColor = document.getElementById("textColor").value;
  const fontSize = document.getElementById("fontSize").value;

  // Update the style properties
  const targetElement = document.getElementById("targetElement");
  targetElement.style.color = textColor;
  targetElement.style.fontSize = fontSize + "px";
}
