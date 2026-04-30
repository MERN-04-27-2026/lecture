// definition: function keyword, function name, () for argument, body { }
// ALWAYS USE THIS DEFINITION 1.
function sum(a: number, b: number): number {
  // returns the function
  return a + b;

  console.log("unreachable block of code");
}

// const sum2 = function(a,b){
//     return a + b;
// }

function foo(){
    return sum(1,2)
}

// // console.log(typeof foo);
// // console.log(typeof foo());

// function sayHello() {
//   console.log("hello");
// }

// setTimeout(sayHello, 2000);

// document.getElementById("btn").addEventListener("click", sayHello);

interface Person {
  name: string;
  age: number;
}

// this function only takes 1 argument
// destructure in the function parameter
// important for React
function checkPerson({ age, name }: Person) {
  return age >= 18;
}

// function sumPlus(a: number, b: number, c: number) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   return a + b + c;
//   1+2+undefined
// }

// console.log(sumPlus(1, 2));

// what if i want a function to have unspecified number of parameters/arguments?
function sumPlus(...numbers: number[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const user = {
  id: 1,
  name: "abc",
  age: 11,
  status: "active",
  password: "abc",
  ssn: "12312312",
};

// inside destructure, the rest operator gets the remaining properties
const { password, ssn, ...safeData } = user;

// console.log(safeData);

// default value in argument, if nothing is passed
function createUser(name: string, isActive = true) {
  //   return { name: name, isActive: isActive };
  // in this case, key and value are spelt the same, so we can simplify with
  return { name, isActive };
}

// const user1 = createUser("Jack", false);
// const user2 = createUser("John");

// arrow function syntax
const sumArrow = (a: number, b: number): number => {
  // explicit return:
  // you have a function body, and have a return keyword
  return a + b;
};

// implicit return:
// if function is only doing one thing:
// then you can remove body and return keyword
const sumArrow2 = (a: number, b: number): number => a + b;

// implicit return for object
// wrap the {} inside (), to tell JS it's object, and not a function body;
const createUser2 = (name: string) => ({ name });

// callback

function higherOrderFunction(callback) {
  //   if (Math.random() > 0.5) {
  callback();
  //   }
}

function alertSomething() {
  alert("qowijd");
}

// higherOrderFunction(alertSomething);

// the callback function could be anonymous, if we don't need it anywhere else
higherOrderFunction(() => {
  //   console.log("hello");
});

// setTimeout(() => {}, 2000);

// normal function behavior without closure
// when function returns, it resets everything inside (execution context)
// because there's no way to access what's inside anymore
function c() {
  let count = 0;
  const arr = [];
  count++;
  return count;
}

function createCounter(name: string = "Counter") {
  // outer function's closure
  let count = 0;

  const add = () => count++;

  const minus = () => count--;

  const reset = () => (count = 0);

  const logCount = () => {
    console.log(`${name}: ${count}`);
  };

  return { add, minus, reset, logCount };
}

const counter1 = createCounter("Foo");
counter1.add();
counter1.add();
// counter1.logCount();

const counter2 = createCounter("Bar");
// counter2.logCount();

// res.add();
// console.log(res.getCount());
// res.add();
// res.add();
// res.add();
// console.log(res.getCount());
// res.reset();
// console.log(res.getCount());

// IIFE, it's anonymous function that's called right away
(() => {
  // you can create variables that will be discarded once function is done
  //   console.log("hi");
})();

// currying: chaining and calling functions
function x(a: number) {
  return function y(b: number) {
    return function z(c: number) {
      console.log(a, b, c);
    };
  };
}

x(1)(2)(3);
