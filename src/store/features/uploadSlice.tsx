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
      return  { ...state, files: {...action.payload} };
    },
    
  },
});

export const { setFiles} = uploadSlice.actions;

export default uploadSlice.reducer;