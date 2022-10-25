/* 
    Object Types 
    You can also assign a type to an object.
    This is called an object type annotation.
    This is declared after the object name and before the object body.
*/

const dog: { name: string; breed: string; age: number } = {
  name: "Bela",
  breed: "German Shepherd",
  age: 6,
};

const printDog = (dog: { name: string; breed: string; age: number }) => {
  return `Hello ${dog.name}, you are a ${dog.breed} and ${dog.age} years old!`;
};

console.log(printDog(dog));

/*  
    You can also use an interface to define an object type.
    Interfaces are a way to define a type that can be used in multiple places.
    Interfaces are declared using the interface keyword.
    Interfaces are declared outside of the function body.
    Interfaces are declared using PascalCase.
    Interfaces are used by adding the interface name after the variable name.
*/
interface Dogo {
  name: string;
  breed: string;
  age: number;
}

const dog2: Dogo = {
  name: "Bela",
  breed: "German Shepherd",
  age: 6,
}; // creating a new Dog instance

const printDog2 = (dog: Dogo): string => {
  return `Hello ${dog.name}, you are a ${dog.breed} and ${dog.age} years old!`;
};

console.log(printDog2(dog2));

/*  
    EXTRA 
    You can also use an interface to define a function type.
*/
interface AddNumbers {
  (a: number, b: number): number;
}

const addTwoNumbers: AddNumbers = (a: number, b: number): number => {
  return a + b;
};

console.log(addTwoNumbers(1, 2)); // 3

// Excess Property Checks
function printChicken(singer: { first: string; last: string }): void {
  console.log(`${singer.first} ${singer.last}`);
}

printChicken({ first: "Chiken", last: "Face" }); // Chiken Face
//printChicken({ first: "Chiken", last: "Face", age: 76 }); // This will alert an error because the interface does not allow the age property.

const oldChiken = { first: "Chiken", last: "Face", age: 76 }; // But if you assign the object to a variable, it will not alert an error.
printChicken(oldChiken); // Chiken Face
/* 
   This is because the interface is only used to check the object when it is passed as a parameter to the function. 
   It is not used to check the object when it is assigned to a variable.
   This is called a structural type system. 
   Is a design decision that allows TypeScript to be more flexible than other languages.
*/

/* 
    Type Aliases
    Type aliases are a way to give a type a name.
    Type aliases are declared using the type keyword.
    Type aliases are declared outside of the function body.
    Type aliases are declared using PascalCase.
    Type aliases are used by adding the type alias name after the variable name.
*/
let coordinates: { x: number; y: number } = {
  x: 10,
  y: 20,
};

function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function doubleCoordinates(coordinates: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: coordinates.x * 2, y: coordinates.y * 2 };
}
/*  
    Instead of declaring the type of the coordinates object twice, you can use a type alias. 
    This will make the code easier to read and maintain.
*/
export type Coordinates = { x: number; y: number };

let coordinates2: Coordinates = {
  x: 10,
  y: 20,
};

function randomCoordinates2(): Coordinates {
  return { x: Math.random(), y: Math.random() };
}

function doubleCoordinates2(coordinates: Coordinates): Coordinates {
  return { x: coordinates.x * 2, y: coordinates.y * 2 };
}

/*  
    Anonymous Types
    Anonymous types are types that are declared inline.
    Anonymous types are declared using the type keyword.
    Anonymous types are declared inside of the function body.
*/
function printCoordinates(coordinates: { x: number; y: number }): void {
  console.log(`x: ${coordinates.x}, y: ${coordinates.y}`);
}

printCoordinates({ x: 10, y: 20 }); // x: 10, y: 20

/*
    You can also use an interface to define an anonymous type.
*/
interface Coordinates2 {
  x: number;
  y: number;
}

function printCoordinates2(coordinates: Coordinates2): void {
  console.log(`x: ${coordinates.x}, y: ${coordinates.y}`);
}

printCoordinates2({ x: 10, y: 20 }); // x: 10, y: 20

/*
    You can also use a type alias to define an anonymous type.
*/
type Coordinates3 = { x: number; y: number };

function printCoordinates3(coordinates: Coordinates3): void {
  console.log(`x: ${coordinates.x}, y: ${coordinates.y}`);
}

printCoordinates3({ x: 10, y: 20 }); // x: 10, y: 20

/*
    Nested Object Types
    You can also nest object types.
*/

type MyLocation = {
  name: string;
  coordinates: Coordinates;
};

let myLocation: MyLocation = {
  name: "Home",
  coordinates: { x: 10, y: 20 },
};

function printMyLocation(location: MyLocation): void {
  console.log(`My location is ${location.name}`);
  console.log(`x: ${location.coordinates.x}, y: ${location.coordinates.y}`);
}

printMyLocation(myLocation); // My location is Home, x: 10, y: 20

/*
    Optional Properties
    You can also make properties optional.
    This is done by adding a question mark after the property name.
*/

type MyLocation2 = {
  name: string;
  coordinates: Coordinates;
  description?: string;
};

/*  
    More complex example
*/
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  album?: string;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} by ${song.artist}`);
}

const mySong: Song = {
  title: "Rats and vermin's",
  artist: "Bardin Goreksson",
  numStreams: 563120,
  credits: {
    producer: "Fatshark",
    writer: "Fatshark and Bardin Goreksson",
  },
};

printSong(mySong); // Rats and vermin's by Bardin Goreksson
calculatePayout(mySong); // 1865.296

/*
    Readonly Properties
    You can also make properties readonly.
    This is done by adding the readonly keyword before the property name.
*/

type MyLocation3 = {
  readonly name: string;
  coordinates: Coordinates;
  description?: string;
};

let myLocation3: MyLocation3 = {
  name: "Home",
  coordinates: { x: 10, y: 20 },
};

//myLocation3.name = "Work"; // This will alert an error because the name property is readonly.

// -------------------------------------------------------- //
// Path: Types\4.Arrays.ts
