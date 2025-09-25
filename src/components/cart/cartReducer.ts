// src/components/cart/cartReducer.ts
import type { CartItem } from "@/types/carts";

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

export const initialState: CartState = {
  items: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((i) => i.productId !== action.payload),
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
      };
    }

    default:
      return state;
  }
}
