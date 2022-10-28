/* ------------------------------------------------------------------------------- 
                                    Generics

    Generics are a way to create reusable code components. They allow us to create
    components that can work over a variety of types rather than a single one. This
    allows users to consume these components and use their own types.

    ------------------------------------------------------------------------------- */

// Generic Function
function doThing(thing: number | string): number | string {
  return thing;
} // if you look at this function you don't know what will get out. Maybe you'll get a number or a string.
// All that this says is the function accepts a single number or string and then returns a single number or sring.
// I can write a generic function that says "If yougive me a number, I return a number. If you give me a string, I return a string. If you give me a boolean, I return a boolean. So we abstract the type away even further."

function doAnotherThing<T>(thing: T): T {
  return thing;
} // T is a placeholder for the type that we will pass in. It's a generic type. We can use any letter we want. It's just a placeholder for the type that we will pass in.

function doChickenThing<Chicken>(face: Chicken): Chicken {
  return face;
} // This is a generic function that accepts a single parameter of type Chicken and returns a single parameter of type Chicken.

// Generic Class
function numberIdendity(item: number): number {
  return item;
} // This is a function that accepts a single parameter of type number and returns a single parameter of type number.

function stringIdentity(item: string): string {
  return item;
} // This is a function that accepts a single parameter of type string and returns a single parameter of type string.

// Some of the least useful functions of all time. But they are a example. We can create a generic function that will accept any type and return that type.

function identity<T>(item: T): T {
  return item;
} // This is a generic function that accepts a single parameter of type T and returns a single parameter of type T.

identity<number>(7); // This is a function call that passes in a number. The type of the parameter is inferred from the argument.
identity<boolean>(true); // This is a function call that passes in a boolean. The type of the parameter is inferred from the argument.
identity<string>(
  "Flamengo three-time champion of the Copa Libertadores da América!"
); // This is a function call that passes in a string. The type of the parameter is inferred from the argument.

function getRandomElement<T>(list: T[]): T {
  // This a function that return a random element of an array. The array can be of any type and length.
  const randomIndex = Math.floor(Math.random() * list.length);

  return list[randomIndex];
} // get random element of an array of any type.

console.log(
  getRandomElement<string>([
    "a",
    "b",
    "c",
    "easy as",
    "one",
    "two",
    "three",
    "as simple as",
    "do",
    "re",
    "mi",
  ]) // This is a function call that passes in a string array
); // result will be "easy as" or "as simple as" or "do" or "re" or "mi".
// Baby, you and me, girl. ;)

console.log(
  getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // This is a function call that passes in a number array
); // result will be 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10.
