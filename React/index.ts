/*  -------------------------------------------------------------------------------------
                                REACT AND TYPESCRIPT

    -   React is a JavaScript library for building user interfaces.  It is maintained by
    Facebook and a community of individual developers and companies.
    -   React is used to build single page applications.  It is the V in the MVC pattern.
    -   React is a library, not a framework.  It is not opinionated about how you should
    structure your code.  It is not opinionated about which libraries you should use for
    routing, state management, etc. It is not opinionated about which build tool you
    should use.
    -   React is a library for building user interfaces.  It is not a complete application
    framework.  It is not a complete solution for building a single page application.
    -   React is a library for building user interfaces.  It is not a complete application
    framework.  It is not a complete solution for building a single page application.
    React\index.ts
    ------------------------------------------------------------------------------------- */

// You could use React without TypeScript, and it is recommended.
// One way to use React with TypeScript is to use the create-react-app tool.  This tool
// creates a React application with TypeScript support.  It also creates a development
// server and a production build.
//
// To start new Create React App project, we must run the following command:
// npx create-react-app my-app --template typescript
//
// Then we must go to the react-typescript folder and run the application:
// npm start

// We can also create a React App in Vite. Vite is a build tool for modern web projects.
// It is a build tool for modern web projects.  It is a build tool for modern web projects.
// To start new Vite project, we must run the following command:
// npm init @vitejs/app react-typescript --template react-ts

// Then we must go to the react-typescript folder and run the application:
// npm run dev

// Now we can see the application running in the browser =)

/*  -------------------------------------------------------------------------------------
                                REACT COMPONENTS IN TYPESCRIPT

    -   A React component is a function or a class that accepts input and returns a React
    element.
    ------------------------------------------------------------------------------------- */

// Now we will create a new component and after import him in the App.tsx file.  We will
// create a new component called "HelloWorld".  This component will receive a name property
// and will return a React element.

/*  -------------------------------------------------------------------------------------
                                            HelloWorld.tsx 
    ------------------------------------------------------------------------------------- 

    import React from 'react';

    const HelloWorld = (props: { name: string }) => {
        return <div>Hello {props.name}</div>;
    };

    export default HelloWorld;

    --------------------------------------------------------------------------------------    */

// Now we will use this component in the App.tsx file.  We will use the HelloWorld component
// in the App function.

/*  -------------------------------------------------------------------------------------
                                            App.tsx 
    -------------------------------------------------------------------------------------

    import React from 'react';
    import HelloWorld from './HelloWorld';

    const App = () => {
        return <HelloWorld name="React" />;
    };

    export default App;

    --------------------------------------------------------------------------------------    */

// Good nonofficial documentation about React and TypeScript:
// https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

/*  -------------------------------------------------------------------------------------


