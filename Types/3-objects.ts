/* Object Types 
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

/*  You can also use an interface to define an object type.
    Interfaces are a way to define a type that can be used in multiple places.
    Interfaces are declared using the interface keyword.
    Interfaces are declared outside of the function body.
    Interfaces are declared using PascalCase.
    Interfaces are used by adding the interface name after the variable name.
*/
interface Dog {
  name: string;
  breed: string;
  age: number;
}

const dog2: Dog = {
  name: "Bela",
  breed: "German Shepherd",
  age: 6,
};

const printDog2 = (dog: Dog) => {
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
