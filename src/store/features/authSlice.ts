import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  token: string | null;
  username: string;
  name: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  username: "",
  name: "",
  loading: false,
  error: null,
};

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload };
    },
    logout(state) {
      return { ...state, token: null };
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectName = (state: RootState) => state.auth.name;
export const selectUsername = (state: RootState) => state.auth.username;
