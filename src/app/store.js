import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../features/counter/counterSlice";

const rootRenducer = {
  count: couterReducer,
};

const store = configureStore({
  reducer: rootRenducer,
});

export default store;
