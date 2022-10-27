/*  -----------------------------------------------------------------------------------------------------
                                           TypeScript Classes

    -   Classes in TypeScript are similar to classes in other languages like Java or C#.
    -   TypeScript supports new features in JavaScript, like support for class-based object-oriented 
        programming.
    -   Classes in TypeScript support inheritance, constructors, getters/setters, and static members.
    -   Classes are in fact "special functions", and just as you can define functions, you can also define 
        classes.
    -   Classes are a way to create objects with pre-defined properties and methods.
    -   Classes encapsulate data with code to work on that data.
    -   Classes are a way to define a custom type.

    ----------------------------------------------------------------------------------------------------- */

// 1. Creating a Class
// 1.1. Creating a Class with a Constructor
// 1.2. Creating a Class with Properties
// 1.3. Creating a Class with Methods
// 1.4. Creating a Class with Access
// 1.5. Creating a Class with Inheritance
// 1.6. Creating a Class with Static
// 1.7. Creating a Class with Abstract
// 1.8. Creating a Class with Interface
// 1.9. Creating a Class with Generics
// 1.10. Creating a Class with Constructor

class Player {
  //1.2 On top of the class we can define properties class sets of properties that we want to be available on the class
  name: string;
  type: string; // player class
  level: number;

  constructor(name: string, type: string, level: number) {
    //1.1 we can define a constructor function that will be called when we create a new instance of the class
    this.name = name;
    this.type = type;
    this.level = level;
  }

  //1.3 we can define methods on the class
  logDetails(): void {
    console.log(
      `Player ${this.name} is a ${this.type} and is level ${this.level}`
    );
  }
}

const player1 = new Player("ChickenFace", "Warrior", 1); //1.10 we can pass arguments to the constructor function
player1.logDetails(); // Player ChickenFace is a Warrior and is level 1
