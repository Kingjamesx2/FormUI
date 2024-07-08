import { createSlice } from '@reduxjs/toolkit';

interface annualNonReportState {
  stepData: any[];
  currentStep: number;
}

const initialState: annualNonReportState = {
  stepData: [],
  currentStep: 0,
};

const annualNonReportSlice = createSlice({
  name: 'nonAcademicReport',
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

export const { setStepData, setCurrentStep } = annualNonReportSlice.actions;
export default annualNonReportSlice.reducer;
