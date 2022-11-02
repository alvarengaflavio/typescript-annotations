/* ------------------------------------------------------------------------------------- 
                                    TypeofGuards    

    -   This file contains a number of functions that can be used to determine the
    type of a variable.  These functions are useful when you need to determine
    the type of a variable at runtime.  For example, you may need to determine
    the type of a variable when you are working with a generic type.  
    -   The functions in this file are not meant to be used as a replacement for
    TypeScript's type system.  They are meant to be used as a last resort when
    you need to determine the type of a variable at runtime.  

    ------------------------------------------------------------------------------------- */

function tripleThings(x: number | string): number | string | void {
  if (typeof x === "number") return x * 3; // x has been narrowed to number
  if (typeof x === "string") return x + x + x; // x has been narrowed to string
} // This function will receive a number, string, or boolean and return a number or string.
// If the type of x is not a number or string, then the function will return void.
// The typeof operator can be used to determine the type of a variable at runtime.
// The typeof operator returns a string that represents the type of the variable.
// For example, the following code will return "number" if the variable x is a number.
const x = 5;
const y = "5";

console.log(tripleThings(x)); // x is a number, so the function will return a number (15)
console.log(tripleThings(y)); // y is a string, so the function will return a string ("555")

/* -------------------------------------------------------------------------------------
                                    Truthiness Guards

    -   Truthiness Type Guards involve checking a value for being truthy or falsy before 
    narrowing the type of a variable.  This is useful when you need to avoid erros when 
    values might be null or undefined.
    -   We do this all the time with vanilla JavaScript. But here we are just showing how
    to do it with TypeScript.

  -------------------------------------------------------------------------------------- */

// for exempla in a html document get by id, the type can be HTMLElement or null
// so we can use the truthiness guard to check if the element is null or not
const element = document.getElementById("myElement");
if (element) {
  // element is not null
  element.innerHTML = "Hello World"; // thats it. Here is HTMLElement
  // This is the truthiness guard to check if a value is null or undefined.
} else {
  // element is null and TypeScript knows it
  console.log(element, "is null"); // element is null
}

// ANOTHER EXAMPLE
const printLetters = (word?: string) => {
  // word?: string == word: string | undefined
  if (word) {
    // word is not undefined in this scope
    for (let letter of word) {
      console.log(letter);
    }
  } else {
    // word is undefined or a "false string" in this scope
    console.log("You did not pass in a word");
  }
}; // This function will print each letter of a string to the console.

printLetters("Hello"); // This will print each letter of the string "Hello" to the console.
printLetters(); // This will print "You did not pass in a word" to the console.

/* -------------------------------------------------------------------------------------
                                    Equality Narrowing

    -   Equality Narrowing involves comparing types to each other before doing certain
    oparations with values.
    -   By checking two values against each other, we can be sure they're both the same
    before working with them in a type-specific way.
  -------------------------------------------------------------------------------------- */

// Equality Narrowing
function narrowingTwoTypes(x: string | number, y: string | boolean) {
  if (x === y) {
    // using equality comparison to narrow types
    // x and y are the same type, both strings
    x.toUpperCase(); // OK
    y.toUpperCase(); // OK
  } else {
    // x and y are different types
    // x.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
    console.log(x, y);
  }
}
