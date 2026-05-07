// console.log("day 8");

// const users = fetch("users api");
// 500ms
// console.log(users)

// users.forEach();

// More examples of Async Operators

// it's async, doesn't matter how long it takes
// 1. it will go to the web apis
// 2. once done, pushed into callback queue
// 3. wait for callstack to be empty, then pushed into the callstack
// 4. then run
setTimeout(() => {
  // console.log("something");
}, 0);

// console.log("1")
for (let i = 0; i < 10; i++) {
  // console.log("hello");
}

document.getElementById("delayed-hi").addEventListener("click", (e) => {
  const timeoutId = setTimeout(() => {
    console.log("hello");
  }, 1000);
  clearTimeout(timeoutId);
});

document.getElementById("keeps-saying-hi").addEventListener("click", (e) => {
  const intervalId = setInterval(() => {
    console.log("hello");
  }, 1000);
  clearInterval(intervalId);
});

const p1 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(1); // will be .then 'd
  } else {
    // reject will throw an error
    reject("oops"); // will throw an error, should be catch 'd
  }
});

// .then means: if promise is resolved, we will call the callback function
// with the resolved value
p1.then((value) => {
  // this value is whatever the promise resolves
  //   console.log("value", value);
}).catch((error) => {
  // the error is whatever the promise passes to reject
  //   console.log("error", error);
});

const p2 = new Promise((res, rej) => {
  res("2");
});

p2.then((val) => {
  //   console.log(val);
  // if you return something, that becomes the fulfilled value of the new promise instance
  return "3";
})
  .then((val) => {
    // throw new Error("something went wrong with step 3");
    // console.log(val);
    return "4";
  })
  .then((val) => {
    // throw new Error("something went wrong with step 4");
    // console.log(val);
    return "5";
  })
  .catch((err: unknown) => {
    if (typeof err === "object" && typeof err !== null) {
      //   console.log(err.toString());
    }
  });

// fetch("https://jsonplaceholder.typicode.com/todos/1000")
//   .then((response) => {
//     if (!response.ok) {
//       if (response.status === 404) {
//         throw new Error("Not Found");
//       } else if (response.status === 401) {
//         throw new Error("Please login");
//       } else if (response.status >= 500) {
//         throw new Error("Server Error");
//       }
//     }
//     //   response.json is a function that return a promise of our data
//     return response.json();
//   })
//   .then((data) => {
//     // if prev .then returns a promise, data auto becomes the resolved value
//     // of the promise promise
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// if you know the api will surely succeed, for simple interview coding problem
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all
// concurrently processes multiple promises
// if one fails, all fails
// will resolve after every promise resolves

const user1Url = "https://jsonplaceholder.typicode.com/users/1";
const user2Url = "https://jsonplaceholder.typicode.com/users/2";
Promise.all([
  fetch(user1Url),
  fetch(user2Url),
  new Promise((res) => {
    res(2);
  }),
  Promise.resolve(6),
  Promise.reject("Error"),
])
  .then((values) => {
    const [p1, p2, p3, p4] = values;
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise settled");
  });

// Promise.race
// gets the first one
// user case: auto timeout

// Promise.allSettled
// wait everything to be settled
