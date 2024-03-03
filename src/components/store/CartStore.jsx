import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
const CartContext = createContext(null); //menyimpan state
const SetCartContext = createContext(null); //menyimpan action /fungsi

const cartReducer = (state, action) => {
  switch (action.type){
    case "ADD_TO_CART":{
      const newItem = action.payload;
      console.log('statetotal', state.total)
      console.log("newItem", newItem)
      console.log("state1", state.cartItems)
      const itemInCart = state.cartItems.find((item) => item.id === newItem.id);
      // console.log("itemInCart", itemInCart)
      // If the item is already in the cart, increment its quantity
      if (itemInCart) {
        const updatedCartItems = state.cartItems.map((item) =>
        item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item is not in the cart, add it
        // console.log("state", state.cartItems)
        return {
          ...state,
          cartItems: [...state.cartItems, newItem]
        };
        
      }
      
    }
    case "UPDATE_TOTAL_PRICE":{
      return {
        ...state,
        total: action.payload.total,
      };
    }

    case "REMOVE_ITEMS":{
      const itemToRemove = action.payload
      console.log("remove",itemToRemove)
      console.log("state2",state.cartItems)
      const updateItemInCart = state.cartItems.filter((item) => item.id !== itemToRemove);
      console.log("updatedCart", updateItemInCart);
      console.log("total", state.total);
      return {
        ...state,
        cartItems: updateItemInCart,
      };
    }
    default:
      throw new Error("Unknown action type: " + action.type);
    }
  };

export function CartProvider({ children }) {
  //menyimpan data state ko local storage 
  const storedCartState = JSON.parse(localStorage.getItem("cartState"));
  const [cartState, dispatch] = useReducer(cartReducer, storedCartState || { cartItems: [], total: 0 });
  //menyimpan data kestate setiap perubahan pada cartState
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={cartState}>
      <SetCartContext.Provider value={dispatch}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCartContext() {
  return useContext(CartContext);
}

export function useSetCartContext() {
  return useContext(SetCartContext);
}
