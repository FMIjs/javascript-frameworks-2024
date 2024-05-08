import { createAsyncThunk } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { RootState } from "./types";
import { usersSlice } from "./user";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    dispatch(counterSlice.actions.incrementByAmount(1));

    if (state.users.error) dispatch(usersSlice.actions.clearError());
    if (state.users.users) dispatch(usersSlice.actions.clearUsers());

    return fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .finally(() => {
        dispatch(counterSlice.actions.decrementByAmount(1));
      });
  }
);
