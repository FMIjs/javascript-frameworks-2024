import { createSelector } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { usersSlice } from "./user";
import { RootState } from "./types";

export * from "./store";
export * from "./types";

export function getCounterStore(state: RootState) {
  return state.counter;
}

export function getUsersStore(state: RootState) {
  return state.users;
}

export const actions = {
  counter: counterSlice.actions,
  users: usersSlice.actions,
};

const getUsersStoreUsers = createSelector(
  getUsersStore,
  (state) => state.users
);

export const selectors = {
  counter: {
    value: createSelector(getCounterStore, (state) => state.value),
  },
  users: {
    users: getUsersStoreUsers,
    usersCount: createSelector(getUsersStoreUsers, (users) => users?.length),
    isLoading: createSelector(getUsersStore, (users) => users.isLoading),
  },
};
