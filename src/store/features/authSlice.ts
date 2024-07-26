import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
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
    },

    logout(state) {
      state.token = null;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;
