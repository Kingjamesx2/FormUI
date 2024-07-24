import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import annualReportReducer from './features/annualReportSlice';
import annualNonReportReducer from './features/annualNonReportSlice';
import recordsReportReducer from "./features/KeyStatisticsreportSlice/recordsReportSlice";
import hrReportReducer from "./features/KeyStatisticsreportSlice/HRReportSlice";
import financeReportReduce from "./features/KeyStatisticsreportSlice/financeReportSlice";
import authReducer from "./../store/features/authSlice";
import userReducer from "./../store/features/userSlice";
import { baseAPI } from "./services/baseAPI";
import { authAPI } from "./services/authAPI";

export const store = configureStore({
  reducer: {
    annualReport: annualReportReducer,
    nonAcademicReport: annualNonReportReducer,
    recordsReport: recordsReportReducer,
    hrReport: hrReportReducer,
    financeReport: financeReportReduce,
    auth: authReducer,
    user: userReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
    // [authAPI.reducerPath]: authAPI.reducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(
      baseAPI.middleware,
      authAPI.middleware
    ))
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
