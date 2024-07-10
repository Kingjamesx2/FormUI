import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  initialState,
  reducers: {
    setStepData: (state, action) => {
      state.stepData[action.payload.step] = action.payload.data;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setStepData, setCurrentStep } = recordsReportSlice.actions;
export default recordsReportSlice.reducer;
  });