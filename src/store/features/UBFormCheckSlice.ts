import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Adjust the path according to your project structure

export interface IUBFormChecksState {
  _id: string;
  name: string;
  reportType: string;
  loading: boolean;
  error: string | null;
}

//initial State
const UBFormChecksInitialState: IUBFormChecksState = {
  _id: "",
  name: "",
  reportType: "",
  loading: false,
  error: null,
};

const UBFormChecksSlice = createSlice({
  name: "UBFormChecks",
  initialState: UBFormChecksInitialState,
  reducers: {
    setUBFormChecksState: (state, action: PayloadAction<IUBFormChecksState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUBFormChecksState } = UBFormChecksSlice.actions;

export const selectUBFormChecks = (state: RootState) => {
    return state.ubFormChecks;
}

export default UBFormChecksSlice.reducer

