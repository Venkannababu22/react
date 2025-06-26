import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("Header rendered");

  // if no dependencies are passed, useEffect runs after every render
  // if an empty array is passed, useEffect runs only once after the first render
  // if dependencies are passed, useEffect runs after the first render and whenever the dependencies change

  useEffect(() => {
    console.log("useEffect called in Header");
  }, [btnName]);

  return (
    <div className="flex justify-between items-center shadow-inner p-4  bg-violet-100 sm:bg-yellow-100 lg:bg-gray-950/5 ">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL} alt="Logo"  />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between items-center p-4 m-4 ">
          <li className="px-4">Online Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:bg-violet-300 rounded-md p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-violet-300 rounded-md p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-violet-300 rounded-md p-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:bg-violet-300 rounded-md p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-violet-300 rounded-md p-2">Cart</li>
          <button
            className="hover:bg-violet-300 rounded-md p-2 m-1"
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
