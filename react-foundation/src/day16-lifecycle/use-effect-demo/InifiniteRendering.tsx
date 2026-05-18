import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function InifiniteRendering() {
  const [posts, setPosts] = useState<Post[]>([]);

  // BUG: No dependency array → runs after EVERY render.
  // Each fetch calls setPosts → triggers a re-render → triggers the effect again → infinite loop.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setPosts(data); // causes re-render
      });
  }); // <-- missing [] dependency array is the root cause


  console.log("posts",posts);
  
  return (
    <div>
      <h2>Infinite Rendering Demo</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
