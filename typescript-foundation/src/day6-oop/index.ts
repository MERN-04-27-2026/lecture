function sayHi() {
  console.log(`Hi my name is ${this.name}, my age is ${this.age}`);
}

const person1 = {
  name: "Jack",
  age: 11,
  sayHi,
};

const person2 = {
  name: "Joe",
  age: 12,
  sayHi,
};

// person1.sayHi();
// person2.sayHi();

class Book {
  title: string;
  author: string;
  year: number;
  isRead: boolean;
  //   getSummary: () => void;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = false;
    // this.getSummary = function () {
    //   console.log(`${this.title} is written by ${this.author}`);
    // };
  }

  // prototype method / instance methods
  getSummary() {
    console.log(`${this.title} is written by ${this.author}`);
  }

  read() {
    this.isRead = true;
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }

  // static methods
  static getBestBook(...books: Book[]): Book | null {
    // the standard is the oldest book is the best
    let best: Book | null = null;
    for (const book of books) {
      if (best === null) {
        best = book;
      }

      if (book.year < best.year) {
        best = book;
      }
    }
    return best;
  }
}

const book1 = new Book("Title 1", "Jack", 2001);
const book2 = new Book("Title 2", "Jane", 2002);
const book3 = new Book("Title 3", "Jane", 1900);

// console.log(book1);
// console.log(book2);
// console.log(book1.getSummary === book2.getSummary);

// book1, book2, book3's prototype is: Book.prototype

// when book1 calls getSummary, it doesn't have the function
// so it will search inside its prototype: Book.prototype
// Book.prototype has the function getSummary, so book1 will be able to call it
// book1.getSummary();

// book4 is not an instance of class Book
// it doesn't have Book.prototype's methods
const book4 = { title: "Title 4", author: "Joe", year: 2004 };
// book4.getSummary()
// to check, you use instanceof
// console.log(book1 instanceof Book);
// console.log(book4 instanceof Book);
// console.log([] instanceof Array);

// console.log(Book.getBestBook(book1, book2, book3));
// static methods belongs to the class itself
// Book.getBestBook() ✅
// instance has access to prototype methods
//  book1.getSummary() ✅
// the class itself cannot call prototype methods
// Book.getSummary() ❌
// instances cannot call static methods
// book1.getBestBook() ❌

// built in classes and instance and static methods
// isArray belongs to Array class, not array instance
// console.log(Array.isArray([])) ✅
// [1,2,3].isArray() ❌

// this buttons elem looks like an array
const buttons = document.querySelectorAll("button");
console.log("buttons instanceof NodeList", buttons instanceof NodeList);
console.log("buttons instanceof Array", buttons instanceof Array);
// buttons is not an instance of Array, so it can't call map
// buttons.map()// ❌

console.log("person1 instanceof Function", person1 instanceof Function);
// person1.bind(); // ❌
function foo(){}
console.log("person1 instanceof Function", foo instanceof Function);
// foo.bind() // ✅


// [].map()
// [].isArray()


// Object.entries(person1)
