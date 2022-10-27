"use strict";
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
    constructor(name, type, level) {
        this.score = 0; // the score is inferred to be a number and is already set to 0 (i explicit set to :number to be more explicit)
        //1.1 we can define a constructor function that will be called when we create a new instance of the class
        this.name = name;
        this.type = type;
        this.level = level;
    }
    //1.3 we can define methods on the class
    logDetails() {
        console.log(`Player ${this.name} is a ${this.type} and is level ${this.level}`);
    }
}
const player1 = new Player("ChickenFace", "Warrior", 1); //1.10 we can pass arguments to the constructor function
player1.logDetails(); // Player ChickenFace is a Warrior and is level 1
// In typescript we can define a property to be readonly. This property can only be set once and cannot be changed later on.
class Player2 {
    constructor(name, type, level) {
        this.score = 0;
        this.name = name;
        this.type = type;
        this.level = level;
    }
    logDetails() {
        console.log(`Player ${this.name} is a ${this.type} and is level ${this.level}`);
    }
}
const player2 = new Player2("ChickenFace", "Warrior", 1);
player2.logDetails(); // Player ChickenFace is a Warrior and is level 1
// player2.name = "DuckFace"; // error: Cannot assign to 'name' because it is a read-only property.
/*  -----------------------------------------------------------------------------------------------------
                                    Public and Private

    -   By default, all members of a class are public.
    -   We can also mark a member of a class as private.
    -   Private members are only visible to other members of the same class.
    -   A public member can be accessed from anywhere, including from outside of the class.
    -   A private member can only be accessed by other members of the same class.
    -   Private members are often used to hide the implementation details of a class.

    ----------------------------------------------------------------------------------------------------- */
class Player3 {
    constructor(name, type, level) {
        this.score = 0;
        this.name = name;
        this.type = type;
        this.level = level;
    }
    logDetails() {
        console.log(`Player ${this.name} is a ${this.type} and is level ${this.level}`);
    }
}
const player3 = new Player3("ChickenFace", "Warrior", 1);
player3.logDetails(); // Player ChickenFace is a Warrior and is level 1
// player3.type = "Mage"; // error: Property 'type' is private and only accessible within class 'Player3'.
