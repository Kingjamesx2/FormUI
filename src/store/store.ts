import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import annualReportReducer from './features/annualReportSlice';
import annualNonReportReducer from './features/annualNonReportSlice';
import recordsReportReducer from "./features/recordsReportSlice";
import hrReportReducer from "./features/HRReportSlice";
import financeReportReduce from "./features/financeReportSlice";
import authReducer from "./../store/features/authSlice";
import userReducer from "./../store/features/userSlice";
import uploadReducer  from "./features/uploadSlice"
// import reportSlice from "./features/reportSlice";
import { baseAPI } from "./services/baseAPI";
import { authAPI } from "./services/authAPI";
import { annualReportAPI } from "./services/annualReportAPI";
import { annualNonReportAPI } from "./services/annualNonReportAPI";

export const store = configureStore({
  reducer: {
    annualReport: annualReportReducer,
    nonAnnualReport: annualNonReportReducer,
    recordsReport: recordsReportReducer,
    hrReport: hrReportReducer,
    financeReport: financeReportReduce,
    auth: authReducer,
    user: userReducer,
    upload: uploadReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
    // [authAPI.reducerPath]: authAPI.reducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(
      baseAPI.middleware,
      authAPI.middleware,
      annualReportAPI.middleware,
      annualNonReportAPI.middleware
    ))
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
