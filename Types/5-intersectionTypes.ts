/*
    Intersection Types
    Intersection types are a way to combine multiple types into one.
    Intersection types are declared using the ampersand symbol (&).
    Intersection types are declared outside of the function body.
*/

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type CircleWithColor = Circle & Colorful;

const happyFace: CircleWithColor = {
  radius: 10,
  color: "yellow",
};

// -------------------------------------------------------- //
// Path: Types\6-unionTypes.ts
