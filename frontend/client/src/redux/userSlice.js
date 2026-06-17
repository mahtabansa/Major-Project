import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    addToCart: [],
    items:null
  },

  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setAddToCart: (state, action) => {
      state.addToCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.addToCart = state.addToCart.filter(
        (item) => item.id !== action.payload,
      );
    },
    setItems:(state,action)=>{
      state.items = action.payload
    }
  },
});
export const { setUser, setAddToCart,removeFromCart ,setItems} = userSlice.actions;
export default userSlice.reducer;
