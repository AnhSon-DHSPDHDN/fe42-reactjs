import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./features/count/countSlice";

export const store = configureStore({
  reducer: {
    countReducer: countReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
