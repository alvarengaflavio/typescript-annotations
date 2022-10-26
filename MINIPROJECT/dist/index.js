"use strict";
const todos = loadTodos(); // array of Todo objects
const btn = document.querySelector("#btn"); // Type: HTMLButtonElement
const btnClear = document.querySelector("#btn-clear"); // Type: HTMLButtonElement
const input = document.querySelector("#todoinput"); // Type: HTMLInputElement
const form = document.querySelector("form"); // Type: HTMLFormElement
const list = document.querySelector("#todolist"); // Type: HTMLUListElement
// <HTML...> this assertion does not work with jsx element, in this case we need to use the "as" keyword to cast the type.
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// }); // no error
// MINI PROJECT TODO LIST
function loadTodos() {
    const todosJson = localStorage.getItem("todos");
    if (todosJson === null)
        return [];
    const todosList = JSON.parse(todosJson);
    return todosList;
}
function renderTodos(todosList) {
    todosList.forEach((todo) => createTodo(todo));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        complete: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.appendChild(newLi);
}
function clearTodos() {
    localStorage.clear();
    list.innerHTML = "";
}
form.addEventListener("submit", handleSubmit); // no error
btnClear.addEventListener("click", clearTodos); // no error
renderTodos(todos);
