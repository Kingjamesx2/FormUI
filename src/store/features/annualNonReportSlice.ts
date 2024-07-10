import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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


const annualNonReportSlice = createSlice({
  name: 'nonAcademicReport',
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

export const { setStepData, setCurrentStep } = annualNonReportSlice.actions;
export default annualNonReportSlice.reducer;
