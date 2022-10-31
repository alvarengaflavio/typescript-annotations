// In tsx files we use angle  brackets all the time <> </>. So we need to tell the linter that we are using the generic syntax and not the jsx syntax

// <T,> This comma is important. It tells the linter that we are using the generic syntax and not the jsx syntax
const getRandomElement2 = <T,>(arr: T[]): T => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
