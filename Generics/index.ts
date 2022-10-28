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
