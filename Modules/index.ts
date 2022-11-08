/* ------------------------------------------------------------------------------------- 
                                    Modules    

    -   Very boring, but very important!
    -   Modules are the building blocks of any application. 
    -   Modules are the logical units of code that are used to organize the code.
    -   Modules are the way to organize the code in a logical way.
    ------------------------------------------------------------------------------------- */

// Typescript Namespaces was the way to organize the code in a logical way. But now is not recommended to use namespaces. Know that namespaces exists, but don't use it. Only in legacy code.

// We created the utils.ts file and write two simple functions there. The first function add() takes two numbers and returns the sum of them. The second function sample() takes an array of any type and returns a random element from that array.
// How can we import these functions in this index.ts file?
// What typescript considers a module? A module is a file that contains code. So, the utils.ts file is a module.
// The file should have an export keyword in front of the function. The export keyword is used to export the function from the module. So, the utils.ts file is a module and the add() and sample() functions are exported from the module.
// We can use the import keyword to import the functions from the utils.ts file.
import { add, sample } from "./utils";

console.log(add(1, 2)); // 3
console.log(sample([1, 2, 3, 4, 5])); // 3 or 4 or 5...

// Change compilerOptions in tsconfig.json file to: "module": "commonjs" and "target": "es6"
