import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myorders: [],
  };

  const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        addOrder: (state, action) => {},
        deleteOrder: (state, action) => {},
        updateOrder: (state, action) => {},
    }
});
export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;