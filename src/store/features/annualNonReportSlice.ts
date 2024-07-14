import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../store'; // Adjust the import according to your store file location

interface IStrategicGoals {
    strategicGoalsUnderReview: string;
    implmentationPlans: string;
    plansToAchieveNotCompletedGoals: string;
    strategicGoals: string;
}

interface IAccomplishments {
  accomplishmentList: string;
  accomplishmentAdvancement: string;
  impactfulChange: string;
  // teachingLearningImpact: string;
  // institutionalDevelopmentImpact: string;
  // trainingImpact: string;
  // nationalDevelopmentImpact: string;
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
  studentLearning: string;
  studentClubs: string;
  student1:string;
  reason1: string;
  student2: string;
  reason2: string;
  student3: string;
  reason3: string;
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
  meetingDate: string;
  meetingMinutesURL: string;
}

interface annualNonReportInitialState {
    academicYearID: string;
    department: string;
    reportsTo: string;
    deadline: string;
    missionStatement: string;
    strategicGoals:  IStrategicGoals;
    accomplishments: IAccomplishments;
    researchPartnerships: IResearchPartnerships;
    studentSuccess: IStudentSuccess;
    activities: IActivity[];
    administrativeData: IAdministrativeData;
    financialBudget: IFinancialBudget;
    meetings: IMeeting[];
    otherComments: string;
}

const initialState: annualNonReportInitialState = {
  academicYearID: "",
  department: "",
  reportsTo: "",
  deadline: "",
  missionStatement: "",
  strategicGoals: {
    strategicGoalsUnderReview: "",
    implmentationPlans: "",
    plansToAchieveNotCompletedGoals: "",
    strategicGoals: ""

  },
  accomplishments: {
    accomplishmentList: "",
    accomplishmentAdvancement: "",
    impactfulChange: "",
    why: "",
    applicableOpportunities: "",
  },
  researchPartnerships: {
      externalFunding: "",
      researchPublications: "",
      partnershipAgencies: "",
      scholarships: ""
  },
  studentSuccess: {
    studentLearning: "",
    studentClubs: "",
    student1: "",
    reason1: "",
    student2: "",
    reason2: "",
    student3: "",
    reason3: "",
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


const annualNonReportSlice = createSlice({
  name: 'nonAcademicReport',
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
      state.strategicGoals = { ...state.strategicGoals, ...action.payload };
    },
    setAccomplishments: (state, action: PayloadAction<Partial<IAccomplishments>>) => {
      state.accomplishments = { ...state.accomplishments, ...action.payload };
    },
    setResearchPartnerships: (state, action: PayloadAction<Partial<IResearchPartnerships>>) => {
      state.researchPartnerships = { ...state.researchPartnerships, ...action.payload };
    },
    setStudentSuccess: (state, action: PayloadAction<Partial<IStudentSuccess>>) => {
      state.studentSuccess = {...state.studentSuccess, ...action.payload };
    },
    setActivities: (state, action: PayloadAction<IActivity[]>) => {
      state.activities = action.payload;
    },
    setAdministrativeData: (state, action: PayloadAction<Partial<IAdministrativeData>>) => {
      state.administrativeData = { ...state.administrativeData, ...action.payload }
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
  setOtherComments
} = annualNonReportSlice.actions;

export const selectAcademicYearID = (state: RootState) => state.nonAcademicReport.academicYearID;
export const selectDepartment = (state: RootState) => state.nonAcademicReport.department;
export const selectReportsTo = (state: RootState) => state.nonAcademicReport.reportsTo;
export const selectDeadline = (state: RootState) => state.nonAcademicReport.deadline;
export const selectMissionStatement = (state: RootState) => state.nonAcademicReport.missionStatement;
export const selectStrategicGoals = (state: RootState) => state.nonAcademicReport.strategicGoals;
export const selectAccomplishments = (state: RootState) => state.nonAcademicReport.accomplishments;
export const selectResearchPartnerships = (state: RootState) => state.nonAcademicReport.researchPartnerships;
export const selectStudentSuccess = (state: RootState) => state.nonAcademicReport.studentSuccess;
export const selectActivities = (state: RootState) => state.nonAcademicReport.activities;
export const selectAdministrativeData = (state: RootState) => state.nonAcademicReport.administrativeData;
export const selectFinancialBudget = (state: RootState) => state.nonAcademicReport.financialBudget;
export const selectMeetings = (state: RootState) => state.nonAcademicReport.meetings;
export const selectOtherComments = (state: RootState) => state.nonAcademicReport.otherComments;



export default annualNonReportSlice.reducer;

