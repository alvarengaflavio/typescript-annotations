/* ------------------------------------------------------------------------------- 
                                    TypeofGuards    

    -   This file contains a number of functions that can be used to determine the
    type of a variable.  These functions are useful when you need to determine
    the type of a variable at runtime.  For example, you may need to determine
    the type of a variable when you are working with a generic type.  
    -   The functions in this file are not meant to be used as a replacement for
    TypeScript's type system.  They are meant to be used as a last resort when
    you need to determine the type of a variable at runtime.  

    ------------------------------------------------------------------------------- */

function tripleThings(x: number | string): number | string | void {
  if (typeof x === "number") return x * 3; // x has been narrowed to number
  if (typeof x === "string") return x + x + x; // x has been narrowed to string
} // This function will receive a number, string, or boolean and return a number or string. If the type of x is not a number or string, then the function will return void.
// the typeof operator can be used to determine the type of a variable at runtime. The typeof operator returns a string that represents the type of the variable.  For example, the following code will return "number" if the variable x is a number.
const x = 5;
const y = "5";

console.log(tripleThings(x)); // x is a number, so the function will return a number (15)
console.log(tripleThings(y)); // y is a string, so the function will return a string ("555")
