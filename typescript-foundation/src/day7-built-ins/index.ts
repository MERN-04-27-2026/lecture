console.log("day 7");

// Array built in methods:

const arr = [9, 8, 7, 6, 1, 2, 3, 4, 5, 6, 7];

// traverse an array: forEach
arr.forEach((elem, index) => {
  // console.log(elem);
});

// map: returns a new array (of any type)
// does not modify the original array
// callback fn can return any type
const double = arr.map((num, idx) => num * 2);

// filter: returns a new array, that filters out some elements
// callback function: boolean; true => keep it; false => remove it
const evenNumber = arr.filter((num, i) => num % 2 === 0);
// console.log(evenNumber);

const nums = [1, 2, 3, 4];
// reduce
// let sum = 0;
// for (const num of nums) {
//   sum += num;
// }
// console.log(sum);

const sum = nums.reduce((accumulation, currentElem) => {
  // console.log(accumulation, currentElem);
  // what you return here becomes the next loop's accumulation
  return accumulation + currentElem;
}, 0);
// console.log("sum", sum);

// nums.reduce((sum, num) => sum + num, 0); // cleaner syntax

const str = "aabbccc";
// expected output: {a: 2, b: 2, c:3}

// const freq = {}
// for(const c of str){
//   // checks the key using a variable
//   if(freq[c] !== undefined){
//     freq[c]++
//   } else {
//     freq[c] = 1
//   }
// }
// console.log(freq)
const freq = str.split("").reduce((accu, curr) => {
  if (accu[curr] !== undefined) {
    accu[curr]++;
  } else {
    accu[curr] = 1;
  }
  return accu;
}, {});

// console.log(freq);

// Basic array methods
// push: add an element at the end
// modified the original array reference
arr.push(5);
arr.pop(); // removes the last element, and return it
arr.shift(); // Removes the first element from an array and returns it
arr.unshift(); // add new elem at the beginning

// reverse an array
const arr2 = [1, 2, 3, 4, 5];
// arr2.reverse() // modifies the original array
// console.log(arr2);

// get a segment of the array, return a new array, doesn't modify original
const chunk = arr2.slice(1, 3);
// console.log(chunk);
// useful for pagination

const arr3 = [1, 2, 7, 8, 5, 4, 5];
// sort uses quicksort algo, n log n
// arr3.sort((a, b) => {
//   return a-b
// });

// if you don't want to modify the original array after sorting
// make a copy
const arr4 = [...arr3].sort((a, b) => {
  // return positive / negative, sort two ways
  // return 0, no sort for these 2 elements
  return a - b;
});

const people = [
  { name: "joh doe", age: 14 },
  { name: "jane john", age: 50 },
  { name: "john 2", age: 7 },
  { name: "john wick", age: 9 },
  { name: "johnny", age: 10 },
];
// sort by age
// people.sort((p1, p2) => {
//   return p1.age - p2.age;
// });
// sort by name
// people.sort((p1, p2) => {
//   return p2.name.localeCompare(p1.name);
// });

// console.log(people);

// find: find an element in array,
// find "john wick"

// if you are 100% sure you will find the element, use ! at the end
// to tell typescript you will find it
const johnWick = people.find((person) => person.name === "john wick 22")!;
// will return the element if found; else return undefined

// some other methods
// some, every, find, includes

// Data Structures
// set: everything inside is unique
const dupedArr = [1, 2, 2, 2, 2, 2, 4, 5, 5, 6, 6, 6, 6, 6];
const set = new Set(dupedArr);
// console.log(set);

// pretty much the same as an object: key value pairs
const map = new Map();
// insertion order is tracked
// better performance
// read the size
// use any variable as a key
// iteration based on insertion order

// String methods
const string = "hello world";
// string.charAt(0);
// string.substring(1,7)
// string.slice(4,6);

const email = " email@gmail.com    ";
// console.log(email.trim());
const query = "JOHN WICK";
people.find((person) =>
  //  if you don't care about case sensitivity
  person.name.toLowerCase().includes(query.toLowerCase()),
);
// query.toLowerCase();
// query.toUpperCase();
const wholeStr = "1,2,3,4,5,6,7";
// console.log(wholeStr.split(","));

// Globals
const date = new Date("05/05/2026");
// console.log(date.toISOString());
// console.log(date.getTime()); //gets the milliseconds since epoch date
// console.log(Date.now());

// Math class

const quantity = 5.55;
const stockPrice = 125.24;
const totalPrice = quantity * stockPrice;
// console.log(totalPrice);

// console.log(Math.floor(totalPrice));
// console.log(Math.ceil(totalPrice));

// console.log(Math.abs(-100));
// console.log(Math.pow(4,2));

// generate number within a range
const max = 10;
const min = 1;
const output = Math.random() * (max - min) + min;
// Result: A number \(\ge min\) and \(<max\).

// deep clone
// structuredClone

// generating an id:
// do not use Math.random, Date.now
const books = [
  { name: "book 1", id: crypto.randomUUID() },
  { name: "book 2", id: crypto.randomUUID() },
];
// console.log(books);
