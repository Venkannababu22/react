import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header rendered");

  // if no dependencies are passed, useEffect runs after every render
  // if an empty array is passed, useEffect runs only once after the first render
  // if dependencies are passed, useEffect runs after the first render and whenever the dependencies change

  useEffect(() => {
    console.log("useEffect called in Header");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" width={100} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
