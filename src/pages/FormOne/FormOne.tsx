// import React from "react";
import UBStepper from "../../components/common/Stepper/UBStepper";
import UBStep from "../../components/common/Textarea/UBTextArea";

const steps = [
  { label: "Step 1", stepComponent: <UBStep /> },
  { label: "Step 2", stepComponent: <UBStep /> },
  { label: "Step 3", stepComponent: <UBStep /> },
];

export const FormOne = () => <UBStepper steps={steps} />;
