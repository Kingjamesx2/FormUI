import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path according to your project structure

interface IStrategicGoals {
  previousAcademicYear: string;
  plans: string;
}

interface IAccomplishments {
  accomplishmentList: string;
  accomplishmentAdvancement: string;
  teachingLearningImpact: string;
  institutionalDevelopmentImpact: string;
  trainingImpact: string;
  nationalDevelopmentImpact: string;
  why: string;
  applicableOpportunities: string;
}

interface IResearchPartnerships {
  externalFunding: string;
  researchPublications: string;
  partnershipAgencies: string;
  scholarships: string;
}

interface IStudentSuccess {
  studentClubs: string;
  studentSurveyResults: string;
  newInitiatives: string;
}

interface IEventPicture {
  pictureURL: string;
  personsInPicture: string;
}

interface IActivity {
  eventName: string;
  eventPicture: IEventPicture[];
  eventSummary: string;
}

interface IAdministrativeData {
  fullTimeStaff: number;
  partTimeStaff: number;
  significantStaffChanges: string;
}

interface IFinancialBudget {
  fundingSources: string;
  significantBudgetChanges: string;
}

interface IMeeting {
  meetingType: string;
  meetingDate: string; // ISO date string
  meetingMinutesURL: string;
}

interface AnnualReportInitialState {
  academicYearID: string;
  department: string;
  reportsTo: string;
  deadline: string;
  missionStatement: string;
  strategicGoals: IStrategicGoals;
  accomplishments: IAccomplishments;
  researchPartnerships: IResearchPartnerships;
  studentSuccess: IStudentSuccess;
  activities: IActivity[];
  administrativeData: IAdministrativeData;
  financialBudget: IFinancialBudget;
  meetings: IMeeting[];
  otherComments: string;
}

const initialState: AnnualReportInitialState = {
  academicYearID: "",
  department: "",
  reportsTo: "",
  deadline: "",
  missionStatement: "",
  strategicGoals: {
    previousAcademicYear: "",
    plans: "",
  },
  accomplishments: {
    accomplishmentList: "",
    accomplishmentAdvancement: "",
    teachingLearningImpact: "",
    institutionalDevelopmentImpact: "",
    trainingImpact: "",
    nationalDevelopmentImpact: "",
    why: "",
    applicableOpportunities: ""
  },
  researchPartnerships: {
    externalFunding: "",
    researchPublications: "",
    partnershipAgencies: "",
    scholarships: ""
  },
  studentSuccess: {
    studentClubs: "",
    studentSurveyResults: "",
    newInitiatives: ""
  },
  activities: [
    {
      eventName: "",
      eventPicture: [
        {
          pictureURL: "",
          personsInPicture: ""
        }
      ],
      eventSummary: ""
    }
  ],
  administrativeData: {
    fullTimeStaff: 0,
    partTimeStaff: 0,
    significantStaffChanges: ""
  },
  financialBudget: {
    fundingSources: "",
    significantBudgetChanges: ""
  },
  meetings: [
    {
      meetingType: "",
      meetingDate: "",
      meetingMinutesURL: ""
    }
  ],
  otherComments: ""
};

const annualReportSlice = createSlice({
  name: 'annualReport',
  initialState,
  reducers: {
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      state.academicYearID = action.payload;
    },
    setDepartment: (state, action: PayloadAction<string>) => {
      state.department = action.payload;
    },
    setReportsTo: (state, action: PayloadAction<string>) => {
      state.reportsTo = action.payload;
    },
    setDeadline: (state, action: PayloadAction<string>) => {
      state.deadline = action.payload;
    },
    setMissionStatement: (state, action: PayloadAction<string>) => {
      state.missionStatement = action.payload;
    },
    setStrategicGoals: (state, action: PayloadAction<Partial<IStrategicGoals>>) => {
      state.strategicGoals = {...state.strategicGoals, ...action.payload};
    },
    setAccomplishments: (state, action: PayloadAction<Partial<IAccomplishments>>) => {
      state.accomplishments = {...state.accomplishments, ...action.payload};
    },
    setResearchPartnerships: (state, action: PayloadAction<Partial<IResearchPartnerships>>) => {
      state.researchPartnerships = {...state.researchPartnerships, ...action.payload};
    },
    setStudentSuccess: (state, action: PayloadAction<Partial<IStudentSuccess>>) => {
      state.studentSuccess = { ...state.studentSuccess , ...action.payload }
    },
    setActivities: (state, action: PayloadAction<IActivity[]>) => {
      // 
      //
      state.activities = { ...state.activities, ...action.payload }
    },
    setAdministrativeData: (state, action: PayloadAction<Partial<IAdministrativeData>>) => {
      state.administrativeData = { ...state.administrativeData ,...action.payload }
    },
    setFinancialBudget: (state, action: PayloadAction<IFinancialBudget>) => {
      state.financialBudget = { ...state.financialBudget, ...action.payload }
    },
    setMeetings: (state, action: PayloadAction<IMeeting[]>) => {
      state.meetings = action.payload;
    },
    setOtherComments: (state, action: PayloadAction<string>) => {
      state.otherComments = action.payload;
    },
  },
});

export const {
  setAcademicYearID,
  setDepartment,
  setReportsTo,
  setDeadline,
  setMissionStatement,
  setStrategicGoals,
  setAccomplishments,
  setResearchPartnerships,
  setStudentSuccess,
  setActivities,
  setAdministrativeData,
  setFinancialBudget,
  setMeetings,
  setOtherComments,
  // setStepData,
  // setCurrentStep,
} = annualReportSlice.actions;

export const selectAnnualReport = (state: RootState) => state.annualReport;

export const selectAcademicYearID = (state: RootState) => state.annualReport.academicYearID;
export const selectDepartment = (state: RootState) => state.annualReport.department;
export const selectReportsTo = (state: RootState) => state.annualReport.reportsTo;
export const selectDeadline = (state: RootState) => state.annualReport.deadline;
export const selectMissionStatement = (state: RootState) => state.annualReport.missionStatement;
export const selectStrategicGoals = (state: RootState) => state.annualReport.strategicGoals;
export const selectAccomplishments = (state: RootState) => state.annualReport.accomplishments;
export const selectResearchPartnerships = (state: RootState) => state.annualReport.researchPartnerships;
export const selectStudentSuccess = (state: RootState) => state.annualReport.studentSuccess;
export const selectActivities = (state: RootState) => state.annualReport.activities;
export const selectAdministrativeData = (state: RootState) => state.annualReport.administrativeData;
export const selectFinancialBudget = (state: RootState) => state.annualReport.financialBudget;
export const selectMeetings = (state: RootState) => state.annualReport.meetings;
export const selectOtherComments = (state: RootState) => state.annualReport.otherComments;

// export const { setStepData, setCurrentStep } = annualReportSlice.actions;

export default annualReportSlice.reducer;
