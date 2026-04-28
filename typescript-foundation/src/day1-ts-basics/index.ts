// Primitive types
const studentName: string = "John";
const studentAge: number = 124;
const studentIsEnrolled: boolean = true;
const studentPermission: null = null;
const studentBlahblah: undefined = undefined;

// console.log(typeof studentName)
// console.log(typeof studentAge)
// console.log(typeof studentIsEnrolled)
// console.log(typeof studentPermission)
// console.log(typeof studentBlahblah)

let student2Name = "Joe";

// Arrays
let hobbies: string[] = ["Coding", "Gaming"];
let scores: number[] = [100, 98, 95, 145];

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

// const value = sum(1, 2);

// any: wild card
// let randomData: any = [1,2,3]
// randomData = 4;
// randomData.push(4)

let safeData: unknown = "123456";
// safeData = function () {
//   console.log("function");
// };

// if (typeof safeData === "string") {
//   console.log(safeData.charAt(0));
// } else if (typeof safeData === "function") {
//   safeData();
// }

function sayHello(): void {
  console.log("hello");
}

function throwError(): never {
  throw new Error("an error");
}

// Objects
// interface

interface Address {
  street: string;
  zip: string;
  state: string;
  city: string;
}

// union type
type Gender = "male" | "female" | "others" | null;
type evaluationResult = "pass" | "fail" | null;

type Student = {
  name: string;
  age: number;
  gender: Gender;
  isEnrolled: boolean;
  scores: number[];
  hobbies?: string[];
  addresses?: Address[];
  evaluationResult: evaluationResult;
};

let student: Student = {
  age: 11,
  name: "Joe",
  gender: null,
  isEnrolled: true,
  scores: [],
  hobbies: ["coding"],
  addresses: [
    { street: "string", zip: "string", state: "string", city: "string" },
    { street: "string", zip: "string", state: "string", city: "string" },
    { street: "string", zip: "string", state: "string", city: "string" },
  ],
  evaluationResult: "pass",
};
let student2: Student = {
  age: 12,
  name: "Jack",
  gender: "male",
  isEnrolled: true,
  scores: [],
  evaluationResult: null,
};

// intersection type
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: string;
  department: string;
}

type StaffMember = Person & Employee;

// const staff: StaffMember = { }

// Defining the response types for API
// https://jsonplaceholder.typicode.com/todos/1

// GET todos/:id
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Company {
  name: string;
  catchPhrases: string;
  bs: string;
}

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
}

//  Enum
// @ts-ignore
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Employee = "EMPLOYEE",
}

// const role: Role = Role.Admin

// Generics: makes the interfaces and types more reusable
interface Box<T> {
  content: T;
}

const box1: Box<number> = { content: 1 };
const box2: Box<string> = { content: "stirng" };
const box3: Box<{ something: string }> = {
  content: { something: "something" },
};
const box4: Box<boolean> = { content: true };

interface DummyJsonApiResponse<T> {
  data: T;
  total: number;
  skip: number;
  limit: number;
}

interface Product {}
interface Recipe {}

type ProductResponse = DummyJsonApiResponse<Product[]>;
type RecipeResponse = DummyJsonApiResponse<Recipe[]>;
