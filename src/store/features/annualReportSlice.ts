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
  value: any
}

interface IAdministrativeData {
  fullTimeStaff: number | null;
  partTimeStaff: number | null;
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
  programsOffered: number | null;
  newProgrammesAdded: string;
  revisedPrograms: string;
}

interface ICourse {
  totalNewCourses: number | null,
  totalCoursesOnline: number | null,
  totalCourseFaceToFace: number | null
}

interface IRetentionOfStudents {
  currentStudents: string;
  transferStudents: string;
}

interface IDegreesConferred {
  degreesConferredForMostRecentAcademicYear: number | null;
  degreesConferredForMostRecentAcademicYearPerDepartment: number | null;
}

export interface AnnualReportInitialState {
  academicYearID: string;
  departmentList: string;
  faculty: string;
  dean: string;
  missionStatement: string;
  strategicGoals: IStrategicGoals;
  accomplishments: IAccomplishments;
  researchPartnerships: IResearchPartnerships;
  revisedAcademics: IRevisedAcademics;
  course: ICourse;
  eliminatedAcademicPrograms: string;
  retentionOfStudents: IRetentionOfStudents;
  studentIntership: string;
  degreesConferred: IDegreesConferred;
  studentSuccess: IStudentSuccess;
  activities: IActivity[];
  administrativeData: IAdministrativeData;
  financialBudget: IFinancialBudget;
  meetings: IMeeting[];
  otherComments: string;
}

const initialState: AnnualReportInitialState = {
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
    programsOffered: null,
    newProgrammesAdded: "",
    revisedPrograms: "",
  },
  course: {
    totalNewCourses: null,
    totalCoursesOnline: null,
    totalCourseFaceToFace: null,
  },
  eliminatedAcademicPrograms: "",
  retentionOfStudents: {
    currentStudents: "",
    transferStudents: "",
  },
  studentIntership: "",
  degreesConferred: {
    degreesConferredForMostRecentAcademicYear: null,
    degreesConferredForMostRecentAcademicYearPerDepartment: null,
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
        }
      ],
      eventSummary: "",
      eventMonth: "",
    }
  ],
  administrativeData: {
    fullTimeStaff: null,
    partTimeStaff: null,
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
  otherComments: ""
};

const annualReportSlice = createSlice({
  name: 'annualReport',
  initialState,
  reducers: {
    setAnnualReportState: (state, action: PayloadAction<AnnualReportInitialState>) => {
      state = action.payload;
    },
    setAcademicYearID: (state, action: PayloadAction<string>) => {
      state.academicYearID = action.payload;
    },
    setDepartmentList: (state, action: PayloadAction<string>) => {
      state.departmentList = action.payload;
    },
    setFaculty: (state, action: PayloadAction<string>) => {
      state.faculty = action.payload;
    },
    setDean: (state, action: PayloadAction<string>) => {
      state.dean = action.payload;
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
    setRevisedAcademics: (state, action: PayloadAction<Partial<IRevisedAcademics>>) => {
      state.revisedAcademics = { ...state.revisedAcademics, ...action.payload };
    },
    setCourse: (state, action: PayloadAction<Partial<ICourse>>) => {
      state.course = { ...state.course, ...action.payload };
    },
    
    setEliminatedAcademicProgram: (state, action: PayloadAction<string>) => {
      state.eliminatedAcademicPrograms =  action.payload ;
    },

    setRetentionOfStudents: (state, action: PayloadAction<Partial<IRetentionOfStudents>>) => {
      state.retentionOfStudents = {...state.retentionOfStudents,  ...action.payload };
    },
    setStudentIntership: (state, action: PayloadAction<string>) => {
      state.studentIntership = action.payload ;
    },
    setDegreesConferred: (state, action: PayloadAction<Partial<IDegreesConferred>>) => {
      state.degreesConferred = {...state.degreesConferred,  ...action.payload };
    },

    setStudentSuccess: (state, action: PayloadAction<Partial<IStudentSuccess>>) => {
      state.studentSuccess = { ...state.studentSuccess, ...action.payload }
    },
    // setActivities: (state, action: PayloadAction<Partial<IActivity>>) => {
    //   const _event = state.activities.find(i => i.eventId === action.payload.eventId)
    //   if (_event) { // update
    //     state.activities[_event.eventId || 0] = {..._event}
    //   } else {
    //     state.activities.push({...action.payload, eventId: state.activities.length})
    //   }
    // },
    // addNewActivity: (state) => {
    //   state.activities.push({
    //     eventId: state.activities.length,
    //     eventName: "",
    //     eventMonth: "",
    //     eventPicture: [],
    //     eventSummary: ""
    //   })
    // },
    // updateActivity:(state, action: PayloadAction<IActivityUpdate>) => {
    //   let _activity: IActivity = state.activities.find(i => i.eventId == action.payload.index) as IActivity
    //   const field = action.payload.field

    // if (_activity) {
    //   state.activities[action.payload.index] = {..._activity }
    //   _activity[field] = action.payload.value
    //   console.warn('activitt :::: ', _activity, action.payload, state.activities[0])
    // }\

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
    setAdministrativeData: (state, action: PayloadAction<Partial<IAdministrativeData>>) => {
      state.administrativeData = { ...state.administrativeData, ...action.payload }
    },
    setFinancialBudget: (state, action: PayloadAction<IFinancialBudget>) => {
      state.financialBudget = { ...state.financialBudget, ...action.payload }
    },
    // setMeetings: (state, action: PayloadAction<IMeeting>) => {
    //   state.meetings = {...state.meetings, ...action.payload };
    // },

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
  setCourse,
  setEliminatedAcademicProgram,
  setRetentionOfStudents,
  setStudentIntership,
  setDegreesConferred,
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
} = annualReportSlice.actions;

export const selectAnnualReport = (state: RootState) => state.annualReport;
export const selectAcademicYearID = (state: RootState) => state.annualReport.academicYearID;
export const selectDepartmentList = (state: RootState) => state.annualReport.departmentList;
export const selectFaculty = (state: RootState) => state.annualReport.faculty;
export const selectDean = (state: RootState) => state.annualReport.dean;
export const selectMissionStatement = (state: RootState) => state.annualReport.missionStatement;
export const selectStrategicGoals = (state: RootState) => state.annualReport.strategicGoals;
export const selectAccomplishments = (state: RootState) => state.annualReport.accomplishments;
export const selectResearchPartnerships = (state: RootState) => state.annualReport.researchPartnerships;
export const selectRevisedAcademics = (state: RootState) => state.annualReport.revisedAcademics;
export const selectCourse = (state: RootState) => state.annualReport.course;
export const selectEliminatedAcademicProgram = (state: RootState) => state.annualReport.eliminatedAcademicPrograms;
export const selectRetentionOfStudents = (state: RootState) => state.annualReport.retentionOfStudents;
export const selectStudentInternship = (state: RootState) => state.annualReport.studentIntership;
export const selectDegreesConferred = (state: RootState) => state.annualReport.degreesConferred;
export const selectStudentSuccess = (state: RootState) => state.annualReport.studentSuccess;
export const selectActivities = (state: RootState) => state.annualReport.activities;
export const selectAdministrativeData = (state: RootState) => state.annualReport.administrativeData;
export const selectFinancialBudget = (state: RootState) => state.annualReport.financialBudget;
export const selectMeetings = (state: RootState) => state.annualReport.meetings;
export const selectOtherComments = (state: RootState) => state.annualReport.otherComments;

export default annualReportSlice.reducer;
