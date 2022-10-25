/*
    INTERFACE
    - Interfaces serve almost the same purpose as aliases, but they are different in some ways.
    - We can use them to create reusable, modular types that describe shapes of objects.
    - Interfaces are a great way to describe the shape of an object.
    - Only an OBJECT can implement an interface.
*/

interface Person {
  first: string;
  last: string;
  nickname?: string; // Optional property
  age: number;
}

const p1: Person = { first: "Vero", last: "S", age: 30 }; // OK
const p2: Person = {
  first: "Chicken",
  last: "Face",
  age: 67,
  nickname: "ChickenFace",
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

/*
    PARAMETER PROPERTIES
*/

interface Product {
  id: number;
  name: string;
  price: number;
  applyDiscount(discount: number): number;
  // applyDiscount: (discount: number) => number; // Alternative syntax - arrow function, here makes no difference, but in the logic of the code it does. Arrow functions are not bound to the object, so we can't use "this" inside the function.
}

const shoes: Product = {
  id: 1,
  name: "Red Star Shoes",
  price: 100,
  applyDiscount(discount) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
}; // discount is a :number defined in the interface, but we can use any name we want in the function body (discount) - Parameter properties

console.log(shoes.applyDiscount(0.25)); // 75

/*
    REOPENING INTERFACES
    - We can reopen interfaces to add new properties.
    - We can reopen interfaces to add new methods.
*/

interface Product {
  description?: string; // I made the property optional to not break previous code, but you can make it required
} // now Product interface has a new property

// that's can be done in interfaces from libraries, or other files. We can reopen them to add new properties or methods in our project.
interface Dog2 {
  name: string;
  age: string;
} // Came from a library

interface Dog2 {
  breed: string;
  bark(): string;
} // reopened the interface to add a new property and a new method

const bela: Dog2 = {
  name: "Bela",
  age: "6",
  breed: "German Shepherd",
  bark() {
    return "Woof!";
  },
}; // The object has all the combined properties and methods from the reopened interface

console.log(bela.bark()); // Woof!

/* 
    INTERFACE EXTENDS
    - We can extend interfaces.
    - It's like extending classes. The interface will inherit all the properties and methods from the interface we extend.
    - We can extend multiple interfaces.
    - We can extend interfaces from other files.
    - We can extend interfaces from other libraries.
*/

interface ServiceDog extends Dog2 {
  // Extends Dog interface
  job:
    | "drug detection"
    | "bomb detection"
    | "search and rescue"
    | "therapy"
    | "guide dog"
    | "protection"
    | "other";
}

const K9: ServiceDog = {
  name: "K9",
  age: "3",
  breed: "German Shepherd",
  job: "drug detection",
  bark() {
    return "Hands up! I'm a cop! Woof!";
  },
}; // K9 has all the properties and methods from the Dog interface, plus the new property "job"

console.log(K9.bark()); // Hands up! I'm a cop! Woof!

/*
    MULTIPLE INTERFACE INHERITANCE
    - We can extend multiple interfaces.
*/

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  // We can extend multiple interfaces, i can add more interfaces here if i want
  level: "junior" | "senior" | "manager";
  hardskills: string[];
  languages: string[];
}

const antonio: Engineer = {
  first: "Antonio",
  last: "Banderas",
  age: 60,
  email: "toninho.chevete@bol.com.br",
  id: 123,
  level: "senior",
  hardskills: ["HTML", "CSS", "JavaScript"],
  languages: ["English", "Spanish"],
}; // antonio has all the properties and methods from the Person and Employee interfaces, plus the new properties "level", "hardskills" and "languages" from the Engineer interface (the one we extended)

/*  ----------------------------------------------------------------------------------
                              Type Aliases vs Interfaces

    Type aliases and interfaces are very similar.
    They both allow you to define a type.
    They both allow you to define a type that can be used in multiple places.
    They both can be used to define an object, function, union, tuple or generic type.
    
    Interface can only describe the shape of an object, but type aliases can describe any type.
    Type aliases can't be re-opened to add new properties or methods.
    The main difference between type aliases and interfaces is that type aliases cannot be extended or implemented from.
    This means that you cannot extend or implement from a type alias.
    This means that you cannot use a type alias in an extends or implements clause.
    ----------------------------------------------------------------------------------  */

type MyLocation4 = {
  name: string;
  coordinates: Coordinates;
  description?: string;
};

interface MyLocation5 {
  name: string;
  coordinates: Coordinates;
  description?: string;
}

type MyLocation6 = MyLocation4 & { address: string }; // type alias and interface can do this
interface MyLocation7 extends MyLocation5 {} // only interface can do this
interface MyLocation9 {} // only interface can do this
