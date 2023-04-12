///////////////////////////////
// MODEL SECTION

// If localstorage has a todos array, then use it
// Otherwise use the default array.

let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos"));

// Check if it is an array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    { title: "Wash the car", dueDate: "01/01/2023", id: "id1" },
    { title: "Cook dinner", dueDate: "02/03/2022", id: "id2" },
    { title: "Go for a walk", dueDate: "12/05/2022", id: "id3" },
    { title: "Watch a movie", dueDate: "06/03/2022", id: "id4" },
  ];
}

// Create a TODO
function createTodo(title, dueDate) {
  const id = "" + new Date().getTime();
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });
  saveTodos();
}

// Delete a TODO

function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

////////////////////////////////////////////
// CONTROLLER SECTION

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

//////////////////////////////////////
// VIEW SECTION
function render() {
  // reset the list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    element.innerText = todo.title + "   " + todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style =
      "margin: .5rem 0 0.5rem 1rem; padding: 3px 1.6rem; color: red;  font-family: 'Merienda', cursive, sans-serif; font-size: 1.8rem; border-radius:30000px";
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
}
render();
