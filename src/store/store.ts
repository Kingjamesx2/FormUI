import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import annualReportReducer from './features/annualReportSlice';
import annualNonReportReducer from './features/annualNonReportSlice';
import recordsReportReducer from "./features/KeyStatisticsreportSlice/recordsReportSlice";
import hrReportReducer from "./features/KeyStatisticsreportSlice/HRReportSlice";
import financeReportReduce from "./features/KeyStatisticsreportSlice/financeReportSlice"

export const store = configureStore({
  reducer: {
    annualReport: annualReportReducer,
    nonAcademicReport: annualNonReportReducer,
    recordsReport: recordsReportReducer,
    hrReport: hrReportReducer,
    financeReport: financeReportReduce,

    // statisticReport: KeyStatisticsReport,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;