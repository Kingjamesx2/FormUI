import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

interface AuthState {
  token: string | null;
  name: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
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
      state.token = action.payload.token;
      state.name = action.payload.name;
    },

    logout(state) {
      state.token = null;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectName = (state: RootState) => state.auth.name;