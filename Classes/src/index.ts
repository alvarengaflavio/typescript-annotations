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
    public score: number = 0
  ) {}

  logDetails(): void {
    console.log(
      `Player ${this.name} is a ${this.type} and is level ${this.level}`
    );
  }

  get getScore(): number {
    return this.score;
  }

  set setScore(score: number) {
    this.score = score;
  }
}

const player5 = new Player5("ChickenFace", "Warrior", 1);
player5.logDetails(); // Player ChickenFace is a Warrior and is level 1
console.log(player5.getScore); // 0
player5.setScore = 100;
console.log(player5.getScore); // 100

/*  -----------------------------------------------------------------------------------------------------
                                    Static Members

    -   We can also define static members on a class.
    -   Static members (properties and methods) are visible on the class itself, rather than on the instances of the class.
    -   Static members are often used to create utility functions for an application.
    -   Static members are accessed using the class name, rather than an instance of the class.

    ----------------------------------------------------------------------------------------------------- */

/*  -----------------------------------------------------------------------------------------------------
                                    The Protected Modifier

    -   We can also define a protected member on a class.
    -   A protected member is similar to a private member, except that it is also accessible in subclasses.
    -   A protected member is only accessible within the class and by subclasses.
    -   A protected member cannot be accessed from outside of the class.

    ----------------------------------------------------------------------------------------------------- */
