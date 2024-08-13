import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path according to your project structure

interface IIncome {
  fundingFromGoB: number;
  tuitionFees: number;
  contracts: number;
  researchGrants: number;
  endowmentAndInvestmentIncome: number;
  other: number;
  total: number;
}

interface IExpenditure {
  teachingStaffCosts: number;
  nonTeachingStaffCosts: number;
  administrationCosts: number;
  capitalExpenditures: string;
  otherExpenditures: string;
}

interface IInvestments {
  projectInvestment1: string;
  projectInvestment2: string;
  projectInvestment3: string;
}

export interface IFinanceReportState {
  _id: string;
  email: string;
  userID: string;
  academicYearID: string;
  department: string;
  deadline: string;
  income: IIncome;
  expenditure: IExpenditure;
  investments: IInvestments;
  formSubmitted: boolean;
}

// Initial State
const financeReportInitialState: IFinanceReportState = {
  _id: "",
  email: "",
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
    other: 0,
    total: 0,
  },
  expenditure: {
    teachingStaffCosts: 0,
    nonTeachingStaffCosts: 0,
    administrationCosts: 0,
    capitalExpenditures: "",
    otherExpenditures: "",
  },
  investments: {
    projectInvestment1: "",
    projectInvestment2: "",
    projectInvestment3: "",
  },
  formSubmitted: false
};

const financeReportSlice = createSlice({
  name: 'financeReport',
  initialState: financeReportInitialState,
  reducers: {
    setFinanceReport : (state, action: PayloadAction<IFinanceReportState>) => {
      return { ...state, ...action.payload }
    },
    setUserID: (state, action: PayloadAction<string>) => {
      return { ...state, userID: action.payload };
    },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      return { ...state, academicYearID: action.payload };
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      return { ...state, department: action.payload };
    },
    setDeadline: (state, action: PayloadAction<string>) => {
      return { ...state, deadline: action.payload };
    },
    setIncome: (state, action: PayloadAction<IIncome>) => {
      return { ...state, income: action.payload };
    },
    setExpenditure: (state, action: PayloadAction<Partial<IExpenditure>>) => {
      return { ...state, expenditure: { ...state.expenditure, ...action.payload} };
    },
    setInvestments: (state, action: PayloadAction<Partial<IInvestments>>) => {
      return { ...state, investments: { ...state.investments, ...action.payload } };
    },
    setFormSubmitted: (state, _: PayloadAction<boolean>) => {
      return {...state, formSubmitted: true}
    }
  },
});

export const {
  setFinanceReport,
  setUserID,
  setAcademicYearID,
  setDepartment,
  setDeadline,
  setIncome,
  setExpenditure,
  setInvestments,
  setFormSubmitted
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
