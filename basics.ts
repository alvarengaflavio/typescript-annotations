let pi: number = 3.14159;
console.log("Hello World Of TypeScript!");
console.log(Math.round(4.7)); // 5
console.log("Goodbye World Of TypeScript!");
console.log(Math.round(pi)); // 3
/* 
    "tsc basics.ts" will compile the file and create a "basics.js" file. 
    You can run the file using "node basics.js" command.
    Alternatively, you can use "node-ts basics.ts" command to compile and run the file.
    Adicionally, you can use "tsc -w basics.ts" to watch the file and compile it automatically.
    "tsc basics.ts --watch" works as well.

    "tsc -init" will create a "tsconfig.json" file. This file contains the configuration for the TypeScript compiler.
*/
