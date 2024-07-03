import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StepLabel from "@mui/material/StepLabel";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Header } from './../Header/Header';
import "./FormOne.scss";
import { CenterFocusStrong } from "@mui/icons-material";

// Define the interface for the component props
interface IStep {
    label: string;
    stepComponent: JSX.Element
}

interface IUBStepperProps {
  steps: IStep[];
}

const stepStyle = (isSmallScreen: boolean) => ({
  padding: 2,
  flexDirection: isSmallScreen ? "column" : "row",
  "& .MuiStepLabel-label": {
    color: "white",
  },
  "& .MuiStepIcon-root": {
    color: "#3B153F",
    borderRadius: "50%",
    fontSize: "1rem",
  },
  "& .Mui-active .MuiStepIcon-root": {
    color: "#3B153F",
    fontSize: "2rem",
  },
  "& .Mui-active .MuiStepConnector-line": {
    borderColor: "warning.main",
  },
  "& .Mui-completed .MuiStepIcon-root": {
    color: "secondary.main",
    fontSize: "2rem",
  },
  "& .Mui-completed .MuiStepConnector-line": {
    borderColor: "secondary.main",
  },
});

export const UBStepper: React.FC<IUBStepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    if (isLastStep() && allStepsCompleted()) {
      // Handle submit logic here
      console.log("Form submitted");
    } else {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((_, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="form">
      <Stack sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep} sx={stepStyle(isSmallScreen)} style={{display: "flex", justifyContent: "center", width: "90%", marginLeft: "5%", marginTop: "2%", marginBottom: "-2%"}}>
            {steps.map((step, index) => (
              <Step key={step.label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>
                  {/* <StepLabel>{step.label}</StepLabel> */}
                </StepButton>
              </Step>
            ))}
          </Stepper>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: isSmallScreen ? "column" : "row",
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
              <Button
                onClick={handleNext}
                sx={{
                  mr: 1,
                  bgcolor: "#FFD954",
                  color: "black",
                  mb: 2,
                }}
              >
                {isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Stack>
          </React.Fragment>
        )}
      </Stack>
    </div>
  );
};

export default UBStepper;
