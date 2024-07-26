import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../store"; // Adjust the import according to your store file location

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
  student1: string;
  reason1: string;
  student2: string;
  reason2: string;
  student3: string;
  reason3: string;
}

interface IEventPicture {
  pictureURL: string;
}

export interface IActivity {
  eventId?: number;
  eventName?: string;
  eventPicture?: IEventPicture[];
  personsInPicture: string;
  eventSummary?: string;
  eventMonth?: string;
}

interface IActivityUpdate {
  index: number;
  field: keyof IActivity;
  value: any;
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

interface IMeetingUpdate {
  index: number;
  field: keyof IMeeting;
  value: any;
}

export interface IMeeting {
  meetingId?: number;
  meetingType?: string;
  meetingDate?: string; // ISO date string
  meetingMinutesURL?: string;
}

export interface annualNonReportInitialState {
  academicYearID: string;
  division: string;
  reportsTo: string;
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

const initialState: annualNonReportInitialState = {
  academicYearID: "",
  division: "",
  reportsTo: "",
  missionStatement: "",
  strategicGoals: {
    strategicGoalsUnderReview: "",
    implmentationPlans: "",
    plansToAchieveNotCompletedGoals: "",
    strategicGoals: "",
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
    scholarships: "",
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
      eventId: 0,
      eventName: "",
      personsInPicture: "",
      eventPicture: [
        {
          pictureURL: "",
        },
      ],
      eventSummary: "",
      eventMonth: "",
    },
  ],
  administrativeData: {
    fullTimeStaff: 0,
    partTimeStaff: 0,
    significantStaffChanges: "",
  },
  financialBudget: {
    fundingSources: "",
    significantBudgetChanges: "",
  },
  meetings: [
    {
      meetingId: 0,
      meetingType: "",
      meetingDate: "",
      meetingMinutesURL: "",
    }
  ],
  otherComments: "",
};

const annualNonReportSlice = createSlice({
  name: "nonAcademicReport",
  initialState,
  reducers: {
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      state.academicYearID = action.payload;
    },
    setDivision: (state, action: PayloadAction<string>) => {
      state.division = action.payload;
    },
    setReportsTo: (state, action: PayloadAction<string>) => {
      state.reportsTo = action.payload;
    },
    setMissionStatement: (state, action: PayloadAction<string>) => {
      state.missionStatement = action.payload;
    },
    setStrategicGoals: (
      state,
      action: PayloadAction<Partial<IStrategicGoals>>
    ) => {
      state.strategicGoals = { ...state.strategicGoals, ...action.payload };
    },
    setAccomplishments: (
      state,
      action: PayloadAction<Partial<IAccomplishments>>
    ) => {
      state.accomplishments = { ...state.accomplishments, ...action.payload };
    },
    setResearchPartnerships: (
      state,
      action: PayloadAction<Partial<IResearchPartnerships>>
    ) => {
      state.researchPartnerships = {
        ...state.researchPartnerships,
        ...action.payload,
      };
    },
    setStudentSuccess: (
      state,
      action: PayloadAction<Partial<IStudentSuccess>>
    ) => {
      state.studentSuccess = { ...state.studentSuccess, ...action.payload };
    },
    setActivities: (state, action: PayloadAction<IActivity>) => {
      const { eventId } = action.payload;
      if (eventId !== undefined) {
        const existingActivityIndex = state.activities.findIndex(activity => activity.eventId === eventId);
        if (existingActivityIndex >= 0) {
          state.activities[existingActivityIndex] = { ...state.activities[existingActivityIndex], ...action.payload };
        } else {
          state.activities.push({ ...action.payload, eventId: state.activities.length });
        }
      }
    },

    addNewActivity: (state) => {
      state.activities.push({
        eventId: state.activities.length,
        eventName: "",
        personsInPicture: "",
        eventMonth: "",
        eventPicture: [],
        eventSummary: ""
      });
    },

    updateActivity: (state, action: PayloadAction<IActivityUpdate>) => {
      const { index, field, value } = action.payload;
      if (index >= 0 && index < state.activities.length) {
        state.activities[index] = {
          ...state.activities[index],
          [field]: value,
        };
      }
    },
    setAdministrativeData: (
      state,
      action: PayloadAction<Partial<IAdministrativeData>>
    ) => {
      state.administrativeData = {
        ...state.administrativeData,
        ...action.payload,
      };
    },
    setFinancialBudget: (state, action: PayloadAction<IFinancialBudget>) => {
      state.financialBudget = { ...state.financialBudget, ...action.payload };
    },
    setMeetings: (state, action: PayloadAction<IMeeting>) => {
      const { meetingId } = action.payload;
      if (meetingId !== undefined) {
        const existingMeetingIndex = state.meetings.findIndex(meeting => meeting.meetingId === meetingId);
        if (existingMeetingIndex >= 0) {
          state.meetings[existingMeetingIndex] = { ...state.meetings[existingMeetingIndex], ...action.payload };
        } else {
          state.meetings.push({ ...action.payload, meetingId: state.meetings.length });
        }
      }
    },

    addNewMeeting: (state) => {
      state.meetings.push({
        meetingId: state.meetings.length,
        meetingType: "",
        meetingDate: "",
        meetingMinutesURL: "",
      });
    },

    updateMeeting: (state, action: PayloadAction<IMeetingUpdate>) => {
      const { index, field, value } = action.payload;
      if (index >= 0 && index < state.meetings.length) {
        state.meetings[index] = {
          ...state.meetings[index],
          [field]: value,
        };
      }
    },

    setOtherComments: (state, action: PayloadAction<string>) => {
      state.otherComments = action.payload;
    },
  },
});

export const {
  setAcademicYearID,
  setDivision,
  setReportsTo,
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
  addNewActivity,
  updateActivity,
  addNewMeeting,
  updateMeeting
} = annualNonReportSlice.actions;

export const selectAcademicYearID = (state: RootState) =>
  state.nonAcademicReport.academicYearID;
export const selectDivision = (state: RootState) =>
  state.nonAcademicReport.division;
export const selectReportsTo = (state: RootState) =>
  state.nonAcademicReport.reportsTo;
export const selectMissionStatement = (state: RootState) =>
  state.nonAcademicReport.missionStatement;
export const selectStrategicGoals = (state: RootState) =>
  state.nonAcademicReport.strategicGoals;
export const selectAccomplishments = (state: RootState) =>
  state.nonAcademicReport.accomplishments;
export const selectResearchPartnerships = (state: RootState) =>
  state.nonAcademicReport.researchPartnerships;
export const selectStudentSuccess = (state: RootState) =>
  state.nonAcademicReport.studentSuccess;
export const selectActivities = (state: RootState) =>
  state.nonAcademicReport.activities;
export const selectAdministrativeData = (state: RootState) =>
  state.nonAcademicReport.administrativeData;
export const selectFinancialBudget = (state: RootState) =>
  state.nonAcademicReport.financialBudget;
export const selectMeetings = (state: RootState) =>
  state.nonAcademicReport.meetings;
export const selectOtherComments = (state: RootState) =>
  state.nonAcademicReport.otherComments;

export default annualNonReportSlice.reducer;
