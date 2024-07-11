import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store'; // Adjust the path according to your project structure

interface Income {
  fundingFromGoB: number;
  tuitionFees: number;
  contracts: number;
  researchGrants: number;
  endowmentAndInvestmentIncome: number;
  other: string;
  total: number;
}

interface Expenditure {
  teachingStaffCosts: number;
  nonTeachingStaffCosts: number;
  administrationCosts: number;
  capitalExpenditures: number;
  otherExpenditures: number;
}

interface Investments {
  projectInvestment1: string;
  projectInvestment2: string;
  projectInvestment3: string;
}

interface FinanceReportState {
  userID: string;
  academicYearID: string;
  department: string;
  deadline: string;
  income: Income;
  expenditure: Expenditure;
  investments: Investments;
}

// Initial State
const financeReportInitialState: FinanceReportState = {
  userID: "",
  academicYearID: "",
  department: "",
  deadline: "",
  income: {
    fundingFromGoB: 0,
    tuitionFees: 0,
    contracts:0,
    researchGrants: 0,
    endowmentAndInvestmentIncome: 0,
    other: "",
    total: 0,
  },
  expenditure: {
    teachingStaffCosts: 0,
    nonTeachingStaffCosts: 0,
    administrationCosts: 0,
    capitalExpenditures: 0,
    otherExpenditures: 0,
  },
  investments: {
    projectInvestment1: "",
    projectInvestment2: "",
    projectInvestment3: "",
  },
};

const financeReportSlice = createSlice({
  name: 'financeReport',
  initialState: financeReportInitialState,
  reducers: {
    setUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      state.academicYearID = action.payload;
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload;
    },
    setDeadline: (state, action: PayloadAction<string>) => {
      state.deadline = action.payload;
    },
    setIncome: (state, action: PayloadAction<Income>) => {
      state.income = action.payload;
    },
    setExpenditure: (state, action: PayloadAction<Expenditure>) => {
      state.expenditure = action.payload;
    },
    setInvestments: (state, action: PayloadAction<Investments>) => {
      state.investments = action.payload;
    },
  },
});

export const {
  setUserID,
  setAcademicYearID,
  setDepartment,
  setDeadline,
  setIncome,
  setExpenditure,
  setInvestments,
} = financeReportSlice.actions;

export const selectFinanceReport = (state: RootState) => state.financeReport;

export const selectUserID = (state: RootState) => state.financeReport.userID;
export const selectAcademicYearID = (state: RootState) => state.financeReport.academicYearID;
export const selectDepartment = (state: RootState) => state.financeReport.department;
export const selectDeadline = (state: RootState) => state.financeReport.deadline;
export const selectIncome = (state: RootState) => state.financeReport.income;
export const selectExpenditure = (state: RootState) => state.financeReport.expenditure;
export const selectInvestments = (state: RootState) => state.financeReport.investments;

export default financeReportSlice.reducer;
