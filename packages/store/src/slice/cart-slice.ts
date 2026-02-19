import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Product = {
  uuid: string;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  description: string;
};

type CartItem = {
  uuid: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
};

type CartState = {
  items: CartItem[];
  total: number;
  itemCount: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existItem = state.items.find((item) => item.uuid === product.uuid);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({
          uuid: product.uuid,
          title: product.title,
          price: product.price,
          image: product.images[0] ?? "",
          quantity: 1,
          description: product.description,
        });
      }
      cartSlice.caseReducers.calculateTotal(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ uuid: string; quantity: number }>,
    ) => {
      const { uuid, quantity } = action.payload;
      const product = state.items.find((p) => p.uuid === uuid);
      if (product) {
        product.quantity = Math.max(0, quantity);
        if (product.quantity === 0) {
          state.items = state.items.filter((p) => p.uuid !== uuid);
        }
      }
      cartSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      state.itemCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    removeFromCart: (state, action: PayloadAction<{ uuid: string }>) => {
      const { uuid } = action.payload;
      state.items = state.items.filter((p) => p.uuid !== uuid);
      cartSlice.caseReducers.calculateTotal(state);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
