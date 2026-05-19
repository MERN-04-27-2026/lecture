import { useFetch } from "./useFetch";

export default function Posts() {
  const {
    data: posts, // renaming inside destructure, this has nothing to do with custom hook
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <div>Loader</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </ul>
    </div>
  );
}

// ### old code
// export default function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<null | string>(null);

//   useEffect(() => {
//     (async () =>
//       try {
//         setLoading(true);
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await res.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   if (loading) {
//     return <div>Loader</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Post List</h2>
//       <ul>
//         {posts.map((post) => (
//           <div key={post.id}>{post.title}</div>
//         ))}
//       </ul>
//     </div>
//   );
// }
