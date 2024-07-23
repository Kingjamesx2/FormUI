import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Adjust the path according to your project structure

interface ICurrentStudentEnrollment {
  associates: number;
  undergraduate: number;
  graduate: number;
}

interface IEnrollmentTrend {
  academicYear: string;
  associate: number;
  undergraduate: number;
  graduate: number;
  other: string;
}

interface IEnrollmentTrendPerFaculty {
  academicYear: string;
  EducationAndArts: number;
  ManagementAndSocialScience: number;
  HealthScience: number;
  ScienceAndTechnology: number;
}

interface IGraduationStatistics {
  academicYear: string;
  EducationAndArts: number;
  ManagementAndSocialScience: number;
  HealthScience: number;
  ScienceAndTechnology: number;
  associates: number;
  bachelor: number;
  honors: number;
}

interface IStudentOrigin {
  Belize: number;
  CentralAmericanCountries: number;
  OtherCountries: number;
}

interface ICampusStatistics {
  BelizeCity: number;
  Belmopan: number;
  PuntaGorda: number;
  CentralFarm: number;
  SatellitePrograms: number;
}

interface IGraduates {
  GraduatesByAge: string;
  GraduatesByDistrict: string;
}

interface RecordsReportState {
  // userID: string;
  academicYearID: string;
  department: string;
  departmentHead: string;
  currentStudentEnrollment: ICurrentStudentEnrollment;
  studentEnrollmentTrend: IEnrollmentTrend[];
  enrollmentTrendPerFaculty: IEnrollmentTrendPerFaculty[];
  graduationStatistics: IGraduationStatistics[];
  studentOrigin: IStudentOrigin;
  campusStatistics: ICampusStatistics;
  graduates: IGraduates;
}

// Initial State
const recordsReportInitialState: RecordsReportState = {
  // userID: "",
  academicYearID: "",
  department: "",
  departmentHead: "",
  currentStudentEnrollment: {
    associates: 0,
    undergraduate: 0,
    graduate: 0,
  },
  studentEnrollmentTrend: [
    {
      academicYear: "",
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: "",
    },
    {
      academicYear: "",
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: "",
    },
    {
      academicYear: "",
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: "",
    },
  ],
  enrollmentTrendPerFaculty: [
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
    },
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
    },
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
    },
  ],
  graduationStatistics: [
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
      associates: 0,
      bachelor: 0,
      honors: 0,
    },
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
      associates: 0,
      bachelor: 0,
      honors: 0,
    },
    {
      academicYear: "",
      EducationAndArts: 0,
      ManagementAndSocialScience: 0,
      HealthScience: 0,
      ScienceAndTechnology: 0,
      associates: 0,
      bachelor: 0,
      honors: 0,
    },
  ],
  studentOrigin: {
    Belize: 0,
    CentralAmericanCountries: 0,
    OtherCountries: 0,
  },
  campusStatistics: {
    BelizeCity: 0,
    Belmopan: 0,
    PuntaGorda: 0,
    CentralFarm: 0,
    SatellitePrograms: 0,
  },
  graduates: {
    GraduatesByAge: "",
    GraduatesByDistrict: "",
  },
};

const recordsReportSlice = createSlice({
  name: "recordsReport",
  initialState: recordsReportInitialState,
  reducers: {
    // setUserID: (state, action: PayloadAction<string>) => {
    //   state.userID = action.payload;
    // },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      state.academicYearID = action.payload;
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload;
    },
    setDepartmentHead: (state, action: PayloadAction<string>) => {
      state.departmentHead = action.payload;
    },
    setCurrentStudentEnrollment: (
      state,
      action: PayloadAction<ICurrentStudentEnrollment>
    ) => {
      state.currentStudentEnrollment = action.payload;
    },
    setStudentEnrollmentTrend: (
      state,
      action: PayloadAction<IEnrollmentTrend[]>
    ) => {
      state.studentEnrollmentTrend = action.payload;
    },
    setEnrollmentTrendPerFaculty: (
      state,
      action: PayloadAction<IEnrollmentTrendPerFaculty[]>
    ) => {
      state.enrollmentTrendPerFaculty = action.payload;
    },
    setGraduationStatistics: (
      state,
      action: PayloadAction<IGraduationStatistics[]>
    ) => {
      state.graduationStatistics = action.payload;
    },
    setStudentOrigin: (state, action: PayloadAction<IStudentOrigin>) => {
      state.studentOrigin = action.payload;
    },
    setCampusStatistics: (state, action: PayloadAction<ICampusStatistics>) => {
      state.campusStatistics = action.payload;
    },
    setGraduates: (state, action: PayloadAction<Partial<IGraduates>>) => {
      state.graduates = { ...state.graduates ,...action.payload};
    },
  },
});

export const {
  // setUserID,
  setAcademicYearID,
  setDepartment,
  setDepartmentHead,
  setCurrentStudentEnrollment,
  setStudentEnrollmentTrend,
  setEnrollmentTrendPerFaculty,
  setGraduationStatistics,
  setStudentOrigin,
  setCampusStatistics,
  setGraduates,
} = recordsReportSlice.actions;

export const selectRecordsReport = (state: RootState) => state.recordsReport;
export const selectAcademicYearID = (state: RootState) =>
  state.recordsReport.academicYearID;
export const selectDepartment = (state: RootState) =>
  state.recordsReport.department;
export const selectDepartmentHead = (state: RootState) =>
  state.recordsReport.departmentHead;
export const selectCurrentStudentEnrollment = (state: RootState) =>
  state.recordsReport.currentStudentEnrollment;
export const selectStudentEnrollmentTrend = (state: RootState) =>
  state.recordsReport.studentEnrollmentTrend;
export const selectEnrollmentTrendPerFaculty = (state: RootState) =>
  state.recordsReport.enrollmentTrendPerFaculty;
export const selectGraduationStatistics = (state: RootState) =>
  state.recordsReport.graduationStatistics;
export const selectStudentOrigin = (state: RootState) =>
  state.recordsReport.studentOrigin;
export const selectCampusStatistics = (state: RootState) =>
  state.recordsReport.campusStatistics;
export const selectGraduates = (state: RootState) =>
  state.recordsReport.graduates;

export default recordsReportSlice.reducer;
