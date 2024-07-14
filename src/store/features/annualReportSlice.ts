import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path according to your project structure
import { number, string } from 'prop-types';

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
  impactfulChanges: string;
}

interface IMeeting {
  meetingType: string;
  meetingDate: string; // ISO date string
  meetingMinutesURL: string;
}

interface IRevisedAcademics {
  programsOffered: number;
  newProgrammesAdded: string;
  revisedPrograms: string;
}

interface ICourse {
  totalNewCourses: number | null,
  totalCoursesOnline: number,
  totalCourseFaceToFace: number,
}

interface IRetentionOfStudents {
  currentStudents: string;
  transferStudents: string;
}

interface IDegreesConferred {
  degreesConferredForMostRecentAcademicYear: number;
  degreesConferredForMostRecentAcademicYearPerDepartment: number;
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
    programsOffered: 0,
    newProgrammesAdded: "",
    revisedPrograms: "",
  },
  course: {
    totalNewCourses: null,
    totalCoursesOnline: 5,
    totalCourseFaceToFace: 0,
  },
  eliminatedAcademicPrograms: "",
  retentionOfStudents: {
    currentStudents: "",
    transferStudents: "",
  },
  studentIntership: "",
  degreesConferred: {
    degreesConferredForMostRecentAcademicYear: 0,
    degreesConferredForMostRecentAcademicYearPerDepartment: 0,
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
    impactfulChanges: "",
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
    setActivities: (state, action: PayloadAction<IActivity[]>) => {
      state.activities = { ...state.activities, ...action.payload }
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
