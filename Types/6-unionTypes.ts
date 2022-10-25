/*
    Union Types
    Union types are a way to combine multiple types into one.
    Union types are declared using the pipe symbol (|).
    Union types are declared outside of the function body.
*/

// simple union type
let age: number | string = 10;
age = 31; // OK
age = "31"; // OK

// a litle more complex union type
type MyDog = {
  name: string;
  breed: string;
  age: number;
  sound: "woof";
};

type MyCat = {
  name: string;
  breed: string;
  age: number;
  sound: "meow";
};

type MyPet = MyDog | MyCat;

function makeSound(pet: MyPet): void {
  console.log(`${pet.name} says ${pet.sound}`);
}

let myDog: MyPet = {
  name: "Bela",
  breed: "German Shepherd",
  age: 6,
  sound: "woof",
};

let myCat: MyPet = {
  name: "Esmeralda",
  breed: "Vira-lata",
  age: 4,
  sound: "meow",
};

makeSound(myDog); // Bela says woof
makeSound(myCat); // Esmeralda says meow

// -------------------------------------------------------- //
// a litle strange union type example
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let strangeUnion: Point | Loc = { x: 10, y: 20 }; // OK
strangeUnion = { lat: 10.235, long: 20.785 }; // also OK
strangeUnion = { x: 10, y: 20, lat: 10, long: 20 }; // (strange OK) - this is a union type, not an intersection type
// this is very weird and not recommended at all - it's just an example and is good to know that it's possible, even if it's not good practice.

/* 
    Uniton Narrowing 

    Uniton Narrowing is a way to use union types in a more specific way.
    Uniton Narrowing is done using type guards.
    Type guards are a way to check the type of a variable.
    Type guards are done using the typeof, instanceof or in keyword.
    Type guards are done inside of the function body.
    Type guards are done using camelCase.
*/

// typeof type guard
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return `${a}${b}`;
}

console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12
console.log(add("1", 2)); // 12

// instanceof type guard
class Dog {
  name: string;
  breed: string;
  age: number;
  sound: Function;

  constructor(name: string, breed: string, age: number) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = (sound: string) => {
      console.log(`${this.name} says ${sound}`);
    };
  }
}

class Cat {
  name: string;
  breed: string;
  age: number;
  sound: Function;

  constructor(name: string, breed: string, age: number) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = (sound: string) => {
      console.log(`${this.name} says ${sound}`);
    };
  }
}

function makeSound2(pet: Dog | Cat): void {
  if (pet instanceof Dog) {
    pet.sound("woof woof");
  } else {
    pet.sound("meow");
  }
}

let myDog2 = new Dog("Bela", "German Shepherd", 6); // creating a new Dog instance
let myCat2 = new Cat("Esmeralda", "Vira-lata", 4); // creating a new Cat instance

makeSound2(myDog2); // Bela says woof woof
makeSound2(myCat2); // Esmeralda says meow

/* 
  Array Union Type
  Use the pipe symbol inside a parenthesis to declare an array union type. (string | number)[]
  Array union types are declared outside of the function body. 
*/
let myMixedArray: (number | string)[] = [1, 2, 3, "4", "5", "6"]; // OK

let myWrongArray: number | string[] = 13; // [1, 2, 3, "4", "5", "6"]; (wrong) - this is not an array union type, this is an array of union types, which is not the same thing. Can be a number OR an array of strings.

const coords: (Point | Loc)[] = [];
coords.push({ x: 10, y: 20 }); // OK
coords.push({ lat: 10.235, long: 20.785 }); // OK
// coords.push({ x: 10 }); // (wrong) - missing y property in Point type

/*
    Literal Type
    Literal types are a way to declare a type that is a specific value.
    Literal types are declared using the pipe symbol (|).
    Literal types are declared outside of the function body.
*/

// simple literal type
let zero: 0 = 0; // OK
// zero = 1; // (wrong) - 1 is not a valid literal type

let myLiteral: "hello" | "world" = "hello"; // OK
myLiteral = "world"; // OK
// myLiteral = "foo"; // (wrong) - foo is not a valid literal type

// a litle more complex literal type
const giveAnswer = (answer: "yes" | "no" | "maybe"): string => {
  return `The answer is ${answer}.`;
};

console.log(giveAnswer("yes")); // The answer is yes.
console.log(giveAnswer("no")); // The answer is no.
console.log(giveAnswer("maybe")); // The answer is maybe.
// console.log(giveAnswer("foo")); // (wrong) - foo is not a valid literal type

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday"; // OK
today = "Tuesday"; // OK
// today = "Foo"; // (wrong) - Foo is not a valid literal type

// -------------------------------------------------------- //
// Path: Types\7-TuplesAndEnums.ts
