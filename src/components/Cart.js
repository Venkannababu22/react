import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleCLearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  //   console.log(<ItemList />);
  // useSelector is a hook that allows you to extract data from the Redux store state,
  // using a selector function. It subscribes to the Redux store and will re-render
  // the component whenever the selected state changes.

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-center my-4">Cart Items</h1>

      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition-all"
        onClick={handleCLearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="m-2">Cart is empty. Please add Ttems to the cart</h1>
      )}
      <div className="py-6 px-2 border-b border-gray-200 flex justify-between items-start">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
