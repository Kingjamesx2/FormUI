import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import annualReportReducer from './features/annualReportSlice';
import annualNonReportReducer from './features/annualNonReportSlice';

export const store = configureStore({
  reducer: {
    annualReport: annualReportReducer,
    annualNonReport: annualNonReportReducer,
    // statisticReport: KeyStatisticsReport,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;