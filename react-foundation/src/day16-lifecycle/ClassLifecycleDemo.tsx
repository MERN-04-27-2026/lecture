import React from "react";

export default class ClassLifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
  }

  state = {
    count: 0,
  };

  // this will trigger right after component mounts on the DOM
  componentDidMount(): void {
    console.log("component did mount");
  }

  // this will trigger right after component updates (re-render)
  componentDidUpdate(): void {
    console.log("component did update");
  }

  // this will trigger right before component unmounts the DOM
  componentWillUnmount(): void {
    console.log("component will unmount");
  }

  render() {
    console.log("rendering...")
    return (
      <div>
        <h2>ClassLifecycleDemo</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
      </div>
    );
  }
}
