import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path according to your project structure

interface IStrategicGoals {
  currentGoals: string;
  challenges: string;
  plans: string;
  upcomingGoals: string;
}

interface IAccomplishments {
  accomplishmentList: string;
  accomplishmentAdvancement: string;
  teachingLearningImpact: string;
  institutionalDevelopmentImpact: string;
  trainingImpact: string;
  nationalDevelopmentImpact: string;
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
  academicYearID: "2023-2024",
  department: "ICT- test staff post",
  reportsTo: "President",
  deadline: "2024-06-30T00:00:00Z",
  missionStatement: "To provide high-quality education in computer science.",
  strategicGoals: {
    currentGoals: "Increase student enrollment by 10%",
    challenges: "Limited lab resources",
    plans: "Upgrade computer labs",
    upcomingGoals: "Introduce new AI courses"
  },
  accomplishments: {
    accomplishmentList: "Developed new curriculum",
    accomplishmentAdvancement: "Improved graduation rates",
    teachingLearningImpact: "Enhanced student engagement",
    institutionalDevelopmentImpact: "Secured industry partnerships",
    trainingImpact: "Conducted faculty workshops",
    nationalDevelopmentImpact: "Participated in national conferences",
    applicableOpportunities: "Collaborated with tech companies"
  },
  researchPartnerships: {
    externalFunding: "Received $50,000 grant",
    researchPublications: "Published 5 papers",
    partnershipAgencies: "Partnered with XYZ Corp",
    scholarships: "Awarded 10 scholarships"
  },
  studentSuccess: {
    studentClubs: "AI Club, Coding Club",
    studentSurveyResults: "Positive feedback on courses",
    newInitiatives: "Launched mentorship program"
  },
  activities: [
    {
      eventName: "Tech Expo 2024",
      eventPicture: [
        {
          pictureURL: "https://example.com/pic1.jpg",
          personsInPicture: "John Doe, Jane Smith"
        }
      ],
      eventSummary: "Showcased student projects"
    }
  ],
  administrativeData: {
    fullTimeStaff: 20,
    partTimeStaff: 10,
    significantStaffChanges: "Hired 2 new professors"
  },
  financialBudget: {
    fundingSources: "Government grants, private donations",
    significantBudgetChanges: "Increased lab equipment budget"
  },
  meetings: [
    {
      meetingType: "Staff Meeting",
      meetingDate: "2024-05-15T10:00:00Z",
      meetingMinutesURL: "https://example.com/minutes1.pdf"
    }
  ],
  otherComments: "Looking forward to a successful academic year"
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
    setStrategicGoals: (state, action: PayloadAction<IStrategicGoals>) => {
      state.strategicGoals = action.payload;
    },
    setAccomplishments: (state, action: PayloadAction<IAccomplishments>) => {
      state.accomplishments = action.payload;
    },
    setResearchPartnerships: (state, action: PayloadAction<IResearchPartnerships>) => {
      state.researchPartnerships = action.payload;
    },
    setStudentSuccess: (state, action: PayloadAction<IStudentSuccess>) => {
      state.studentSuccess = action.payload;
    },
    setActivities: (state, action: PayloadAction<IActivity[]>) => {
      state.activities = action.payload;
    },
    setAdministrativeData: (state, action: PayloadAction<IAdministrativeData>) => {
      state.administrativeData = action.payload;
    },
    setFinancialBudget: (state, action: PayloadAction<IFinancialBudget>) => {
      state.financialBudget = action.payload;
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
  setStepData,
  setCurrentStep,
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
