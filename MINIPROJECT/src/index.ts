// read the README for learn about typescript and the DOM types.

const btn = <HTMLButtonElement>document.querySelector("#btn"); // Type: HTMLButtonElement
const input = document.querySelector("#todoinput") as HTMLInputElement; // Type: HTMLInputElement
const form = document.querySelector("form")!; // Type: HTMLFormElement

// <HTML...> this assertion does not work with jsx element, in this case we need to use the "as" keyword to cast the type.

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// }); // no error

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
