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
      console.log(action.payload);
      state.Cart = state.Cart || [];
      state.Cart.push(action.payload);
    },
    SingleProduct: (state, action: PayloadAction<any>) => {
      state.SingleProduct = action.payload;
    },
    DeleteFromCart: (state, action: PayloadAction<any>) => {
      state.Cart = state.Cart || [];
      state.Cart = state.Cart.filter(
        (item) => !item.name.includes(action.payload)
      );
    },
  },
});

export const { DeleteFromCart, AddToCart, SingleProduct } = userSlice.actions;

export default userSlice.reducer;
