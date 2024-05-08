import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  users: any[] | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: UsersState = {
  users: null,
  error: null,
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || null;
      state.isLoading = false;
    });
  },
});
