import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newitem = action.payload;
      const existingitem = state.cartItems.find(
        (item) => item.id === newitem.id
      );
      state.totalQuantity++;
      if (!existingitem) {
        state.cartItems.push({
          id: newitem.id,
          image: newitem.image,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          title: newitem.title,
        });
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      } else {
        toast.success("add a new product", {
          position: "bottom-left",
        });
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
        existingitem.quantity++;
        existingitem.totalPrice =
          Number(existingitem.totalPrice) + Number(newitem.price);
      }
      // state.cartTotalAmount = state.cartItems.reduce(
      //   (total, item) => total + Number(item.price) * Number(item.quantity)
      // );
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = quantity;
      state.cartTotalQuantity = total;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getTotals, decreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
