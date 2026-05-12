import "./Album.css";

// Do not ever do: // function Albumt(a,b,c,d){}
// this is wrong destructure of the props

interface Artist {
  name: string;
  age: number;
}

interface Comment {
  id: string;
  content: string;
  upvotes: number;
}

interface AlbumProps {
  name: string;
  artist: Artist;
  description: string;
  price: number;
  isAwarded: boolean;
  songs: string[];
  comments: Comment[];
  sayHi: () => void;
}

// function component always takes one argument: props, which is an object
// directly destructuring in function argument
export default function Album({
  name,
  artist,
  description,
  price,
  isAwarded,
  comments,
  songs,
}: AlbumProps) {
  // console.log("props", props);
  // const { name, artist, description, price } = props;
  // const name = props.name;
  // const artist = props.artist;
  // const description = props.description;
  // const price = 20.99;

  // can extract JSX into a variable in the function body
  const info = (
    <footer>
      <div>
        <b>some other important info: </b>
      </div>
      <div>{description}</div>
    </footer>
  );

  // JSX can render string, number directly in JSX
  // it cannot render objects; or else it will throw error
  console.log("artist", artist);

  // do not write () after return, let the formatter add it for you
  return (
    <div className="album">
      <div>
        <div>Album name: {name} </div>
        {/*  */}
        <div>
          Artist: {artist.name} is {artist.age} years old
        </div>
        <div>Price: ${price}</div>
        {/* conditional rendering */}
        {/* 1. ternary operator */}
        <div>Award Status: {isAwarded ? "🏆" : "❌"}</div>
        {/* 2. && */}
        {isAwarded && <div>has won awards</div>}
        <div>
          <h3>A list of songs</h3>
          <ul>
            {songs.map((song, index) => {
              // key is added to the first element after the return
              // key needs to be unique

              return <li key={song}>{song}</li>;
            })}
            {/* ❌: do not use this. it is correct, actually good in many ways */}
            {/* but don't use it to avoid confusion */}
            {/* {songs.map((song) => (
              <li>{song}</li>
            ))} */}
          </ul>
        </div>
        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <div>{comment.content}</div>
                  <div>{comment.upvotes}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {info}
    </div>
  );
}

// anything we can put on right side of an =
// is called an expression

// we can only put expression inside { }
const name = "qw";
// name is an express
const something = name;
