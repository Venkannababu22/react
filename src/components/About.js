import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react"; above or below is fine.

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is a food delivery app built with React.</p>
        <UserClass name={"Venkat-class"} location={"Hyderabad"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is a food delivery app built with React.</p>
//       <UserClass name={"Venkat-class"} location={"Hyderabad"} />
//     </div>
//   );
// };

export default About;
