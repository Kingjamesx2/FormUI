import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// Interfaces
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
    userID: "user789",
    academicYearID: "2023-2024",
    department: "Finance - statistics post test",
    deadline: "2024-11-15T00:00:00Z",
    income: {
      fundingFromGoB: 500000,
      tuitionFees: 200000,
      contracts: 100000,
      researchGrants: 150000,
      endowmentAndInvestmentIncome: 75000,
      other: "Donations",
      total: 1025000,
    },
    expenditure: {
      teachingStaffCosts: 400000,
      nonTeachingStaffCosts: 200000,
      administrationCosts: 100000,
      capitalExpenditures: 50000,
      otherExpenditures: 150000,
    },
    investments: {
      projectInvestment1: "New Science Building",
      projectInvestment2: "Library Renovation",
      projectInvestment3: "Sports Complex",
    },
  };
  