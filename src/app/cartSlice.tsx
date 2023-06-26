import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  Cart: any[];
  SingleProduct: any;
}

const initialState: UserState = {
  Cart: [],
  SingleProduct: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<any>) => {
      state.Cart = state.Cart || [];
      state.Cart.push(action.payload);
    },
    SingleProduct: (state, action: PayloadAction<any>) => {
      state.SingleProduct = action.payload;
    },
    QuantityIncrement: (state, action: PayloadAction<any>) => {
      const item = state.Cart.find((item) => item.name === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    QuantityDecrement: (state, action: PayloadAction<any>) => {
      const item = state.Cart.find((item) => item.name === action.payload);
      if (item.quantity === 1) return;
      if (item) {
        item.quantity -= 1;
      }
    },
    DeleteFromCart: (state, action: PayloadAction<any>) => {
      state.Cart = state.Cart || [];
      state.Cart = state.Cart.filter(
        (item) => !item.name.includes(action.payload)
      );
    },
  },
});

export const {
  DeleteFromCart,
  AddToCart,
  SingleProduct,
  QuantityIncrement,
  QuantityDecrement,
} = userSlice.actions;

export default userSlice.reducer;
