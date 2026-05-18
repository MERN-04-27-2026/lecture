import React, { use, useEffect, useState } from "react";

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export default function PaginatedPostsList() {
  const [postRes, setPostRes] = useState<null | PostsResponse>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      // if page is 1, skip 0
      // if page is 2, skip 10
      // if page is 3, skip 20
      const LIMIT = 10;
      const skip = (page - 1) * LIMIT;
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`,
        );
        const data = await res.json();
        console.log("Data", data);
        setPostRes(data);
      } catch (err) {
        // console.log(err);
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [page]);

  const handlePrev = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    const { limit, total } = postRes;
    if (page >= Math.ceil(total / limit)) return;

    setPage((prev) => prev + 1);
  };

  if (loading || postRes === null) {
    return <div>loading...</div>;
  }

  if (err) {
    return <div>Err: {err}</div>;
  }

  const { posts, total, limit } = postRes;

  return (
    <div>
      <h3>Paginated Post List</h3>
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
      <button disabled={page <= 1} onClick={handlePrev}>
        Prev Page
      </button>
      <button disabled={page >= Math.ceil(total / limit)} onClick={handleNext}>
        Next Page
      </button>
    </div>
  );
}
