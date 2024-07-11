import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store'; // Adjust the path according to your project structure

interface IFacultyCount {
  EducationAndArts: number;
  ManagementAndSocialSciences: number;
  HealthSciences: number;
  ScienceAndTechnology: number;
  Total: number;
}

interface INumberOfStaff {
  FulltimeFaculty: IFacultyCount;
  AdjunctFaculty: IFacultyCount;
  NonTeachingStaff: IFacultyCount;
}

interface IHRReportState {
  userID: string;
  academicYearID: string;
  department: string;
  deadline: string;
  numberOfStaff: INumberOfStaff;
}

// Initial State
const HRReportInitialState: IHRReportState = {
  userID: "user456",
  academicYearID: "2023-2024",
  department: "Human Resources - statistics post test",
  deadline: "2024-12-31T00:00:00Z",
  numberOfStaff: {
    FulltimeFaculty: {
      EducationAndArts: 20,
      ManagementAndSocialSciences: 25,
      HealthSciences: 15,
      ScienceAndTechnology: 30,
      Total: 90,
    },
    AdjunctFaculty: {
      EducationAndArts: 10,
      ManagementAndSocialSciences: 12,
      HealthSciences: 8,
      ScienceAndTechnology: 15,
      Total: 45,
    },
    NonTeachingStaff: {
      EducationAndArts: 5,
      ManagementAndSocialSciences: 6,
      HealthSciences: 4,
      ScienceAndTechnology: 8,
      Total: 23,
    },
  },
};

const hrReportSlice = createSlice({
  name: 'hrReport',
  initialState: HRReportInitialState,
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
    setNumberOfStaff: (state, action: PayloadAction<INumberOfStaff>) => {
      state.numberOfStaff = action.payload;
    },
    setFulltimeFaculty: (state, action: PayloadAction<IFacultyCount>) => {
      state.numberOfStaff.FulltimeFaculty = action.payload;
    },
    setAdjunctFaculty: (state, action: PayloadAction<IFacultyCount>) => {
      state.numberOfStaff.AdjunctFaculty = action.payload;
    },
    setNonTeachingStaff: (state, action: PayloadAction<IFacultyCount>) => {
      state.numberOfStaff.NonTeachingStaff = action.payload;
    },
  },
});

export const {
  setUserID,
  setAcademicYearID,
  setDepartment,
  setDeadline,
  setNumberOfStaff,
  setFulltimeFaculty,
  setAdjunctFaculty,
  setNonTeachingStaff,
} = hrReportSlice.actions;

export const selectHRReport = (state: RootState) => state.hrReport;

export const selectUserID = (state: RootState) => state.hrReport.userID;
export const selectAcademicYearID = (state: RootState) => state.hrReport.academicYearID;
export const selectDepartment = (state: RootState) => state.hrReport.department;
export const selectDeadline = (state: RootState) => state.hrReport.deadline;
export const selectNumberOfStaff = (state: RootState) => state.hrReport.numberOfStaff;
export const selectFulltimeFaculty = (state: RootState) => state.hrReport.numberOfStaff.FulltimeFaculty;
export const selectAdjunctFaculty = (state: RootState) => state.hrReport.numberOfStaff.AdjunctFaculty;
export const selectNonTeachingStaff = (state: RootState) => state.hrReport.numberOfStaff.NonTeachingStaff;

export default hrReportSlice.reducer;
