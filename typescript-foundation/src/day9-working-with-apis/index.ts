import "./axios-play"

// console.log("day 9");

// Promise.resolve(5).((value) => console.log(value));

async function main() {
  // put await before a promise
  // before, await can only be used inside an async function
  // modern: some environments support top-level await (you can await anywhere)

  const p1 = new Promise((res, rej) => {
    if (Math.random() > 0.5) {
      res("resolved");
    } else {
      rej("rejected");
    }
  });
  try {
    const value = await p1;
    console.log(value);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("promise settled");
  }
}

// main();

async function getValue() {
  return 5;
}

// async function app() {
//   const value = await getValue();
//   console.log(value);
// }

// app()

// fetch with promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))

async function fetchPostById(id: string) {
  try {
    // by default, fetch sends a GET request
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("err", err);
  } finally {
    console.log("promise settled");
  }
}

// fetchPostById("1");

const createPost = async (userId: number, title: string, body: string) => {
  const newPost = { userId, title, body };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tell the server you are sending JSON
      },
      // what you send along with the request
      // convert the JSON object into a string: serialization
      // this body will show up in the payload of the network tab
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {}
};

async function updatePostById(id: number, newTitle: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {}
}

document.getElementById("add-post").addEventListener("click", () => {
  createPost(1, "New Title", "lorem ipsum");
});
document.getElementById("delete-post").addEventListener("click", async () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  } catch (err) {}
});
document.getElementById("udpate-post").addEventListener("click", () => {
  updatePostById(2, "New Title");
});



