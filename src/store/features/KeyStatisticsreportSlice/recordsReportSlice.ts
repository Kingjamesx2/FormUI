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
  userID: "user123",
  academicYearID: "2023-2024",
  department: "Records - post test for statistics report",
  deadline: "2024-09-01T00:00:00Z",
  currentStudentEnrollment: {
    associates: 150,
    undergraduate: 500,
    graduate: 75,
  },
  studentEnrollmentTrend: [
    {
      academicYear: "2021-2022",
      associate: 140,
      undergraduate: 480,
      graduate: 70,
      other: "none",
    },
    {
      academicYear: "2022-2023",
      associate: 145,
      undergraduate: 490,
      graduate: 72,
      other: "none",
    },
    {
      academicYear: "2023-2024",
      associate: 150,
      undergraduate: 500,
      graduate: 75,
      other: "none",
    },
  ],
  enrollmentTrendPerFaculty: [
    {
      academicYear: "2021-2022",
      EducationAndArts: 200,
      ManagementAndSocialScience: 300,
      HealthScience: 100,
      ScienceAndTechnology: 150,
    },
    {
      academicYear: "2022-2023",
      EducationAndArts: 210,
      ManagementAndSocialScience: 310,
      HealthScience: 105,
      ScienceAndTechnology: 160,
    },
    {
      academicYear: "2023-2024",
      EducationAndArts: 220,
      ManagementAndSocialScience: 320,
      HealthScience: 110,
      ScienceAndTechnology: 170,
    },
  ],
  graduationStatistics: [
    {
      academicYear: "2021-2022",
      EducationAndArts: 50,
      ManagementAndSocialScience: 60,
      HealthScience: 25,
      ScienceAndTechnology: 30,
      associates: 20,
      bachelor: 45,
      honors: 10,
    },
    {
      academicYear: "2022-2023",
      EducationAndArts: 55,
      ManagementAndSocialScience: 65,
      HealthScience: 27,
      ScienceAndTechnology: 32,
      associates: 22,
      bachelor: 47,
      honors: 12,
    },
    {
      academicYear: "2023-2024",
      EducationAndArts: 60,
      ManagementAndSocialScience: 70,
      HealthScience: 30,
      ScienceAndTechnology: 35,
      associates: 25,
      bachelor: 50,
      honors: 15,
    },
  ],
  studentOrigin: {
    Belize: 600,
    CentralAmericanCountries: 50,
    OtherCountries: 25,
  },
  campusStatistics: {
    BelizeCity: 200,
    Belmopan: 300,
    PuntaGorda: 50,
    CentralFarm: 30,
    SatellitePrograms: 20,
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
