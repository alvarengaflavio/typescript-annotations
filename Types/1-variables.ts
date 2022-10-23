/*  
    VARIABLES
    Assigning a basic type to a variable is easy - just add :Type after the variable name!
    Also called a type annotation, this tells TypeScript what type of data the variable will hold.
*/

// primitive types
const myAwsomeVariable: string = "Hello World"; // string
const myNumber: number = 1; // number
const myBoolean: boolean = true; // boolean

/* Type Inference */
let tvShow = "The Office"; // tvShow is inferred to be a string
// tvShow = 42; // Error: Type 'number' is not assignable to type 'string'

/* ANY */
// If you don't know the type of a variable, you can use the any type.
let myVariable: any = "Hello World";
myVariable = 42; // No error
// myVariable = myFunction("Hello World");
myVariable();
myVariable.toUpperCase(); // No error

// Exemple when a type declaration necessary
const movies = ["The Godfather", "The Shawshank Redemption", "The Dark Knight"];
let foundMovie: string; // foundMovie don't have initial value, so we need to assign a type

for (let movie of movies) {
  if (movie === "The Dark Knight") {
    foundMovie = movie;
  }
}

// More examples
const myArray: number[] = [1, 2, 3]; // number[]
const myArray2: Array<number> = [1, 2, 3]; // Array<number>
const myObject: { [key: string]: number } = { a: 1, b: 2, c: 3 }; // { [key: string]: number }
