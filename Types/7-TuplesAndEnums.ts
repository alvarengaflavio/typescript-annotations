/*
    Tuples
    - fixed length array
    - each element represents some property of a record
    - order of elements matters
    - use array destructuring to pull elements out of tuple
*/

type Drink = {
  color: string;
  carbonated: boolean;
  sugar: number;
};

const pepsi: [string, boolean, number] = ["brown", true, 40]; // tuple type annotation
let fanta: [string, boolean, number] = ["orange", true, 30];
fanta[0] = "brown"; // tuple is mutable
// fanta[0] = 30; // error, tuple order matters
// fanta = ["orange", true, 30, 12]; // error, tuple is fixed length

const testDrink: Drink = { color: "", carbonated: false, sugar: 0 }; // object type annotation
[testDrink.color, testDrink.carbonated, testDrink.sugar] = [...pepsi];
console.log(testDrink); // { color: 'brown', carbonated: true, sugar: 40 }
// pepsi[0] = 40; // error

type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"]; // OK response
const badResponse: HTTPResponse = [404, "Not Found"]; // Not Found - OK
// goodResponse.push(badResponse); // error, tuple is fixed length
// goodResponse = ["OK", 200]; // error, tuple order matters

// can't see a good use case for tuples in real world code that can't be solved with objects !important

/* 
    Enums
    - great way to signal to other engineers that these are all closely related values
    - enum is a way to give more friendly names to sets of numeric values
    - enum is a way to define a set of named constants
    - enum is a way to define a type that can be used in multiple places
*/

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
}

const myStatus = OrderStatus.PENDING;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(myStatus)); // false

// enum is a way to give more friendly names to sets of numeric values
// it has a default value of 0, 1, 2, 3, etc. for each enum value but you can change it to any value you want

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

const myArrowKey = ArrowKeys.UP;

function isLeft(status: ArrowKeys): boolean {
  return status === ArrowKeys.LEFT;
}

console.log(isLeft(myArrowKey)); // false

/*
    ENUMS Behind the Scenes
    - enums are compiled to plain JavaScript objects
    - resulting in a poluted global namespace and potential naming collisions
    - one way to avoid this is to use const enums
*/

const enum OrderStatus2 {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
} // good practice to use const enums when possible

// -------------------------------------------------------- //
// Path: Types\8-Interfaces.ts
