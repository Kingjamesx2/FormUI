import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import "./FormOne.scss";

// Define the interface for the component props
interface IStep {
  label: string;
  stepComponent: JSX.Element;
}

interface IUBStepperProps {
  steps: IStep[];
  submitFn: () => void;
  hideStepper?: boolean;
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

export const UBStepper: React.FC<IUBStepperProps> = ({ steps, submitFn, hideStepper }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const [formData, setFormData] = useState<{ [key: number]: any }>({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    if (isLastStep()) {
      // Handle submit logic here
      window.alert("Form submitted");
      submitFn()
      // navigate("/"); // Navigate to the home page
    } else {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((_, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional: Adds smooth scrolling
      });
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
    setFormData({});
  };

  const updateFormData = (step: number, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <div className="form">
      <Stack sx={{ width: "100vw" }}>
        {!hideStepper && ( // Conditionally render the Stepper
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={stepStyle(isSmallScreen)}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "60%",
              margin: "3% 0 0 18%",
            }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)} />
              </Step>
            ))}
          </Stepper>
        )}


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          {React.cloneElement(steps[activeStep].stepComponent, {
            data: formData[activeStep] || {},
            updateData: (data: any) => updateFormData(activeStep, data),
          })}
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
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  ml: "30%",
                  backgroundColor: "#E3DFCF", // Set the background color of the button
                  color: "#000", // Set the text color
                  width: "2.5%", // Set the width of the button
                  height: "5%", // Set the height of the button
                  mt: "2%",
                  
                  "&:hover": {
                    backgroundColor: "#FFB700", // Set the background color on hover
                  },
                  "&.Mui-disabled": {
                    color: "#fff", // Set the text color when the button is disabled
                  },
                }}
              >
                Back
              </Button>
              <Stack sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{
                  mr: "29.5%",
                  bgcolor: "#FFD954",
                  color: "black",
                  mt: "2%",
                  mb: 2,
                }}
              >
                {isLastStep() ? "Submit" : "Next"}
              </Button>
            </Stack>
          </React.Fragment>
        )}
      </Stack>
    </div>
  );
};

export default UBStepper;
