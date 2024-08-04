import React from "react";
import UBStepper from "../../components/common/Stepper/UBStepper";
import Header from '../../components/common/Header/Header';  // Import the Header component
import RecordsAndAdmissionsStep1 from "../../components/reports/annual/records-and-admissions/Step1/RecordsAndAdmissionsStep1";
import RecordsAndAdmissionsStep2 from "../../components/reports/annual/records-and-admissions/Step2/RecordsAndAdmissionstStep2";



const steps = [
  { label: "Step 1", stepComponent: <RecordsAndAdmissionsStep1 /> },
  { label: "Step 2", stepComponent: <RecordsAndAdmissionsStep2 /> },
 
];


export const RecordsAndAdmissions: React.FC = () => {
    return(
        <div>
        <Header
          logo="./../icons/UB_Logo.png"
          title="UB Records and Admissions"
        />
        <UBStepper steps={steps} />
        </div>
    )
}

export default RecordsAndAdmissions;