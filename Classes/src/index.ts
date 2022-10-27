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
// 1.5. Creating a Class with Parameter
// 1.6. Creating a Class with Getters and Setters
// 1.7. Creating a Class with the Protected Modifier
// 1.8. Creating a Class with Interfaces
// 1.9. Creating Abstract Classes

class Player {
  //1.2 On top of the class we can define properties class sets of properties that we want to be available on the class
  name: string;
  type: string; // player class
  level: number;
  score: number = 0; // the score is inferred to be a number and is already set to 0 (i explicit set to :number to be more explicit)

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

// In typescript we can define a property to be readonly. This property can only be set once and cannot be changed later on.
class Player2 {
  readonly name: string; // name and type canot be changed after the constructor function is called
  readonly type: string;
  level: number;
  score: number = 0;

  constructor(name: string, type: string, level: number) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  logDetails(): void {
    console.log(
      `Player ${this.name} is a ${this.type} and is level ${this.level}`
    );
  }
}

const player2 = new Player2("ChickenFace", "Warrior", 1);
player2.logDetails(); // Player ChickenFace is a Warrior and is level 1
// player2.name = "DuckFace"; // error: Cannot assign to 'name' because it is a read-only property.

/*  -----------------------------------------------------------------------------------------------------
                                    Public and Private Notations

    -   By default, all members of a class are public.
    -   We can also mark a member of a class as private.
    -   Private members are only visible to other members of the same class.
    -   A public member can be accessed from anywhere, including from outside of the class.
    -   A private member can only be accessed by other members of the same class.
    -   Private members are often used to hide the implementation details of a class.

    ----------------------------------------------------------------------------------------------------- */

class Player3 {
  public name: string; // public is not mandatory because the default is public, but it is good practice to be explicit
  private type: string; // private - can only be called from within the class
  level: number;
  score: number = 0;

  constructor(name: string, type: string, level: number) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  logDetails(): void {
    console.log(
      `Player ${this.name} is a ${this.type} and is level ${this.level}`
    );
  }
}

const player3 = new Player3("ChickenFace", "Warrior", 1);
player3.logDetails(); // Player ChickenFace is a Warrior and is level 1
// player3.type = "Mage"; // error: Property 'type' is private and only accessible within class 'Player3'.

/*  -----------------------------------------------------------------------------------------------------
                                    Paramater Properties

    -   We can also define properties and access modifiers in the constructor parameters.
    -   This is a shorter way to define and initialize properties in a class.
    -   This is called a parameter property.

    ----------------------------------------------------------------------------------------------------- */

class Player4 {
  // This is the shortcut way to define and initialize properties in a class

  constructor(
    public name: string,
    private type: string,
    public level: number,
    public score: number = 0
  ) {}
  // This constructor is equivalent to the one above. It is way shorter and more concise

  logDetails(): void {
    console.log(
      `Player ${this.name} is a ${this.type} and is level ${this.level}`
    );
  }
}

const player4 = new Player4("ChickenFace", "Warrior", 1);
player4.logDetails(); // Player ChickenFace is a Warrior and is level 1

/*  -----------------------------------------------------------------------------------------------------
                                        Getters and Setters

    -   We can also define getters and setters to get and set the value of a property.
    -   A getter is a method that gets the value of a property.
    -   A setter is a method that sets the value of a property.
    -   We can use getters and setters to control how a property is accessed from outside of the class.
    ----------------------------------------------------------------------------------------------------- */

class Player5 {
  // This is the shortcut way to define and initialize properties in a class

  constructor(
    public name: string,
    private type: string,
    public level: number,
    private xp: number = 0 // private - can only be called from within the class
  ) {}

  get details(): string {
    return `Player ${this.name} is a ${this.type} and is level ${this.level}`;
  } // getter - we can call this method as a property

  get getEXP(): number {
    return this.xp;
  } // getter - we can access the score property by calling the getter

  set setXP(experience: number) {
    this.xp += experience;
  } // setter - we can set the score property by calling the setter
}

const player5 = new Player5("ChickenFace", "Warrior", 1);
console.log(player5.details); // Player ChickenFace is a Warrior and is level 1
console.log(player5.getEXP); // 0
player5.setXP = 100;
console.log(player5.getEXP); // 100
player5.setXP = 200;
console.log(player5.getEXP); // 300

/*  -----------------------------------------------------------------------------------------------------
                                          The Protected Modifier

    -   We can also define a protected member on a class.
    -   A protected member is similar to a private member, except that it is also accessible in subclasses.
    -   A protected member is only accessible within the class and by subclasses.
    -   A protected member cannot be accessed from outside of the class.

    ----------------------------------------------------------------------------------------------------- */

class Player6 {
  // This is the shortcut way to define and initialize properties in a class

  constructor(
    public name: string,
    protected type: string, // private - can only be called from within the class
    public level: number,
    protected xp: number = 0 // protected - be called by the class and its subclasses
  ) {}

  get details(): string {
    return `Player ${this.name} is a ${this.type} and is level ${this.level}`;
  } // getter - we can call this method as a property
}

class GM_Girlfriend extends Player6 {
  private readonly isAdmin: boolean = true;

  constructor(name: string, type: string, level: number, xp: number) {
    super(name, type, level, xp);
  }

  rollDice(): number {
    return 20; // always rolls a 20
  }

  get specialLoot(): string {
    const cfLoot = ["ring", "necklace", "bracelet", "weapon", "armor"];
    const randomLoot = cfLoot[Math.floor(Math.random() * cfLoot.length)];
    return `You got a new ${randomLoot}!`;
  }
}

const player6 = new GM_Girlfriend("SomeNerdGirl", "Ranger", 1, 0);
console.log(player6.details); // Player SomeNerdGirl is a Ranger and is level 1
console.log(player6.rollDice()); // 20
console.log(player6.specialLoot); // You got a new armor!

/*  -----------------------------------------------------------------------------------------------------
                                                Classes and Interfaces

    -   We can also define interfaces for classes.
    -   Interfaces are used to define the structure of an object.

    ----------------------------------------------------------------------------------------------------- */

interface Colorful {
  color: string;
} // interface

class Ball implements Colorful {
  // implements - the class must have the properties defined in the interface
  constructor(public color: string) {}
}

const ball = new Ball("red");
console.log(ball.color); // red

class Car implements Colorful {
  constructor(public brand: string, public color: string) {}
}

const car = new Car("BMW", "black");
console.log(car.brand); // BMW
console.log(car.color); // black

interface Eatable {
  eat(): void;
}

class Food implements Colorful, Eatable {
  constructor(public color: string, public name: string) {}

  eat(): void {
    console.log(`You ate the ${this.name}!`);
  }
}

const food = new Food("red", "apple");
console.log(food.color); // red
console.log(food.name); // apple
food.eat(); // You ate the apple!

/*  -----------------------------------------------------------------------------------------------------
                                        Abstract Classes

    -   We can also define abstract classes.
    -   An abstract class is a class that cannot be instantiated directly.
    -   An abstract class is used as a base class for other classes.
    -   An abstract class can contain both abstract and concrete methods.
    -   An abstract method is a method that is declared, but not implemented in the abstract class.
    -   An abstract method must be implemented in the derived class.
    -   An abstract method can only exist within an abstract class.
    -   An abstract method cannot be private or static.
    -   An abstract method cannot be called directly from the abstract class.
  ----------------------------------------------------------------------------------------------------- */

abstract class Animal {
  // abstract class - cannot be instantiated directly
  constructor(public name: string) {}

  abstract makeSound(): void; // abstract method - must be implemented in the derived class
  abstract animalDetails(): string; // abstract method - must be implemented in the derived class
}

class Dog extends Animal {
  constructor(public name: string, public breed: string, public age: number) {
    super(name);
  } // super - calls the constructor of the base class

  makeSound(): void {
    console.log("Woof!");
  } // abstract method implementation

  animalDetails(): string {
    return `The dog's name is ${this.name}, it is a ${this.breed} and it is ${this.age} years old.`;
  } // abstract method implementation
}

const dog = new Dog("Bela", "German Shepherd", 6);
console.log(dog.animalDetails()); // The dog's name is Bela, it is a German Shepherd and it is 6 years old.
dog.makeSound(); // Woof!

// ----------------------------------------------------------------------------------------------------- //

class Cat extends Animal {
  constructor(public name: string, public breed: string, public age: number) {
    super(name);
  } // super - calls the constructor of the base class

  makeSound(): void {
    console.log("Meow!");
  } // abstract method implementation

  animalDetails(): string {
    return `The cat's name is ${this.name}, it is a ${this.breed} and it is ${this.age} years old.`;
  } // abstract method implementation
}

const cat = new Cat("Esmeralda", "StreetCat", 4);
console.log(cat.animalDetails()); // The cat's name is Esmeralda, it is a StreetCat and it is 4 years old.
cat.makeSound(); // Meow!

// ----------------------------------------------------------------------------------------------------- //

class GermanShepard extends Dog {
  constructor(name: string, age: number) {
    super(name, "German Shepard", age);
  }
} // derived class - inherits from the Dog class

const germanShepard = new GermanShepard("Bela", 6);
console.log(germanShepard.animalDetails()); // The dog's name is Bela, it is a German Shepard and it is 6 years old.
germanShepard.makeSound(); // Woof!

/*  -----------------------------------------------------------------------------------------------------
                                        That's it for this lesson!
  ----------------------------------------------------------------------------------------------------- */
