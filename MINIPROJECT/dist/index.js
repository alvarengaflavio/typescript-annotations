"use strict";
// read the README for learn about typescript and the DOM types.
const btn = document.querySelector("#btn"); // Type: HTMLButtonElement
const input = document.querySelector("#todoinput"); // Type: HTMLInputElement
// <HTML...> this assertion does not work with jsx element, in this case we need to use the "as" keyword to cast the type.
btn.addEventListener("click", () => {
    alert(input.value);
    input.value = "";
}); // no error
