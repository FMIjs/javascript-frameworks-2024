import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { usersSlice } from "./user";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    users: usersSlice.reducer,
  },
});
