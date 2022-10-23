/*
    INTERFACE
    - Interfaces serve almost the same purpose as aliases, but they are different in some ways.
    - We can use them to create reusable, modular types that describe shapes of objects.
    - Interfaces are a great way to describe the shape of an object.
    - Only an OBJECT can implement an interface.
*/

interface Person {
  readonly id: number; // readonly property
  first: string;
  last: string;
  nickname?: string; // Optional property
  age: number;
}

const p1: Person = { first: "Vero", last: "S", age: 30, id: 1231 }; // OK
const p2: Person = {
  first: "Chicken",
  last: "Face",
  age: 67,
  nickname: "ChickenFace",
  id: 1254,
}; // OK
// p3 = { first: "Moirinas", age: 29, id: 3215 }; // Error - missing "last" property
// p4 = { first: "Moirinas", last: "M", age: 29, nickname: "Moiri", extra: "extra", id: 6542 }; // Error - extra property
// p1.id = 123; // Error - readonly property
// p1.age = 31; // OK - not readonly property

/*
    INTERFACE Methods
    - Interfaces can also describe methods.
    - We can describe the shape of a function.
    - We can describe the shape of a function that takes an object as a parameter.
*/

interface NewPerson extends Person {
  // Extends Person interface
  // We can extend interfaces
  // We can extend multiple interfaces
  // We can extend interfaces from other files
  // We can extend interfaces from other libraries
  sayHello: () => string; // Function that returns a string (no parameters)
  sayHelloTo: (name: string) => string; // Function that returns a string (one parameter)
  sayMyName(): string; // Function that returns a string (no parameters)
  sayMyNameTo(name: string): string; // Function that returns a string (one parameter) - alternative syntax
}

const p3: NewPerson = {
  first: "Moirinas",
  last: "M",
  age: 29,
  nickname: "Danone",
  id: 3215,
  sayHello: () => {
    return `Hello!`;
  }, // OK - arrow function that returns a string (no parameters)
  sayHelloTo: (name) => {
    return `Hello ${name}!`;
  }, // OK - arrow function that returns a string (one parameter)
  sayMyName() {
    return `My name is ${this.first} ${this.last}`;
  }, // OK - function that returns a string (no parameters)
  sayMyNameTo(name) {
    return `${name}, my name is ${this.first} ${this.last}`;
  }, // OK - function that returns a string (one parameter)
};

console.log(p3.sayHello()); // Hello!
console.log(p3.sayHelloTo("Veros")); // Hello Veros!
console.log(p3.sayMyName()); // My name is Moirinas M
console.log(p3.sayMyNameTo("Veros")); // Veros, my name is Moirinas M

/*
    INTERFACE Index Signatures
    - Interfaces can also describe index signatures.
    - Index signatures describe the types we can use to index into an object, along with the corresponding return types when indexing.
    - We can use index signatures to describe the types we can use to index into an object, along with the corresponding return types when indexing.
*/

interface NewPerson2 extends NewPerson {
  sayMyNameTo(name: string): string; // Function that returns a string (one parameter)
  [key: string]: any; // Index signature
} // OK
