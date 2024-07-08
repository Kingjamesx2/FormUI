// slices/annualReportSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AnnualReportState {
  stepData: any[];
  currentStep: number;
}

const initialState: AnnualReportState = {
  stepData: [],
  currentStep: 0,
};

const annualReportSlice = createSlice({
  name: 'annualReport',
  initialState,
  reducers: {
    setStepData: (state, action) => {
      state.stepData[action.payload.step] = action.payload.data;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setStepData, setCurrentStep } = annualReportSlice.actions;
export default annualReportSlice.reducer;
