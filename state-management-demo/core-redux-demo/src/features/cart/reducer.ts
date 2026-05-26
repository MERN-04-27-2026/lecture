import type { CartState } from "./types";
import type { CartAction } from "./actions";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
} from "./actions";

const initialState: CartState = {
  items: [],
};

// you will never call this reducer function yourself
// you will dispatch an action to the store
// and the store will be calling this reducer function
export const cartReducer = (
  state = initialState, // this state is passed by store
  action: CartAction, // this is the action that you passed
): CartState => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            thumbnail: action.payload.thumbnail,
            quantity: 1,
          },
        ],
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    // the action.type matches the CLEAR_CART,
    case CLEAR_CART:
      // it will return the new state
      return {
        // copy the other state, 
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
