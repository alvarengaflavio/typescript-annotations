/*  Function Parameters 
    You can also assign a type to a function parameter.
    This is called a parameter annotation.
*/
function myFunction(parameter: string) {
  return parameter;
}

function squareOf(n: number) {
  return n * n;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return `Hello ${person}, you are ${age} years old and ${
    isFunny ? "funny" : "not funny"
  }`;
};

myFunction("Hello Nurse!"); // OK
squareOf(3); // 9
doSomething("ChikenFace", 76, false);

// To assign a default value to a parameter, you can use the = operator after the parameter type.
function greet(person: string = "stranger") {
  return `Hello there, ${person}`;
}

greet(); // Hello there, stranger
greet("ChikenFace"); // Hello there, ChikenFace

/*  
    You can also assign a type to a function return value.
    This is called a return type annotation.
    This is declared after the function parameters and before the function body. 
    TypeScript will infer the return type if you don't specify it.
*/
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

addNumbers(1, 2); // 3

/*  A function can return multiple types using the | operator. 
    This is called a union type. A union type can be inferred by TypeScript. 
*/
function rando(num: number): string | number {
  if (Math.random() > 0.5) {
    return num.toString();
  }
  return num;
}

/*  Anonymous Functions
    You can also assign a type to an anonymous function.
    This is called a function type annotation.
*/
const colors = ["red", "green", "blue"];
const upperColors = colors.map((color: string) => color.toUpperCase());
console.table(upperColors);

const myAnonymousFunction: (parameter: string) => string = (parameter) => {
  return parameter;
};

/* The Void Type
    The void type is used when a function does not return a value.
*/
function sayHello(): void {
  console.log("Hello");
}

/* The Never Type
    The never type is used when a function will never return a value.
    This is useful for functions that throw errors or infinite loops.
*/
function error(message: string): never {
  throw new Error(message);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP INFINITE");
  }
}

/*  Function Overloads 
    You can define multiple function signatures for the same function. 
*/
