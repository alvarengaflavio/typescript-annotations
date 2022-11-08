// We will owrk with axios, that is a very useful library for making HTTP requests, to teach you how to use TypeScript with external libraries.

// npm install axios --save

import axios from "axios";

// Axios give us a bunch of different methods, like get, post, put, delete, etc. We can use these methods to make HTTP requests to different endpoints. We can also use these methods to make requests to different URLs.

// Let's make a requet to the JSONPlaceholder API, which is a fake online REST API for testing and prototyping. We will make a request to the /users endpoint, which will return a list of posts.

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  }); // we don't need to specify the type of the response, because axios will infer the type for us.
// and this lib is already typed, so we don't need to do anything else.

// The get method accepts a generic type, which is the type of the data that we expect to receive back from the API. We can use this generic type to specify the type of the response. We can also use this generic type to specify the type of the data that we are sending to the API.

// Let's declare a interface for the user object that we are expecting to receive back from the API.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
} // we can use this interface to specify the type of the response.

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    printUser(response.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  }); // Now we have a type for the response. We can use this type to access the properties of the response. Response Data is a User object.

function printUser(user: User) {
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Phone:", user.phone);
  console.log("Address:", user.address.street);
} // No conflicts, because we are using the User interface. And response.data is a User object.

// And if i access the endpoint /users and i get a list of users, i can use the same interface to specify the type of the response.

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    response.data.forEach(printUser); // we can use the same function to print the user.
  })
  .catch((err) => {
    console.log("ERROR", err);
  }); // Data is an array of User objects.

// Now let's look to another library, called lodash. Lodash is a utility library that provides a bunch of useful functions for working with arrays, objects, strings, etc. We can use lodash to make our code more concise and easier to read. We can also use lodash to make our code more performant. Lodash probably doesn't have a type definition file, so we need to install the type definition file for lodash.

// npm install lodash

// Now we can import lodash and use it in our code.
import _ from "lodash"; // Oh no, we have an error. We need to install the type definition file for lodash.

// npm install @types/lodash --save-dev
// That's how we consume the type definition file for lodash.
// Now we can use lodash in our code.

// Let's use the map function from lodash to transform an array of numbers into an array of strings.
const numbers = [1, 2, 3, 4, 5];
const strings = _.map(numbers, (num) => num.toString()); // We can use the map function to transform an array of numbers into an array of strings.
console.log(strings); // [ '1', '2', '3', '4', '5' ]

// Let's use the filter function from lodash to filter an array of numbers to only include even numbers.
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0); // We can use the filter function to filter an array of numbers to only include even numbers.
console.log(evenNumbers); // [ 2, 4 ]
