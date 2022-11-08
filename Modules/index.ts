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
/*
    For example: In a html file the DOM don't know about import, export, require... this things exists in the NODE world. 
    With these different ecosystems, the browser JavaScript vs Node.js, we have different ways to import and export modules.
    In the browser, we can not use the import keyword. Working only with scripts, adding the script tag in the html file in the correct order. 
    in this case <script src="utils.js"></script> follow by <script src="index.js"></script> but this defeats the hole point of this section. 

    So, what we want to do is tell the TypeScript compiler to compile our code to a format that the browser can understand. PLEASE USE THIS IMPORT SYNTAX ES6 MODULES.
    So, we need to change the compilerOptions in tsconfig.json file to: "module": "ES6" and "target": "es6"  
    We must especify in the html file the type="module" in the script tag. <script src="index.js" type="module"></script>  

*/

/*
    ES6 Modules Syntax:
    -   import { add, sample } from "./utils";
    -   export function add(a: number, b: number) {
    -       return a + b;
    -   }
    -   export function sample<T>(arr: T[]) {
    -       return arr[Math.floor(Math.random() * arr.length)];
    -   }

    CommonJS and Node.js Syntax:
    -   const { add, sample } = require("./utils");
    -   module.exports = {
    -       add,
    -       sample,
    -   };

    AMD Syntax:
    -   define(["./utils"], function (utils) {
    -       console.log(utils.add(1, 2));
    -       console.log(utils.sample([1, 2, 3, 4, 5]));
    -   });

    UMD Syntax:
    -   (function (root, factory) {
    -       if (typeof define === "function" && define.amd) {
    -           define(["./utils"], factory);
    -       } else if (typeof module === "object" && module.exports) {
    -           module.exports = factory(require("./utils"));
    -       } else {
    -           root.returnExports = factory(root.utils);
    -       }
    -   })(this, function (utils) {
    -       console.log(utils.add(1, 2));
    -       console.log(utils.sample([1, 2, 3, 4, 5]));
    -   });

    SystemJS Syntax:
    -   System.import("./utils").then(function (utils) {
    -       console.log(utils.add(1, 2));
    -       console.log(utils.sample([1, 2, 3, 4, 5]));
    -   });

    TypeScript Syntax:
    -   import { add, sample } from "./utils";
    -   export function add(a: number, b: number) {
    -       return a + b;
    -   }
    -   export function sample<T>(arr: T[]) {
    -       return arr[Math.floor(Math.random() * arr.length)];
    -   }

        We can set a default export for a module.
        -   export default function add(a: number, b: number) {
        -       return a + b;
        -   }
        -   import add from "./utils";
        -   console.log(add(1, 2));

        We can also export a module as a namespace.
        -   export namespace utils {
        -       export function add(a: number, b: number) {
        -           return a + b;
        -       }
        -       export function sample<T>(arr: T[]) {
        -           return arr[Math.floor(Math.random() * arr.length)];
        -       }
        -   }
        -   import { utils } from "./utils";
        -   console.log(utils.add(1, 2));
        -   console.log(utils.sample([1, 2, 3, 4, 5]));

*/

/* -------------------------------------------------------------------------------------
                                    Importing Types

    -   We can also import types from other modules.
    -   We can import types from other modules and use them in our code.
    ------------------------------------------------------------------------------------- */

// We created the types.ts file and write two simple types there. The first type Person takes a name and age and returns a string. The second type Sample takes an array of any type and returns a random element from that array.
// let's create the types.ts file and write the types there.
// Now we can import the types in the types.ts file and use them in our code.
import type { Person, Color } from "./types"; // We can use the type keyword to import only the types. We can not use the type keyword to import the functions.

const person: Person = {
  name: "John",
  email: "email@email.com",
};

const color: Color = "red";

console.log(person, color); // { name: 'John', email: 'email@email.com' } 'red'
// Everything works fine.
