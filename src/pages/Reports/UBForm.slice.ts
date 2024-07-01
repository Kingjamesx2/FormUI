import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AnnualAcademicReportStep1 from "../../components/reports/annual/annual-academic-report/step1/AnnualAcademicReportStep1";
import AnnualAcademicReportStep2 from "../../components/reports/annual/annual-academic-report/step2/AnnualAcademicReportStep2";
import AnnualAcademicReportStep3 from "../../components/reports/annual/annual-academic-report/Step3/AnnualAcademicReportStep3";
import AnnualAcademicReportStep4 from "../../components/reports/annual/annual-academic-report/step4/AnnualAcademicReportStep4";
import AnnualAcademicReportStep5 from "../../components/reports/annual/annual-academic-report/step5/AnnualAcademicReportStep5";

interface IUBFormProp{
  step1Data: any;
  step2Data: any;
  step3Data: any;
  step4Data: any;
  step5Data: any;   
}

const initialState: IUBFormProp = {
  step1Data: {},
  step2Data: {},
  step3Data: {},
  step4Data: {},
  step5Data: {},
};

  const UBFormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      updateStep1Data(state, action: PayloadAction<any>) {
        state.step1Data = action.payload;
      },
      updateStep2Data(state, action: PayloadAction<any>) {
        state.step2Data = action.payload;
      },
      updateStep3Data(state, action: PayloadAction<any>) {
        state.step3Data = action.payload;
      },
      updateStep4Data(state, action: PayloadAction<any>) {
        state.step4Data = action.payload;
      },
      updateStep5Data(state, action: PayloadAction<any>) {
        state.step5Data = action.payload;
      },
    },
  });

  export const {
    updateStep1Data,
    updateStep2Data,
    updateStep3Data,
    updateStep4Data,
    updateStep5Data,
  } = UBFormSlice.actions;

  export default UBFormSlice.reducer;
