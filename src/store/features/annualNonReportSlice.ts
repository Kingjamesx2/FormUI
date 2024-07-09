import { createSlice } from '@reduxjs/toolkit';

interface IStategicGoals {
  question: string;
  answer: string;
}

interface annualNonReportInitialState {
  stepData: any[];
  department: string;
  missionStatement: string;
  strategicGoals: IStategicGoals[]
  currentStep: number;
}

const initialState: annualNonReportInitialState = {
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
