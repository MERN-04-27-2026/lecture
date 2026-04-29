// 1. Control Flow

// 1.1 Conditional statement

interface Person {
  age: number;
  role: "admin" | "user" | "hacker";
}

const person: Person = {
  age: 50,
  role: "admin",
};
if (person.age >= 18) {
  //   console.log("is adult");
} else if (person.age >= 21) {
  //   console.log("can drink");
} else {
  //   console.log("is a minor, can't drink");
}

// ternary operator / conditional operator
const bool = true;
const output = bool ? "val 1" : "val 2";

const drinkResult =
  person.age >= 21 ? "Yes, you can drink" : "Sorry you're under drinking age";
// console.log(drinkResult);

const person2: Person = { age: 11, role: "user" };

function getAdminSecret(person: Person) {
  const secret = { password: 123, token: "abcxyz" };
  const result = person.role === "admin" ? secret : null;
  return result;
}
// console.log(getAdminSecret(person1))
// console.log(getAdminSecret(person2))

// if(null){

// } else {
//     console.log("falsy");
// }

// Logical OR operator ||
// || operator checks for falsy value
// if the value is falsy, then the 2nd value will be returned
// otherwise, the value itself will be returned
const examResult = { score: 0 };
const score = examResult.score || "Score doesn't exist";
// in this case, using ?? is a better optional here, because 0 is a valid score,
// but a falsy value. So we would mistakenly think score doesn't exist
// console.log(score);

const examResult2 = { score: null };
// const conclusion = examResult.score ? "score exists" : "score doesn't exist";
// ?? operator only checks for null & undefined
// if the value is null or undefined, then the 2nd value will be returned
// otherwise, the value itself will be returned
const score2 = examResult2.score ?? "Score doesn't exist";
// console.log(score2);

// 1.2 loops
const arr = [1, 2, 3, 4, 5];
// initial value; condition to run the code; action after the code
for (let i = 0; i < arr.length; i++) {}

const people: Person[] = [
  { age: 11, role: "user" },
  { age: 12, role: "admin" },
  { age: 12, role: "user" },
  { age: 20, role: "hacker" },
  { age: 13, role: "admin" },
  { age: 14, role: "user" },
];
// standard for loop
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.role === "user") {
    continue; // move on to next loop, skip all code afterward
  }

  if (person.role === "hacker") {
    // console.log("found a hacker, stop the loop");
    break; // exit the loop, stop the iteration
  }

  // logic for checking role
  // if role is admin, then do some complex logic for role update
  //   console.log("complex admin workflow", person.age);
}

// for ... of ... loop
// for simple iteration task
for (const person of people) {
  //   console.log(person);
}

while (false) {}

// 1.3 error handling
try {
  throw new Error("some error");
} catch (err) {
  //   console.log("some error just happen", err);
}

// 2. Operators
// 2.1 arithmetic operators
const quotient = 5 / 2;
// console.log(quotient);

// modular
const remainder = 5 % 2;
// console.log(remainder);
// const isEven = 10 % 2 === 0;
// const isOdd = 11 % 2 === 1;
function isEven(number: number) {
  return number % 2 === 0;
}
// console.log(isEven(10));
// console.log(isEven(11));

let num = 10;
// num = num - 1;
num -= 1;
// console.log(num);
num += 1; // num = num + 1
// console.log(num);
num *= 2; // num = num * 2
// console.log(num);
num /= 2;
// console.log(num);

// 2.2 comparison operators
// loose comparison
// console.log(1 == 1);
// console.log(1 != 2);
// strict comparison
// console.log(1 === 1);
// console.log(1 !== 2);

// console.log(2 > 1)
// console.log(2 >= 2 )
// console.log(2 < 3 )

// 2.3 logical operators
const age = 21;
if (age >= 18 && age < 21) {
  //   console.log("can go to war, but can't drink");
}

// logical OR just needs to satisfy one condition, then the whole thing is truthy
if (true || false) {
  //   console.log("triggered ||");
}

if (!false) {
  //   console.log("triggered !");
}

// 2.4 unary operators
// console.log(typeof "214")
// console.log(typeof 214)
let num2 = 1;
num2++;
num2++;
num2--;
num2--;

// convert a string into number
const numStr = "123";
// const numStr = "diwquhdqw"; // will result in NaN
// console.log(typeof numStr);
const convertedNum = +numStr;
// const convertedNum = Number(numStr);
// console.log(convertedNum);
// console.log(typeof convertedNum);

// 2.5 string operators
const firstName = "John";
const lastName = "Doe";
const theAge = 10;
const job = "developer";

// string concatenation with +
const fullName = firstName + " " + lastName;
// const selfIntro =
//   "Hi, my name is " +
//   firstName +
//   " " +
//   lastName +
//   "i am" +
//   theAge +
//   "years old";

// string literal / string template / interpolation
// backtick symbol ` `, top left of your keyboard
const selfIntro = `Hi, my name is ${firstName} ${lastName}, I am ${theAge} years old, i'm a ${job}`;
// console.log(selfIntro);

// string operators
const chars = "abcdefg";
// you can traverse a string, by using index for the character
for (let i = 0; i < chars.length; i++) {
  const char = chars.charAt(i);
  //   console.log(char);
}

// for(const a of chars){
//     console.log(a);
// }

// console.log(chars.includes('a'))
// console.log(chars.substring(3,5))
// console.log(chars.toLowerCase());
// console.log(chars.toUpperCase());
//
// console.log(" qiowej dwqioj    ".trim());

const obj = { a: 1, b: 2 };
// console.log("obj", obj);
// console.log("obj.a", obj.a);

// 3. Data access & manipulation
// 3.1 optional chaining operator

interface Employee {
  name: string;
  ssn?: string;
  address?: {
    city: string;
    zip: string;
  };
}

const employees: Employee[] = [
  {
    name: "John",
    address: { zip: "20001", city: "City A" },
    ssn: "111-22-3333",
  },
  { name: "Doe" },
  { name: "Joe", address: { zip: "20001", city: "City C" } },
  { name: "Jane", ssn: "111-22-4444" },
];

for (const employee of employees) {
  if (employee.ssn) {
    // console.log(employee);
  } else {
    // console.log();
  }
  // if something is undefined or null, we stop right there, and return undefined
  //   console.log(employee.address?.zip);
}

interface Person3 {
  a?: {
    b?: {
      c?: {
        d: number;
      };
    };
  };
}

const person3: Person3 = {
  a: {
    b: {
      c: {
        d: 2,
      },
    },
  },
};
const person32: Person3 = {};

// console.log(person32?.a?.b?.c?.d)

// Destructuring
interface Book {
  title: string;
  year: number;
  author: string;
  sales: number;
  price: number;
}
const book1: Book = {
  title: "name",
  year: 2000,
  author: "jack",
  sales: 2000000,
  price: 5.2,
};

// function getBookSummary(book: Book) {
//   // before destructure
//   //   console.log(book.title);
//   //   console.log(book.year);
//   //   console.log(book.author);
//   //   console.log(book.sales);
//   //   console.log(book.price);

//   // after destructure
//   const { author, sales, title, year, price } = book;

//   console.log(title);
//   console.log(year);
//   console.log(author);
//   console.log(sales);
//   console.log(price);
// }

// getBookSummary(book1);

function doSomeBookStuff() {
  const author = "the author";
  const price = 12421;

  // rename while destructuring
  const { title, year, author: bookAuthor, sales } = book1;
  console.log(bookAuthor);
}

const numbers = [1, 2, 3, 4, 5];
const [aaaaaa, b, c, d, e] = numbers;
console.log(aaaaaa, b, c, d, e);
