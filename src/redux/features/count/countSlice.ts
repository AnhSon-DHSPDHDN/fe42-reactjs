import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCountState = {
  count: number;
};

const initialState: TCountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(action, "action");
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;
export const countReducer = countSlice.reducer;
