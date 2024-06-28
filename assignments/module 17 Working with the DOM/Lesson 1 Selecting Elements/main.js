// Function to display text content of my selected element
function displayTextContent() {
  // getElementbyId to get the unique ID of the element
  const headerElement = document.getElementById("header");
  alert(`Text context of header element: ${headerElement.textContent}`);

  // Get element class using querySelector
  const contentElement = document.querySelector(".content");
  alert(`Text content of content element: ${contentElement.textContent}`);

  // get unique Id of another element using getElementById
  const uniqueParagraphElement = document.getElementById("uniqueParagraph");
  alert(
    `Text content of unique paragraph element: ${uniqueParagraphElement.textContent}`
  );
}
// Display TextContent when click event is called
document
  .getElementById("displayButton")
  .addEventListener("click", displayTextContent);
