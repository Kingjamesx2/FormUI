import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface IUBPaperProps {
  children?: React.ReactNode;
}

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  whiteSpace: "nowrap", // Prevent text from wrapping if you want the paper to expand with text
  backgroundColor: "#FFD954", // Set background color to yellow
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    textAlign: 'center', // Center align text on small screens
  },
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    textAlign: 'left', // Align text to the left on medium and larger screens
  },
}));

export const UBPaper: React.FC<IUBPaperProps> = ({ children }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 10, justifyContent: 'center' }}>
      <DemoPaper variant="outlined">
        {children}
      </DemoPaper>
    </Stack>
  );
};

export default UBPaper;
