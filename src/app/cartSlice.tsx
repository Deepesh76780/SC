import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean;
  Cart: any[];
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: false,
  Cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailer: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
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
    subscription: (state, action: PayloadAction<any>) => {
      if (state.currentUser.subscribedPeoples.includes(action.payload)) {
        state.currentUser.subscribedPeoples.splice(
          state.currentUser.subscribedPeoples.findIndex(
            (channelId: any) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currentUser.subscribedPeoples.push(action.payload);
      }
    },
  },
});

export const {
  loginStart,
  subscription,
  loginFailer,
  loginSuccess,
  logout,
  DeleteFromCart,
  AddToCart,
} = userSlice.actions;

export default userSlice.reducer;
