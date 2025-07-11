import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

   const cartItems = useSelector((store) => store.cart.items);
  // useSelector is a hook that allows you to extract data from the Redux store state,
  // using a selector function. It subscribes to the Redux store and will re-render
  // the component whenever the selected state changes.


  // if no dependencies are passed, useEffect runs after every render                       
  // if an empty array is passed, useEffect runs only once after the first render
  // if dependencies are passed, useEffect runs after the first render and whenever the dependencies change


  return (
    <div className="flex justify-between items-center shadow-md px-6 py-4 bg-white">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4 text-sm font-medium text-gray-700">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="hover:text-orange-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/grocery">Grocery</Link>
          </li>
           <li className="hover:text-orange-500 transition">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="ml-2 px-3 py-1 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-semibold text-gray-800 px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
