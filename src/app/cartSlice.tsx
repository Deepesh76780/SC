import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  Cart: any[];
}

const initialState: UserState = {
  Cart: [],
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
    DeleteFromCart: (state, action: PayloadAction<any>) => {
      state.Cart = state.Cart || [];
      state.Cart = state.Cart.filter(
        (item) => !item.name.includes(action.payload)
      );
    },
  },
});

export const { DeleteFromCart, AddToCart } = userSlice.actions;

export default userSlice.reducer;
