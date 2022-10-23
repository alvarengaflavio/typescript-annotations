const activeUsers: [] = [];
// if we try to add a string to the array, we get an error
activeUsers.push("ChikenFace"); // because the array is empty, always, we can't add anything to it

/*
    Array Types
    - T[] is one type that represents an array of type T
*/

const activeUsers2: string[] = [];
// if we try to add a string to the array, it works
activeUsers2.push("ChikenFace"); // Nice!

const ageList: number[] = [27, 36, 45, 54, 63, 72, 81, 90];
ageList[0] = 99; // OK
ageList.push(100); // OK
ageList.push("100"); // Error

/* 
    Alternative Syntax
    - Array<T> is a generic type that represents an array of type T
    - T[] is a shorthand for Array<T>
*/

const boolsList: Array<boolean> = [true, false, true, false, true, false]; // same as boolean[]

/*
    We can also work with a custom type
    Lets use some type declared in the previous files
*/
const myPetsList: MyPet[] = [
  {
    name: "Bela",
    breed: "German Shepherd",
    age: 6,
    sound: "woof",
  },
  {
    name: "Esmeralda",
    breed: "Vira-lata",
    age: 4,
    sound: "meow",
  },
]; // an array of MyPet objects

myPetsList.push({
  name: "Some Pet",
  breed: "Some Breed",
  age: 1,
  sound: "woof" || "meow",
}); // OK

/*
    Multi-dimensional Arrays
    - Arrays can be multi-dimensional
    - Each dimension is separated by a comma
*/

const multiDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // an array of arrays of numbers (2D) - (3x3) - 3 rows and 3 columns

// three dimensional array
const threeDimensionalArray: number[][][] = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
]; // an array of arrays of arrays of numbers (3D) - 3x3x3 - 3 cubes of 3x3
