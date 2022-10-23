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

/* 
    Enums
    - great way to signal to other engineers that these are all closely related values
    - enum is a way to give more friendly names to sets of numeric values
    - enum is a way to define a type that consists of a few closely related values
    - enum is a way to define a type that can be used in multiple places
*/
