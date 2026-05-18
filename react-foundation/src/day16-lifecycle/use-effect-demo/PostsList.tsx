import React, { useEffect, useState } from "react";

// fetch an api, and display the data on page
export default function PostsList() {
  // before api call, posts is an empty array
  const [posts, setPosts] = useState([]);

  // api fetching is a side effect, it's calling a 3rd api
  // that's why we put it in useEffect
  useEffect(() => {
    // These three ways of writing are all the same, just different syntax
    // 1. use async function
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      console.log("Data", data)
      setPosts(data.posts);
    }
    fetchPosts();

    // 2. use an IIFE
    // (async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await res.json();
    //   setPosts(data.slice(0, 5));
    // })();

    // 3. use .then
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <div>
      <h3>Post List</h3>
      <ul>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <li key={id}>
              {id}: {title.substring(0, 30)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
