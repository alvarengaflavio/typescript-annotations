/*
                        Javascript Classes

    Classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow us to create objects with similar properties and methods.

    Classes can be extended to create subclasses. Subclasses can inherit properties and methods from their parent class.

    Classes can also be used to create objects using the new keyword. This is called instantiation.

    Classes are a great way to organize code and create reusable templates for objects.

    Classes are a tool that developers use to quickly produce similar objects.
*/

// Create a class using the class keyword
class Player {
  // constructor is a special method for creating and initializing an object created with a class
  constructor(name, type) {
    this.name = name;
    this.type = type; // "this" refers to the instance of the class
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

// We cam instatiate the Player class using the new keyword
const player1 = new Player("Ramon", "Warrior");
// "Ramon" is the name argument and "Warrior" is the type argument that we pass into the constructor method of the Player class.
player1.introduce(); // Hi I am Ramon, I'm a Warrior

const player2 = new Player("Fafa", "Bard"); // Name: Fafa Type: Bard
player2.introduce(); // Hi I am Fafa, I'm a Bard

/*
            Class Fields

    -   Class fields are a new feature in JavaScript that allow us to add properties directly to the class. This is a great way to add properties to a class that are not shared by all instances of the class.
    -   Class fields are added to the class body, not the constructor method.
*/

class Player {
  // if all players start with the same score and lives, we can add them to the class body
  // this way, we don't have to add them to the constructor method and we can save some space in our code and make it more readable. They don't have the "this" keyword because they are not shared by all instances of the class.
  score = 0;
  lives = 3;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }

  // We can also add methods to the class body
  loseLife() {
    this.lives -= 1;
  }
}

const player3 = new Player("ChikenFace", "Healer");
player3.introduce(); // Hi I am ChikenFace, I'm a Healer
console.log(player3); // Player {name: "ChikenFace", type: "Healer", score: 0, lives: 3}

player3.loseLife(); // ChikenFace lost a life
console.log(player3); // Player {name: "ChikenFace", type: "Healer", score: 0, lives: 2}

/*
            private properties
    
    -   Private properties are a new feature in JavaScript that allow us to create private variables for a class. Private properties begin with a # symbol.
    -   Private properties are not accessible outside of the class.
    -   Private properties are useful for data that is not shared by all instances of the class.
*/

class Player {
  #score = 0; // Private property
  #lives = 3; // Private property
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
  loseLife() {
    this.#lives -= 1;
  }
  getScore() {
    // Getter method
    return this.#score;
  }
  updateScore(score) {
    // Setter method
    this.#score += score;
  }
}

/*
            Getters and Setters

    -   Getters and setters are methods that get and set the properties of an object. They are used to control access to an object.
    -   Getters and setters are useful for performing actions on properties when they are accessed or set.
    -   Getters and setters are defined using the get and set keywords.
*/
