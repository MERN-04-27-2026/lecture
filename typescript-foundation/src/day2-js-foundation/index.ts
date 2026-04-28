// console.log("day 2 js foundation");

// primitives
let str1 = "str1";
let str2 = str1;

str1 = "new value";
// console.log(str1)
// console.log(str2)

function foo(num1: number) {
  num1 = 200;
}

let number = 1;
foo(number);

// console.log(number)

// reference

const person1: any = { name: "Jack" };
const person2: any = person1;
person2.age = 11;
person1.age = 12;

// passing through function arg
function updatePerson(person: any) {
  person.name = "Joe";
}

updatePerson(person1);
// console.log(person2)

const arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

arr2 = [];
arr2.push(5);

// 1. is it legal?
// console.log(arr1);
// console.log(arr2);

// let a = 12;
// a = 125

// const b = 124124;
// b = 125

const book1 = { title: "1", year: 2000, writer: { name: "Felix" }, awards: [] };
const book2 = { title: "2", year: 2000, writer: { name: "Felix" }, awards: [] };
const book3 = { title: "3", year: 2000 };

// console.log(book1.title === book2.title)
// console.log(book1.year === book2.year)
// console.log(book2 === book3)

// console.log(book1.writer === book2.writer);
// console.log(book1.awards === book2.awards);

// console.log(book1.writer.name === book2.writer.name);
// console.log(book1.awards[0] === book2.awards[0]);

function sum(a, b) {
  return a + b;
}
function sum2(a, b) {
  return a + b;
}

// console.log([] === []);
// console.log({} === {});
// console.log(sum === sum2);

const scores1 = [0, 0, 0, 0, 0, 0, 0];
// const scores2 = [
//     scores1[0],
//     scores1[1],
//     scores1[2],
//     scores1[3],
//     scores1[4],
//     scores1[5],
//     scores1[6],
// ];
// with [], we are creating a new array (new reference)
const scores2 = [...scores1]; //exactly same as the above

scores1[0] = 100;
scores1[1] = 100;

// console.log(scores1);
// console.log(scores2);
const student1 = {
  name: "jack",
  age: 11,
  grade: "A",
  gender: "M",
  address: {
    city: "New York",
    state: "NY",
    a: {
      b: {
        c: {},
      },
    },
  },
};

// const student2 = {
//   name: student1.name,
//   age: student1.age,
//   grade: student1.grade,
//   gender: student1.gender,
//   address: student1.address
// };

const student2 = { ...student1 };
// they both share the same address, because spread, only does a shallow copy
// console.log(student1.address === student2.address)
student1.address.city = "Another City";
// console.log(student2);

// deep copy with JSON.stringify and JSON.parse

// const jsonStr = JSON.stringify(student1);
// console.log(jsonStr);
// const deepCopiedStudent = JSON.parse(
//   '{"name":"jack","age":11,"grade":"A","gender":"M","address":{"city":"Another City","state":"NY","a":{"b":{"c":{}}}}}',
// );
// // construct a new object based on the string, new reference
// console.log(deepCopiedStudent);


// const realDeepCopy = structuredClone(student2)




