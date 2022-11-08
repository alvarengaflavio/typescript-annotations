export function add(a: number, b: number) {
  return a + b;
} // in the moment we put the export keyword in front of the function, typescript assumes that we are working with a module, and we are exporting the function from the module. So, the utils.ts file is a module and the add() and sample() functions are exported from the module.

export function sample<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Path: Modules\app.ts
