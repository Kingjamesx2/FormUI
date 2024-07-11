import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store'; // Adjust the path according to your project structure

interface CurrentStudentEnrollment {
  associates: number;
  undergraduate: number;
  graduate: number;
}

interface EnrollmentTrend {
  academicYear: string;
  associate: number;
  undergraduate: number;
  graduate: number;
  other: string;
}

interface EnrollmentTrendPerFaculty {
  academicYear: string;
  EducationAndArts: number;
  ManagementAndSocialScience: number;
  HealthScience: number;
  ScienceAndTechnology: number;
}

interface GraduationStatistics {
  academicYear: string;
  EducationAndArts: number;
  ManagementAndSocialScience: number;
  HealthScience: number;
  ScienceAndTechnology: number;
  associates: number;
  bachelor: number;
  honors: number;
}

interface StudentOrigin {
  Belize: number;
  CentralAmericanCountries: number;
  OtherCountries: number;
}

interface CampusStatistics {
  BelizeCity: number;
  Belmopan: number;
  PuntaGorda: number;
  CentralFarm: number;
  SatellitePrograms: number;
}

interface RecordsReportState {
  userID: string;
  academicYearID: string;
  department: string;
  deadline: string;
  currentStudentEnrollment: CurrentStudentEnrollment;
  studentEnrollmentTrend: EnrollmentTrend[];
  enrollmentTrendPerFaculty: EnrollmentTrendPerFaculty[];
  graduationStatistics: GraduationStatistics[];
  studentOrigin: StudentOrigin;
  campusStatistics: CampusStatistics;
}

// Initial State
const recordsReportInitialState: RecordsReportState = {
  userID: "",
  academicYearID: "",
  department: "",
  deadline: "",
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
};

const recordsReportSlice = createSlice({
  name: 'recordsReport',
  initialState: recordsReportInitialState,
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
    setCurrentStudentEnrollment: (state, action: PayloadAction<CurrentStudentEnrollment>) => {
      state.currentStudentEnrollment = action.payload;
    },
    setStudentEnrollmentTrend: (state, action: PayloadAction<EnrollmentTrend[]>) => {
      state.studentEnrollmentTrend = action.payload;
    },
    setEnrollmentTrendPerFaculty: (state, action: PayloadAction<EnrollmentTrendPerFaculty[]>) => {
      state.enrollmentTrendPerFaculty = action.payload;
    },
    setGraduationStatistics: (state, action: PayloadAction<GraduationStatistics[]>) => {
      state.graduationStatistics = action.payload;
    },
    setStudentOrigin: (state, action: PayloadAction<StudentOrigin>) => {
      state.studentOrigin = action.payload;
    },
    setCampusStatistics: (state, action: PayloadAction<CampusStatistics>) => {
      state.campusStatistics = action.payload;
    },
  },
});

export const {
  setUserID,
  setAcademicYearID,
  setDepartment,
  setDeadline,
  setCurrentStudentEnrollment,
  setStudentEnrollmentTrend,
  setEnrollmentTrendPerFaculty,
  setGraduationStatistics,
  setStudentOrigin,
  setCampusStatistics,
} = recordsReportSlice.actions;

export const selectRecordsReport = (state: RootState) => state.recordsReport;

export const selectUserID = (state: RootState) => state.recordsReport.userID;
export const selectAcademicYearID = (state: RootState) => state.recordsReport.academicYearID;
export const selectDepartment = (state: RootState) => state.recordsReport.department;
export const selectDeadline = (state: RootState) => state.recordsReport.deadline;
export const selectCurrentStudentEnrollment = (state: RootState) => state.recordsReport.currentStudentEnrollment;
export const selectStudentEnrollmentTrend = (state: RootState) => state.recordsReport.studentEnrollmentTrend;
export const selectEnrollmentTrendPerFaculty = (state: RootState) => state.recordsReport.enrollmentTrendPerFaculty;
export const selectGraduationStatistics = (state: RootState) => state.recordsReport.graduationStatistics;
export const selectStudentOrigin = (state: RootState) => state.recordsReport.studentOrigin;
export const selectCampusStatistics = (state: RootState) => state.recordsReport.campusStatistics;

export default recordsReportSlice.reducer;
