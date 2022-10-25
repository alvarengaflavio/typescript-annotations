/*
    READ THIS BEFORE YOU START
    ==========================

    Before you start, in your root folder run the following command:
    tsc --init

    This will create a tsconfig.json file in your root folder. This file is used to configure the application. It is not recommended to edit this file directly.
    I'll create another config file in this folder, so i can configure the application without affecting the root config file. So, change the folder to "Configuration" and run the command again:
    tsc --init

    In the tsconfig.json file, change the following properties:
    - "target": "es6"
    - "module": "commonjs"
    - "outDir": "./dist"
    - "rootDir": "./src"
    - "strict": true
    - "esModuleInterop": true

    And a lot of comments, this is optional configuration that are currently inactivated. You can activate them if you want. I'll explain them later.

    Now go to "src/index.ts" and follow the rest of the annotations. =)
*/
