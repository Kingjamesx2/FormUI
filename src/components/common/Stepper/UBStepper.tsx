import React, { useState } from "react";
//import Form from "@mui/material/Form";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from '@mui/material';
import { Header } from './../Header/Header';


// import UBStep from "./UBStep";
import "./FormOne.scss";
import { Padding } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Define the interface for the component props
interface IStep {
    label: string;
    stepComponent: JSX.Element
}

interface IUBStepperProps {
  steps: IStep[];
}

// const steps = ["About You", "Start Date", "Review"];

const stepStyle = {
  // boxShadow: 2,
  // backgroundColor: "rgba(0,0,0,0.1)",
  padding: 2,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "warning.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "warning.main",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "secondary.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "secondary.main",
    },
  },
};

export const UBStepper: React.FC<IUBStepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="form">
       <Header
        logo="./../icons/UB_Logo.png"
        title="UB Annual Report Template Academic Division"
        />        
      <Stack sx={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep} sx={stepStyle}>
          {steps.map((step, index) => (
            <Step key={step.label} completed={completed[index]}>
              {!isLastStep() ? (
                <StepButton onClick={handleStep(index)}>{step.label}</StepButton>
              ) : (
                <StepButton
                  sx={
                    isLastStep()
                      ? {
                          "& .MuiSvgIcon-root": {
                            color: "warning.main",
                            fontSize: "2rem",
                          },
                        }
                      : allStepsCompleted()
                        ? {
                            "& .MuiSvgIcon-root": {
                              color: "secondary.main",
                              fontSize: "2rem",
                            },
                          }
                        : { color: "rgba(0, 0, 0, 0.38)" }
                  }
                  icon={<VisibilityIcon />}
                  onClick={handleStep(index)}
                >
                  {step.label}
                </StepButton>
              )}
            </Step>
          ))} 
        </Stepper>

        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // margin: "0 auto"
        }}
      >
        {steps[activeStep].stepComponent}
      </Box>


  

        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Stack direction="row" sx={{ pt: 2 }}>
              <Stack sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Stack>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack direction="row" sx={{ pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: "#fff" }}
              >
                Back
              </Button>
              <Stack sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} 
              sx={{ mr: 1, 
                bgcolor:"#FFD954",
                color: "black",
                mb: 2 
                }}>
                Next
              </Button>
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))} */}
            </Stack>
          </React.Fragment>
        )}
      </Stack>
    </div>
  );
};

export default UBStepper;
