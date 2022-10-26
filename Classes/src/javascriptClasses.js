/*  -----------------------------------------------------------------------------------------------------
                                        Javascript Classes

    -   Classes are templates for creating objects in JavaScript. They contain a few different important 
        pieces which allow us to create objects with similar properties and methods.
    -   Classes can be extended to create subclasses. Subclasses can inherit properties and methods from 
        their parent class.
    -   Classes can also be used to create objects using the new keyword. This is called instantiation.
    -   Classes are a great way to organize code and create reusable templates for objects.
    -   Classes are a tool that developers use to quickly produce similar objects.

    ----------------------------------------------------------------------------------------------------- */

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

/*  -----------------------------------------------------------------------------------------------------
                                        Class Fields

    -   Class fields are a new feature in JavaScript that allow us to add properties directly to the class. 
    -   This is a great way to add properties to a class that are not shared by all instances of the class.
    -   Class fields are added to the class body, not the constructor method.

    ----------------------------------------------------------------------------------------------------- */

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

/*  -----------------------------------------------------------------------------------------------------
                                        Private properties
    
    -   Private properties are a new feature in JavaScript that allow us to create private variables for a class.
    -   Private properties begin with a # symbol.
    -   Private properties are not accessible outside of the class.
    -   Private properties are useful for data that is not shared by all instances of the class.

    ----------------------------------------------------------------------------------------------------- */

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

    if (this.#lives === 0) {
      this.#gameOver();
    }
  }
  getScore() {
    return this.#score;
  }
  setScore(points) {
    this.#score += points;
  }

  #gameOver() {
    // Private method
    console.log("Game Over!");
  }
}

const player4 = new Player("Mansus", "Ranger");
player4.introduce(); // Hi I am Mansus, I'm a Ranger
console.log(player4); // Player {name: "Mansus", type: "Ranger", #score: 0, #lives: 3}
player4.setScore(100); // Mansus got 100 points
console.log(player4.getScore()); // 100

// We can also add private methods to a class. This allows us to create methods that are not accessible outside of the class. Private methods begin with a # symbol. Like #gameOver() in the example above.

/*  -----------------------------------------------------------------------------------------------------
                                            Getters and Setters

    -   Getters and setters are methods that get and set the properties of an object. They are used to control
        access to an object.
    -   Getters and setters are useful for performing actions on properties when they are accessed or set.
    -   Getters and setters are defined using the get and set keywords.

    ----------------------------------------------------------------------------------------------------- */

class Player {
  #life = 3;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }

  // Now we can use the get and set keywords to create getter and setter methods for the #life property

  get life() {
    // Getter method
    return this.#life;
  }

  set life(life) {
    // Setter method
    this.#life = life;
  }

  loseLife(damage) {
    const newlife = this.life - damage;
    newlife > 0 ? (this.life = newlife) : this.gameOver(); // this.life automatically calls the setter method
  }

  #gameOver() {
    console.log("Game Over!");
  }
}

const player5 = new Player("Moirinas", "Archer");
player5.introduce(); // Hi I am Moirinas, I'm a Archer
console.log(player5); // Player {name: "Moirinas", type: "Archer", #life: 3}
player5.loseLife(2); // Moirinas lost 2 life
console.log(player5); // Player {name: "Moirinas", type: "Archer", #life: 1}
player5.loseLife(2); // Game Over!

/*  -----------------------------------------------------------------------------------------------------
                                        Static Fields and Methods

    -   Static fields and methods are properties and methods that are attached to the class itself, not the 
        instances of the class.
    -   Static fields and methods are useful for creating utility functions for a class.
    -   Static fields and methods are defined using the static keyword.
    
    ----------------------------------------------------------------------------------------------------- */

class Player {
  static maxLife = 3; // Static field
  #life = 3;

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }

  /**
   * @param {number} life
   */ // this is a JSDoc comment. It is here only to help us with the intellisense in VS Code.
  set life(life) {
    this.#life = life;
  }

  changeLife(amount) {
    const newlife = this.life + amount;

    newlife > maxLife
      ? (this.life = maxLife)
      : newlife > 0
      ? (this.life = newlife)
      : gameOver();
    // We can use the static field maxLife in the class
    // And call the static method gameOver()
  }

  // Now we can use the static keyword to create static methods
  static gameOver() {
    // Static method
    console.log("Game Over!");
  }
}

const player6 = new Player("Arlindo Cross", "Paladin");
player6.introduce(); // Hi I am Arlindo Cross, I'm a Paladin
console.log(player6); // Player {name: "Arlindo Cross", type: "Paladin", #life: 3}
player6.changeLife(-2); // Arlindo Cross lost 2 life
console.log(player6); // Player {name: "Arlindo Cross", type: "Paladin", #life: 1}
player6.changeLife(5); // Arlindo Cross gained "5" life
console.log(player6); // Player {name: "Arlindo Cross", type: "Paladin", #life: 3}
player6.changeLife(-3); // Game Over!

/*  -----------------------------------------------------------------------------------------------------
                                                Inheritance

    -   Inheritance is a way to create a new class from an existing class.
    -   The new class is called a subclass, and the existing class is called the superclass.
    -   The subclass inherits all of the properties and methods of the superclass.
    -   We can use the extends keyword to create a subclass.

    ----------------------------------------------------------------------------------------------------- */

class ModeratorPlayer extends Player {
  // We use the extends keyword to create a subclass
  constructor(name, type) {
    super(name, type); // We use the super keyword to call the constructor of the superclass
  }

  mute(player) {
    player.muted = true;
    console.log(`${player.name} is muted.`);
  } // We can also add new methods to the subclass
}

const moderator = new ModeratorPlayer("Biggus Dickus", "Loman");
moderator.introduce(); // Hi I am Biggus Dickus, I'm a Loman
console.log(moderator); // Player {name: "Biggus Dickus", type: "Loman", #life: 3}
moderator.mute(player6); // Arlindo Cross is muted.

/*  -----------------------------------------------------------------------------------------------------
                                            Polymorphism

    -   Polymorphism is the ability to call the same method on different objects and get different results.
    -   Polymorphism is useful for creating reusable code.
    -   Polymorphism is achieved by overriding methods in subclasses.

    ----------------------------------------------------------------------------------------------------- */

class ModeratorPlayer extends Player {
  #life = 9;
  constructor(name, type) {
    super(name, type);
    powers = ["mute", "kick", "ban"];
  }

  introduce() {
    console.log(
      `Hi I am ${this.name}, I'm a ${this.type} and I have the powers ${this.powers}`
    );
  } // We can override methods in subclasses
}

const moderator2 = new ModeratorPlayer("Incontinentia Buttocks", "Wife");
moderator2.introduce(); // Hi I am Incontinentia Buttocks, I'm a Wife and I have the powers mute,kick,ban
console.log(moderator2); // Player {name: "Incontinentia Buttocks", type: "Wife", #life: 9}

/*  -----------------------------------------------------------------------------------------------------
                                           Encapsulation

    -   Encapsulation is the process of hiding the implementation details of a class from other objects.
    -   Encapsulation is achieved by using private fields and methods.
    -   Encapsulation is useful for creating reusable code.

    ----------------------------------------------------------------------------------------------------- */

/*  -----------------------------------------------------------------------------------------------------
                                            Abstraction

    -   Abstraction is the process of hiding the implementation details of a class from other objects.
    -   Abstraction is achieved by using private fields and methods.
    -   Abstraction is useful for creating reusable code.

    ----------------------------------------------------------------------------------------------------- */
