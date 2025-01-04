import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
    clearCount(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, clearCount } = counterSlice.actions;
export default counterSlice.reducer;

// Selected
export const selectedCount = (state) => state.counter.count;
