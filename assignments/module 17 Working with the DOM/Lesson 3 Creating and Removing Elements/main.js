//function that adds the new items to the list

function addTodo() {
  const todoText = document.getElementById("newTodo").value;
  // prompt the user to add new item
  if (todoText === "") {
    alert("Please enter the New Item .");
    return;
  }

  const todoList = document.getElementById("todoList");
  const listItem = document.createElement("li");

  //  create a text node for the item on the list

  const textNode = document.createTextNode(todoText);
  listItem.appendChild(textNode);

  // create a button to remove the item
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.onclick = () => {
    todoList.removeChild(listItem);
  };
  listItem.appendChild(removeButton);

  // append the list item to the to do list
  todoList.appendChild(listItem);

  document.getElementById("newTodo").value = "";
}
