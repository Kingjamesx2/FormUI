import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store"; // Ensure these imports match your project structure

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface IRequest {
  token: string | null;
  error: string | null;
  loading: boolean;

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

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setRequest(state, action: PayloadAction<IRequest>) {
      state.token = action.payload.token;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export const { setRequest } = requestSlice.actions;

export default authSlice.reducer;
