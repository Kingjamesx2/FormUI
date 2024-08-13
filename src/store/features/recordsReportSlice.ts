import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Adjust the path according to your project structure

interface ICurrentStudentEnrollmentTrend {
  associates: number;
  undergraduate: number;
  graduate: number;
}

//per faculty
interface IEnrollmentTrend {
  academicYear: string;
  associate: number;
  undergraduate: number;
  graduate: number;
  other: number;
}

interface IEnrollmentTrendPerFaculty {
  academicYear: string;
  educationAndArts: number;
  managementAndSocialScience: number;
  healthScience: number;
  scienceAndTechnology: number;
}

interface IObjectKeys {
  [key: string]: string | number;
}

export interface IGraduationStatisticsFaculty extends IObjectKeys{
  degree: string;
  Associates: string;
  Bachelors: string;
  Honors: string
}

interface IGraduationStatistics {
  academicYear: string;
  faculties: IGraduationStatisticsFaculty[]
  // EducationAndArts: number;
  // ManagementAndSocialScience: number;
  // HealthScience: number;
  // ScienceAndTechnology: number;
  // associates: number;
  // bachelor: number;
  // honors: number;
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

export interface RecordsReportState {
  _id: string;
  email: string;
  academicYearID: string;
  department: string;
  departmentHead: string;
  currentStudentEnrollmentTrend: ICurrentStudentEnrollmentTrend;
  studentEnrollmentTrend: IEnrollmentTrend[];
  enrollmentTrendPerFaculty: IEnrollmentTrendPerFaculty[];
  graduationStatistics: IGraduationStatistics[];
  studentOrigin: IStudentOrigin;
  campusStatistics: ICampusStatistics;
  graduates: IGraduates;
  formSubmitted: boolean
}

// Initial State
const recordsReportInitialState: RecordsReportState = {
  _id: "",
  email: "",
  academicYearID: "",
  department: "",
  departmentHead: "",
  currentStudentEnrollmentTrend: {
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
      other: 0,
    },
    {
      academicYear: "",
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: 0,
    },
    {
      academicYear: "",
      associate: 0,
      undergraduate: 0,
      graduate: 0,
      other: 0,
    },
  ],
  enrollmentTrendPerFaculty: [
    {
      academicYear: "",
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0,
    },
    {
      academicYear: "",
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0,
    },
    {
      academicYear: "",
      educationAndArts: 0,
      managementAndSocialScience: 0,
      healthScience: 0,
      scienceAndTechnology: 0,
    }
  ],
  graduationStatistics: [{
      academicYear: "2021/2022",
      faculties: [
        { degree: 'Education and Arts', 'Associates': '', 'Bachelors': '', 'Honors': '' },
        { degree: 'Management and Social Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
        { degree: 'Health Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
        { degree: 'Science and Technology', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      ]
    },
    {
      academicYear: "2022/2023",
      faculties: [{ degree: 'Education and Arts', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Management and Social Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Health Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Science and Technology', 'Associates': '', 'Bachelors': '', 'Honors': '' }]
    },
    {
      academicYear: "2023/2024",
      faculties: [{ degree: 'Education and Arts', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Management and Social Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Health Science', 'Associates': '', 'Bachelors': '', 'Honors': '' },
      { degree: 'Science and Technology', 'Associates': '', 'Bachelors': '', 'Honors': '' }]
    }
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
  formSubmitted: false
};

const recordsReportSlice = createSlice({
  name: "recordsReport",
  initialState: recordsReportInitialState,
  reducers: {
    // setUserID: (state, action: PayloadAction<string>) => {
    //   state.userID = action.payload;
    // },
    setRecordReportState: (state, action: PayloadAction<RecordsReportState>) => {
      return { ...state, ...action.payload };
    },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      return { ...state, academicYearID: action.payload };
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      return { ...state, department: action.payload };
    },
    setDepartmentHead: (state, action: PayloadAction<string>) => {
      return { ...state, departmentHead: action.payload };
    },
    setCurrentStudentEnrollmentTrend: (
      state,
      action: PayloadAction<ICurrentStudentEnrollmentTrend>
    ) => {
      return { ...state, currentStudentEnrollmentTrend: {...state.currentStudentEnrollmentTrend, ...action.payload } };
    },
    setStudentEnrollmentTrend: (
      state,
      action: PayloadAction<IEnrollmentTrend[]>
    ) => {
      return { ...state, studentEnrollmentTrend: [...action.payload ] };
    },
    setEnrollmentTrendPerFaculty: (
      state,
      action: PayloadAction<IEnrollmentTrendPerFaculty[]>
    ) => {
      return { ...state, enrollmentTrendPerFaculty: [ ...action.payload ] };
    },
    setGraduationStatistics: (
      state,
      action: PayloadAction<IGraduationStatistics[]>
    ) => {
      return { ...state, graduationStatistics: [...action.payload ] };
    },
    setStudentOrigin: (state, action: PayloadAction<IStudentOrigin>) => {
      return { ...state, studentOrigin: action.payload };
    },
    setCampusStatistics: (state, action: PayloadAction<ICampusStatistics>) => {
      return { ...state, campusStatistics: action.payload };
    },
    setGraduates: (state, action: PayloadAction<Partial<IGraduates>>) => {
      return { ...state, graduates: { ...state.graduates, ...action.payload } };
    },
    setFormSubmitted: (state, _: PayloadAction<boolean>) => {
      return {...state, formSubmitted: true}
    }
  },
});

export const {
  // setUserID,
  setRecordReportState,
  setAcademicYearID,
  setDepartment,
  setDepartmentHead,
  setCurrentStudentEnrollmentTrend,
  setStudentEnrollmentTrend,
  setEnrollmentTrendPerFaculty,
  setGraduationStatistics,
  setStudentOrigin,
  setCampusStatistics,
  setGraduates,
  setFormSubmitted
} = recordsReportSlice.actions;

export const selectRecordReport = (state: RootState) => { 
  return state.recordsReport;
}
  export const selectAcademicYearID = (state: RootState) =>
  state.recordsReport.academicYearID;
export const selectDepartment = (state: RootState) =>
  state.recordsReport.department;
export const selectDepartmentHead = (state: RootState) =>
  state.recordsReport.departmentHead;
export const selectCurrentStudentEnrollment = (state: RootState) =>
  state.recordsReport.currentStudentEnrollmentTrend;
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
