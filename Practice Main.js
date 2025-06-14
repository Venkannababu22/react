import React from "react";
import ReactDOM from "react-dom/client";

//Below is the implementation using React.createElement which is very complicated and messy
// It is recommended to use JSX syntax instead for better readability and maintainability.

{
  /* <div id="parent">
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>; */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//   React.createElement(
//     "h1",
//     { id: "heading" },
//     React.createElement("h2", { id: "heading2" }, "Good Morning from React")
//   );




// React.createElement => ReactElement(JS Object) => HTMLElement(render);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "heading" },
//   "Hello World from React"
// );

// console.log(typeof(heading));

//JSX is not HTML is js. It is HTML like syntax that gets converted to React.createElement calls under the hood.
// JSX transpiled before it is sent to the browser. -- Parcel -- Babel is used for this purpose.
// JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render);
// JSX is mix of js and HTML. 

const jsxHeading = <h1 id="heading">Hello World from React using JSX</h1>;

const Title = () => <h2>Hello</h2>


// console.log(typeof jsxHeading); : object
// console.log(jsxHeading); // ReactElement

// React Component
// Class based component - old way
// Functional component - new way

const HeadingComponent = () => <h1>Hello world from React using functional components </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);


