import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
  files: File[];
}

const initialState: UploadState = {
  files: [],
};

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setFiles(state, action: PayloadAction<File[]>) {
      state.files = action.payload;
    },
    clearFiles(state) {
      state.files = [];
    },
  },
});

export const { setFiles, clearFiles } = uploadSlice.actions;

export default uploadSlice.reducer;