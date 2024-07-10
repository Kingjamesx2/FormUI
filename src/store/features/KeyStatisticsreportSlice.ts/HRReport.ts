// Interfaces
interface FacultyCount {
    EducationAndArts: number;
    ManagementAndSocialSciences: number;
    HealthSciences: number;
    ScienceAndTechnology: number;
    Total: number;
  }
  
  interface NumberOfStaff {
    FulltimeFaculty: FacultyCount;
    AdjunctFaculty: FacultyCount;
    NonTeachingStaff: FacultyCount;
  }
  
  interface HRReportState {
    userID: string;
    academicYearID: string;
    department: string;
    deadline: string;
    numberOfStaff: NumberOfStaff;
  }
  
  // Initial State
  const HRReportInitialState: HRReportState = {
    userID: "user456",
    academicYearID: "2023-2024",
    department: "Human Resources - statistics post test",
    deadline: "2024-12-31T00:00:00Z",
    numberOfStaff: {
      FulltimeFaculty: {
        EducationAndArts: 20,
        ManagementAndSocialSciences: 25,
        HealthSciences: 15,
        ScienceAndTechnology: 30,
        Total: 90,
      },
      AdjunctFaculty: {
        EducationAndArts: 10,
        ManagementAndSocialSciences: 12,
        HealthSciences: 8,
        ScienceAndTechnology: 15,
        Total: 45,
      },
      NonTeachingStaff: {
        EducationAndArts: 5,
        ManagementAndSocialSciences: 6,
        HealthSciences: 4,
        ScienceAndTechnology: 8,
        Total: 23,
      },
    },
  };
  