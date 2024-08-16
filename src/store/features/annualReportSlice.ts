import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path according to your project structure

interface IStrategicGoals {
  previousAcademicYear: string;
  plans: string;
}

interface IAccomplishments {
  accomplishmentList: string;
  accomplishmentAdvancement: string;
  multipleChoice: string;
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
  eventPicture: string;
}

export interface IActivity {
  eventId?: number;
  eventName?: string;
  eventMonth?: string;
  pictureURL?: IEventPicture[];
  personsInPicture: string;
  eventSummary?: string;
}

interface IActivityUpdate {
  index: number;
  field: keyof IActivity;
  value: any
}

interface IAdministrativeData {
  fullTimeStaff: string;
  partTimeStaff: string;
  significantStaffChanges: string;
}

interface IFinancialBudget {
  fundingSources: string;
  impactfulChanges: string;
}

interface IMeetingUpdate {
  index: number;
  field: keyof IMeeting;
  value: any
}


export interface IMeeting {
  meetingId?: number;
  meetingType?: string;
  meetingDate?: string; // ISO date string
  meetingMinutesURL?: string;
}

interface IRevisedAcademics {
  programsOffered: string;
  newProgrammesAdded: string;
  revisedPrograms: string;
}

interface ICourse {
  totalNewCourses: string,
  totalCoursesOnline: string,
  totalCourseFaceToFace: string
}

interface IRetentionOfStudents {
  currentStudents: string;
  transferStudents: string;
}

interface IDegreesConferred {
  degreesConferredForMostRecentAcademicYear: string;
  degreesConferredForMostRecentAcademicYearPerDepartment: string;
}

export interface AnnualReportInitialState {
  _id: string;
  academicYearID: string;
  departmentList: string;
  faculty: string;
  dean: string;
  missionStatement: string;
  strategicGoals: IStrategicGoals;
  accomplishments: IAccomplishments;
  researchPartnerships: IResearchPartnerships;
  revisedAcademics: IRevisedAcademics;
  courses: ICourse;
  eliminatedAcademicPrograms: string;
  retentionOfStudents: IRetentionOfStudents;
  studentInternships: string;
  degreesConferred: IDegreesConferred;
  studentSuccess: IStudentSuccess;
  activities: IActivity[];
  administrativeData: IAdministrativeData;
  financialBudget: IFinancialBudget;
  meetings: IMeeting[];
  otherComments: string;
  formSubmitted: boolean
}

const initialState: AnnualReportInitialState = {
  _id: "",
  academicYearID: "",
  departmentList: "",
  faculty: "",
  dean: "",
  missionStatement: "",
  strategicGoals: {
    previousAcademicYear: "",
    plans: "",
  },
  accomplishments: {
    accomplishmentList: "",
    accomplishmentAdvancement: "",
    multipleChoice: "",
    // teachingLearningImpact: "",
    // institutionalDevelopmentImpact: "",
    // trainingImpact: "",
    // nationalDevelopmentImpact: "",
    why: "",
    applicableOpportunities: ""
  },
  researchPartnerships: {
    externalFunding: "",
    researchPublications: "",
    partnershipAgencies: "",
    scholarships: ""
  },
  revisedAcademics: {
    programsOffered: "",
    newProgrammesAdded: "",
    revisedPrograms: "",
  },
  courses: {
    totalNewCourses: "",
    totalCoursesOnline: "",
    totalCourseFaceToFace: "",
  },
  eliminatedAcademicPrograms: "",
  retentionOfStudents: {
    currentStudents: "",
    transferStudents: "",
  },
  studentInternships: "",
  degreesConferred: {
    degreesConferredForMostRecentAcademicYear: "",
    degreesConferredForMostRecentAcademicYearPerDepartment: "",
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
      pictureURL: [
        {
          eventPicture: ""
        }
      ],
      eventSummary: "",
      eventMonth: "",
    }
  ],
  administrativeData: {
    fullTimeStaff: "",
    partTimeStaff: "",
    significantStaffChanges: ""
  },
  financialBudget: {
    fundingSources: "",
    impactfulChanges: "",
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
  formSubmitted: false
};

const annualReportSlice = createSlice({
  name: 'annualReport',
  initialState,
  reducers: {
    setAnnualReportState: (state, action: PayloadAction<AnnualReportInitialState>) => {
      return { ...state, ...action.payload };
    },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      return { ...state, academicYearID: action.payload }
    },
    setDepartmentList: (state, action: PayloadAction<string>) => {
      return { ...state, departmentList: action.payload }
    },
    setFaculty: (state, action: PayloadAction<string>) => {
      return { ...state, faculty: action.payload }
    },
    setDean: (state, action: PayloadAction<string>) => {
      return { ...state, dean: action.payload };
    },
    setMissionStatement: (state, action: PayloadAction<string>) => {
      return { ...state, missionStatement: action.payload };
    },
    setStrategicGoals: (state, action: PayloadAction<Partial<IStrategicGoals>>) => {
      return { ...state, strategicGoals: { ...state.strategicGoals, ...action.payload } };
    },
    setAccomplishments: (state, action: PayloadAction<Partial<IAccomplishments>>) => {
      return { ...state, accomplishments: { ...state.accomplishments, ...action.payload } };
    },
    setResearchPartnerships: (state, action: PayloadAction<Partial<IResearchPartnerships>>) => {
      return { ...state, researchPartnerships: { ...state.researchPartnerships, ...action.payload } };
    },
    setRevisedAcademics: (state, action: PayloadAction<Partial<IRevisedAcademics>>) => {
      return { ...state, revisedAcademics: { ...state.revisedAcademics, ...action.payload } };
    },
    setCourses: (state, action: PayloadAction<Partial<ICourse>>) => {
      return { ...state, courses: { ...state.courses, ...action.payload } };
    },
    
    setEliminatedAcademicProgram: (state, action: PayloadAction<string>) => {
      return { ...state, eliminatedAcademicPrograms: action.payload };
    },

    setRetentionOfStudents: (state, action: PayloadAction<Partial<IRetentionOfStudents>>) => {
      return { ...state, retentionOfStudents: {...state.retentionOfStudents,  ...action.payload } };
    },
    setStudentInternships: (state, action: PayloadAction<string>) => {
      return { ...state, studentInternships: action.payload };
    },
    setDegreesConferred: (state, action: PayloadAction<Partial<IDegreesConferred>>) => {
      return { ...state, degreesConferred: {...state.degreesConferred,  ...action.payload } };
    },

    setStudentSuccess: (state, action: PayloadAction<Partial<IStudentSuccess>>) => {
      return { ...state, studentSuccess: { ...state.studentSuccess, ...action.payload } }
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
    removeActivity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.activities.length) {
        state.activities.splice(index, 1);
      }
    },

    addNewActivity: (state) => {
      state.activities.push({
        eventId: state.activities.length,
        eventName: "",
        personsInPicture: "",
        eventMonth: "",
        pictureURL: [
          {
            eventPicture: "",
          }
        ],
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
    setAdministrativeData: (state, action: PayloadAction<Partial<IAdministrativeData>>) => {
      state.administrativeData = { ...state.administrativeData, ...action.payload }
    },
    setFinancialBudget: (state, action: PayloadAction<IFinancialBudget>) => {
      state.financialBudget = { ...state.financialBudget, ...action.payload }
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

    removeMeeting: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.meetings.length) {
        state.meetings.splice(index, 1);
      }
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
    setFormSubmitted: (state, _: PayloadAction<boolean>) => {
      console.log('form submitted')
      return {...state, formSubmitted: true}
    }
  },
});

export const {
  setAnnualReportState,
  setAcademicYearID,
  setDepartmentList,
  setFaculty,
  setDean,
  setMissionStatement,
  setStrategicGoals,
  setAccomplishments,
  setResearchPartnerships,
  setRevisedAcademics,
  setCourses,
  setEliminatedAcademicProgram,
  setRetentionOfStudents,
  setStudentInternships,
  setDegreesConferred,
  setStudentSuccess,
  setActivities,
  setAdministrativeData,
  setFinancialBudget,
  setMeetings,
  setOtherComments,
  addNewActivity,
  removeActivity,
  updateActivity,
  addNewMeeting,
  removeMeeting,
  updateMeeting,
  setFormSubmitted
} = annualReportSlice.actions;

export const selectAnnualReport = (state: RootState) => {
  return state.annualReport;
}
export const selectAcademicYearID = (state: RootState) => state.annualReport.academicYearID;
export const selectDepartmentList = (state: RootState) => state.annualReport.departmentList;
export const selectFaculty = (state: RootState) => state.annualReport.faculty;
export const selectDean = (state: RootState) => state.annualReport.dean;
export const selectMissionStatement = (state: RootState) => state.annualReport.missionStatement;
export const selectStrategicGoals = (state: RootState) => state.annualReport.strategicGoals;
export const selectAccomplishments = (state: RootState) => state.annualReport.accomplishments;
export const selectResearchPartnerships = (state: RootState) => state.annualReport.researchPartnerships || {};
export const selectRevisedAcademics = (state: RootState) => state.annualReport.revisedAcademics;
export const selectCourse = (state: RootState) => state.annualReport.courses;
export const selectEliminatedAcademicProgram = (state: RootState) => state.annualReport.eliminatedAcademicPrograms;
export const selectRetentionOfStudents = (state: RootState) => state.annualReport.retentionOfStudents;
export const selectStudentInternship = (state: RootState) => state.annualReport.studentInternships;
export const selectDegreesConferred = (state: RootState) => state.annualReport.degreesConferred;
export const selectStudentSuccess = (state: RootState) => state.annualReport.studentSuccess;
export const selectActivities = (state: RootState) => state.annualReport.activities;
export const selectAdministrativeData = (state: RootState) => state.annualReport.administrativeData;
export const selectFinancialBudget = (state: RootState) => state.annualReport.financialBudget;
export const selectMeetings = (state: RootState) => state.annualReport.meetings;
export const selectOtherComments = (state: RootState) => state.annualReport.otherComments;

export default annualReportSlice.reducer;
