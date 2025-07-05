import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], 
  },
  reducers: {
    addItem: (state, action) => {

      //Redux toolkit allows us to write "mutating" logic in reducers,
      // it uses the Immer library to convert this into immutable updates.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      

      //Ex: assumes 
      // originalState = ["venky"];
      // console.log(state) ==> ["venky"];
      //console.log(current(state)) ==> ["venky"];
      // state = []
      // console.log(state) ==> []

      // here we are mutating the local variable state,
      // which is a reference to the original state in Redux but not the original state itself.

      //mutate the state directly
        state.items.length = 0;

        //Either mutate a state like above or return a new state like below
        //  return {items: []};

        // state = ["venky"];
        // here we are not mutating the state, we are referencing the state
        // to a new array, which is not allowed in Redux.
        // Alternatively, you can also use:
    //   state.items = [];
    },
  },
});

// The above code is a Redux slice for managing a shopping cart.
// It defines the initial state, actions to add, remove, and clear items in the cart,
// and uses the createSlice function from Redux Toolkit to generate action creators and a reducer.
// The exported actions can be dispatched to modify the cart state in a Redux store.

// {
//     actions: {
//         addItem, removeItem, clearCart
//     },
//     reducers
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
