import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import annualReportReducer from './features/annualReportSlice';
import annualNonReportReducer from './features/annualNonReportSlice';
import recordsReportReducer from "./features/KeyStatisticsreportSlice/recordsReportSlice";
import hrReportReducer from "./features/KeyStatisticsreportSlice/HRReportSlice";
import financeReportReduce from "./features/KeyStatisticsreportSlice/financeReportSlice";
import authReducer from "./../store/features/authSlice";
import userReducer from "./../store/features/authSlice";

export const store = configureStore({
  reducer: {
    annualReport: annualReportReducer,
    nonAcademicReport: annualNonReportReducer,
    recordsReport: recordsReportReducer,
    hrReport: hrReportReducer,
    financeReport: financeReportReduce,
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
