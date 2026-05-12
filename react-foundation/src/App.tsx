import "./App.css";
import Album from "./components/Album";
import Button from "./components/Button";

// keep component pure, but only during the rendering process
// 1. given the same props (input), always return the same output (JSX);

const comments = [
  { id: crypto.randomUUID(), content: "like it", upvotes: 100 },
  { id: crypto.randomUUID(), content: "hate it", upvotes: 0 },
];

function App() {
  const sayHi = () => {
    console.log("hi");
  };
  return (
    <>
      <h1>Hello World</h1>
      <p>This is a test</p>
      <p>Another test</p>
      {/* children prop */}
      <Button>btn 1</Button>
      {/* same as above */}
      <Button children="btn 2" />
      {/* passing props */}
      <Album
        name="My abul"
        description="some description"
        // anything other than pure string
        // have to wrap in {}
        artist={{ name: "artist1", age: 30 }}
        price={20.99}
        isAwarded={true}
        songs={["song a", "song b", "song c"]}
        comments={comments}
        sayHi={sayHi}
      />
      {/* <Album
        artist=""
        description=""
        isAwarded={false}
        name=""
        price={10}
        songs={[]}
      /> */}
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </>
  );
}

export default App;

const sum = (a: number, b: number) => {
  let arr = [1, 2, 3, 4];
  let sum = 0;
  for (const num of arr) {
    sum += Math.random();
  }

  return a + b + sum;
};

function Bar() {
  const person = {
    // id: crypto.randomUUID(),
    name: "John",
    age: 0,
  };

  const handleClick = () => {

  }

  for (let i = 0; i < 100; i++) {
    person.age += i;
  }

  return <div>Person id:{person.age}</div>;
}
