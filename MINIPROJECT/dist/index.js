"use strict";
// read the README for learn about typescript and the DOM types.
const btn = document.querySelector("#btn"); // Type: HTMLButtonElement
const input = document.querySelector("#todoinput"); // Type: HTMLInputElement
const form = document.querySelector("form"); // Type: HTMLFormElement
const list = document.querySelector("#todolist"); // Type: HTMLUListElement
// <HTML...> this assertion does not work with jsx element, in this case we need to use the "as" keyword to cast the type.
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// }); // no error
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodo);
    newLi.append(checkbox);
    list.appendChild(newLi);
    input.value = "";
}
form.addEventListener("submit", handleSubmit); // no error
