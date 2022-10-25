"use strict";
const norma = {
    name: "Norma",
    breed: "Rhode Island Red",
    eggsPerWeek: 5,
    age: 2,
};
// Now run the command "tsc index.ts" in the terminal to compile the code.
// The command will create a new file called "index.js" in this folder with specific configurations.
// Now, in the terminal, run the following command:
// tsc -w or tsc --watch this is an option that tells the compiler to watch for changes in the files and compile them automatically.
// For the -p option, you can specify the path to the tsconfig.json file. If you don't specify the path, the compiler will look for a tsconfig.json file in the current folder.
// If you want to compile all the files in the project, you can run the following command:
// "tsc -w -p ." or "tsc --watch --project ." this will compile all the files in the project.
// "tsc -w -p" Configuration or "tsc --watch --project" Configuration this will compile all the files specifically in the Configuration folder.
// "tsc" this will compile all the files in the folder.
// "tsc -w" also watch all the files.
/*  ------------------------------------------------------------------------------------------------
                        includes and excludes files from the compilation
    ------------------------------------------------------------------------------------------------ */
// In the tsconfig.json file, you can specify which files to include and exclude from the compilation.
// To do this, you need to add the following properties:
// "include": ["src/**/*"], this will include all the files in the src folder and all the subfolders.
// "exclude": ["node_modules"], this will exclude the node_modules folder from the compilation.
// check the tsconfig.json file in this folder to see the configuration. There i added the "include" and "exclude" properties.
/*  ------------------------------------------------------------------------------------------------
                        Out Dir and Root Dir, outdir and rootdir
    ------------------------------------------------------------------------------------------------ */
// The "outDir" property specifies the output folder for the compiled files.
// The "rootDir" property specifies the root folder for the source files.
// check the tsconfig.json file in this folder to see the configuration. There i added the "outDir" and "rootDir" properties.
