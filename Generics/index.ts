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

/*  ------------------------------------------------------------------------------------------------------
                                Inferred Generic Type Parameters

    - In many cases typescript can actually infer a type. 

------------------------------------------------------------------------------------------------------  */

getRandomElement(["What", "I", "will", "return", "?"]); // Typescript is smart element to knows that the type of this list is <string>, so we don't need to declare it.

getRandomElement([1, 2, 3, 4, 5, 6]); // As above, we don't need to declare the type <number>.

// This will not be the case for ALL the generic types, in that case we need to declare.

//const btn = document.querySelector<HTMLButtonElement>("#btn"); //  Type : HTMLButtonElement | null
// We must declare the type here. Because typescript can't infer the type.

/*  ------------------------------------------------------------------------------------------------------
                                Generics Arrow Functions & TSX Files 

    - If you are wirking with React TSX files, you can use generics with arrow functions.
    - Generics can be used with arrow functions.
    - Open the file "Generics\index.tsx" to see an example.
    
------------------------------------------------------------------------------------------------------  */

/*  ------------------------------------------------------------------------------------------------------
                                Generic With Multiple Types 

    - We can use multiple types with generics.

------------------------------------------------------------------------------------------------------  */

function doSomething<T, U>(thing: T, anotherThing: U): T & U {
  return { ...thing, ...anotherThing };
} // This is a generic function that accepts two parameters of type T and U and returns a single parameter of type T & U. Typescript can infer the return type.

doSomething<string, number>("Hello", 7); // Now we can use this generic function and pass two different types.

const comboBreaker = doSomething(
  { name: "Combo Breaker", age: 7 },
  { pets: ["Dog", "Cat"] }
); // comboBraker type is inferred from the arguments.

console.log(comboBreaker); // {name: "Combo Breaker", age: 7, pets: Array(2)}

/*  ------------------------------------------------------------------------------------------------------
                                          Generic Constraints 

    - We can use generic constraints to restrict the types that can be used with a generic.
    - We can use the "extends" keyword to specify a generic constraint.
    - This is useful when we want to use a generic with a type that has a specific property.

------------------------------------------------------------------------------------------------------  */

function doSomethingElse<T extends object, U extends object>(
  thing: T,
  anotherThing: U
): T & U {
  return { ...thing, ...anotherThing }; // This generic function accepts two OBJECTS of type T and U and returns a single object of type T & U. Typescript can infer the return type.
}

const alva = doSomethingElse(
  { name: "Flavio Alvarenga", age: 9 },
  { pets: ["Bela", "Esmeralda"] }
);

console.log(alva); // {name: "Flavio Alvarenga", age: 9, pets: Array(2)}

/*  ------------------------------------------------------------------------------------------------------
                                Generic Constraints With Interfaces 

    - We can use generic constraints with interfaces.
    - We can use the "extends" keyword to specify a generic constraint.
    
------------------------------------------------------------------------------------------------------  */

interface HasLength {
  length: number;
} // This is an interface that has a single property of type number.

function printDoubleLenth<T extends HasLength>(thing: T): number {
  // This generic function accepts a parameter of type T that extends the HasLength interface and returns a number.
  return thing.length * 2;
}

console.log(printDoubleLenth("Hello")); // 10
console.log(printDoubleLenth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 20
console.log(printDoubleLenth({ length: 7 })); // 14
// console.log(printDoubleLenth(47)); // ERROR

/*  ------------------------------------------------------------------------------------------------------
                                  Default Value Parameters With Generics

    - We can use default value parameters with generics.

    ------------------------------------------------------------------------------------------------------ */

function makeEmptyArray<T = number>(): T[] {
  return [];
} // to not received a return of type "unknown[]", we need to specify the default type of the array.
// this is made in the <T> after the function name. We can set the default type of the array typing <T = number> for example.

const numsArray = makeEmptyArray(); // This is a function call that passes in a number array. (by default)
const strArray = makeEmptyArray<string>(); // But i can still do a string array if i want. Passing the type in the function call.
const boolArray = makeEmptyArray<boolean>(); // Or a boolean array.

/*  ------------------------------------------------------------------------------------------------------
                                        Generic Classes

    - We can use generics with classes.
    - The concept is the same as with functions.
    ------------------------------------------------------------------------------------------------------ */

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  director: string;
  resolution: string;
}

class Playlist<T> {
  // This is a generic class that accepts a parameter of type T that extends the Video interface.
  public playlist: T[] = [];

  addItem(item: T): void {
    this.playlist.push(item);
  }

  getPlaylist(): T[] {
    return this.playlist;
  }
}

const songsList = new Playlist<Song>(); // This is a class instance that passes in a Song array.
const videosList = new Playlist<Video>(); // This is a class instance that passes in a Video array.

songsList.addItem({ title: "Hello", artist: "Adele" }); // This is a function call that passes in a Song object.
songsList.addItem({ title: "Hello", artist: "Lionel Richie" });
videosList.addItem({
  title: "The Matrix",
  director: "Wachowski",
  resolution: "1080p",
}); // This is a function call that passes in a Video object.
videosList.addItem({
  title: "The Lord of the Rings",
  director: "Peter Jackson",
  resolution: "1080p",
});

console.log(songsList.getPlaylist()); // [{title: "Hello", artist: "Adele"}, {title: "Hello", artist: "Lionel Richie"}]
console.log(videosList.getPlaylist()); // [{title: "The Matrix", director: "Wachowski", resolution: "1080p"}, {title: "The Lord of the Rings", director: "Peter Jackson", resolution: "1080p"}]
