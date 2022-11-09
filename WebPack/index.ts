/*  -------------------------------------------------------------------------------------
                                WebPack with TypeScript
    
    -   This is the entry point for the WebPack build.  It is the first file that is loaded
    by WebPack.  
    -   It is responsible for loading the main application file and any polyfills that 
    are required.
    WebPack\index.ts
    ------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------
                                        WARNING
    This is an entirely optional topic. You don't have to know how to use Webpack to be a 
    TypeScript developer.
    You can use TypeScript in all sorts of situations where you may or may not use Webpack.
    ------------------------------------------------------------------------------------- */

// first we must go to the tsconfig and set the module to "esnext" and the target to "es5", "es6" or "es2015"

// then we must install webpack, webpack-cli, webpack-dev-server, typescript,  ts-loader, html-webpack-plugin, clean-webpack-plugin, webpack-merge, and webpack-bundle-analyzer as dev dependencies (a lot)
// npm install webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin clean-webpack-plugin webpack-merge webpack-bundle-analyzer --save-dev
// install typescript is not necessary because it is already installed, but it is a good practice to install it as a dev dependency

// then we must go to the package.json and add the following scripts:
// "build": "webpack --config webpack.config.js",
// "start": "webpack-dev-server --config webpack.config.js --open",
// "test": "echo \"Error: no test specified\" && exit 1"

// Then we must CREATE a webpack.config.js file in the root directory
// There are a model of this file it in this folder

// run npm run build
// the bundle.js file will be created in the dist folder
// Now we can link the bundle.js file in the index.html file and the application will work as expected!!!!

// run: npm run start to start the webpack-dev-server and see the application running in the browser =)

/* -------------------------------------------------------------------------------------
                                        Adding Sorce Maps

    -   Source maps are a way of mapping the code in the bundle back to the original source
    code.  This is useful for debugging purposes.  If you have a problem in your code, you
    can see the original source code in the browser's debugger.
    ------------------------------------------------------------------------------------- */

// In tsconfig.json we must uncomment the line: "sourceMap": true,
// Also, we must go to the webpack.common.js file and add the following line:
// devtool: 'inline-source-map',

// then we must run npm run build again
// now we can see the original source code in the browser's debugger
// et voilà =)

/* -------------------------------------------------------------------------------------
                                        WebPack Dev Server

    -   The WebPack Dev Server is a development server that provides live reloading.  It
    also provides a web server that hosts the application.
    ------------------------------------------------------------------------------------- */

// In webpack.common.js we must add the following line:
// devServer: {
//     contentBase: './dist'
// },
// we should add add development mode in the webpack.common.js file
// mode: 'development',

// then we must run npm run start
// now we can see the application running in the browser
// et voilà =)