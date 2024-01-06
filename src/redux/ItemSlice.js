"use client";
// import { RootState } from "../store";
// import { imgData } from "./../../../constants/index";
import { data } from "../constants/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { imgData } from "../../../constants";

const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("all-data")) || {
      data,
      cartItems: [],
      cartTotalQuantity: 0,
      cartTotalPrice: 0,
    }
  );
};

// const initialState = {
//   amount:0,
//   imgData: imgData.map((item) => ({ ...item, amount: 0 })), // Add 'amount' property to each item
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLocalStorage(),
  reducers: {
    addToCart: (state, { payload }) => {
      let find = state.cartItems.findIndex((item) => item.id === payload.id);
      if (find >= 0) {
        state.cartItems[find].amount += 1;
      } else {
        state.cartItems.push(payload);
      }
      localStorage.setItem("all-data", JSON.stringify(state));

    },
    getCartTotal: (state) => {
      let { cartTotalQuantity, cartTotalPrice } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItems", cartItem);
          const { price, amount } = cartItem;
          console.log(price, amount);
          const itemTotal = price * amount;
          cartTotal.cartTotalPrice += itemTotal;
          cartTotal.cartTotalQuantity += amount;
          return cartTotal;
        },
        {
          cartTotalPrice: 0,
          cartTotalQuantity: 0,
        }
      );
      state.cartTotalPrice = parseInt(cartTotalPrice.toFixed(2));
      state.cartTotalQuantity = cartTotalQuantity;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      localStorage.setItem("all-data", JSON.stringify(state));

    },
    increaseItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      localStorage.setItem("all-data", JSON.stringify(state));
    },
    decreaseItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      localStorage.setItem("all-data", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
// export const selectCount = (state) => state.counter.value;
export default cartSlice.reducer;
