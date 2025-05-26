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

//Below is the implementation of the above HTML using React.createElement which is very complicated and messy
// It is recommended to use JSX syntax instead for better readability and maintainability.

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

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
