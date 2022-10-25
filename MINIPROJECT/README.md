# MINI PROJECT FOR A SIMPLE TODO LIST

This will allow us to show some functionality of typescript and explain some features in practice.

1- Start a new project: `tsc --init`  
2- Create the project structure: `mkdir src dist` and `touch src/index.ts`
3- In tsconfig.json set the `outdir` to `./dist` and the  
4- At the end of "compilerOptions" set the `"include"` to `["src/**/*"]`  
5- Create `index.html` file and include a script tag with the src = `dist/index.js`  
6- npm init  
7- `tsc --w` and i think we are ready to start.

Typescript and the DOM

```ts
// typescript knows about the document and window object and his types.
const btn = document.querySelector("#btn"); // Type: HTMLButtonElement
console.log(btn);

// we can turn off this feature by adding a comment to the top of the file like this:
// in tsconfig.json file in the "lib" we can set the libraries that will be added to our project. While commented the default value knows about the "dom" library. If we uncomment it, it will not know about the "dom" library and no other library. Only if we add it to the "lib" array.

// btn has the type of Element or null, if we try to add an eventlistener to it, it will give us an error because it can be null. We can fix this by adding a check if it is null or not.
btn?.addEventListener("click", () => {
  alert("clicked");
});

// another way to fix this is to add a type assertion to the btn variable. We can do this by adding an exclamation mark after the variable name.

const btn2 = document.querySelector("#btn")!; // Type: HTMLButtonElement
btn2.addEventListener("click", () => {
  alert("clicked 2");
}); // no error

// we can also add a type assertion to the querySelector method. We can do this by adding a <HTMLButtonElement> before the querySelector method. This is called a type assertion.

const btn3 = <HTMLButtonElement>document.querySelector("#btn"); // Type: HTMLButtonElement

// const btn3 = document.querySelector("#btn") as HTMLButtonElement; // alternative assertion syntax

btn3.addEventListener("click", () => {
  alert("clicked 3");
}); // no error
```
