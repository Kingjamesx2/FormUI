import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box } from "@mui/material";
import UBInfoTable from "../../../../components/common/UBInfoTable/UBInfoTable";
import Typography from "@mui/material/Typography";
import {
  setNumberOfStaff,
  setDepartment,
  selectHRReport,
} from "../../../../store/features/HRReportSlice";
import { RootState } from "../../../../store/store"; // Import your RootState or relevant type
import { UBTextField } from "../../../common/UBTextField/UBTextField";

const initialState = ["", "", ""];

const columns = [
  "Faculty",
  "Full-time faculty",
  "Adjunct faculty",
  "Non-teaching staff",
];

export const HumanResourceStatistics: React.FC = () => {
  const dispatch = useDispatch();
  const HRReport = useSelector(selectHRReport);
  const HRReportId = HRReport._id;
  const [state, setState] = useState<string[]>(initialState);
  const token = useSelector((state: RootState) => state.auth.token);

  const downloadPDF = async (id: string) => {
    try {
      // Fetch the PDF file
      const response = await fetch(
        `https://api.ub.edu.bz/api/generateHRPdf/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if the response is a PDF
      const contentType = response.headers.get("Content-Type");
      if (contentType !== "application/pdf") {
        throw new Error(`Unexpected content type: ${contentType}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const a = document.createElement("a");
      a.href = url;
      a.download = " Human Statistics Report.pdf"; // The filename the user will see

      // Append the link to the body
      document.body.appendChild(a);

      // Programmatically click the link to trigger the download
      a.click();

      // Remove the link after triggering the download
      a.remove();

      // Optionally, revoke the object URL after a short delay to release memory
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  const initialRows = [
    {
      degree: "Education and Arts",
      "Full-time faculty":
        HRReport.numberOfStaff.FulltimeFaculty.EducationAndArts,
      "Adjunct faculty": HRReport.numberOfStaff.AdjunctFaculty.EducationAndArts,
      "Non-teaching staff":
        HRReport.numberOfStaff.NonTeachingStaff.EducationAndArts,
    },
    {
      degree: "Management and Social Sciences",
      "Full-time faculty":
        HRReport.numberOfStaff.FulltimeFaculty.ManagementAndSocialSciences,
      "Adjunct faculty":
        HRReport.numberOfStaff.AdjunctFaculty.ManagementAndSocialSciences,
      "Non-teaching staff":
        HRReport.numberOfStaff.NonTeachingStaff.ManagementAndSocialSciences,
    },
    {
      degree: "Health Sciences",
      "Full-time faculty":
        HRReport.numberOfStaff.FulltimeFaculty.HealthSciences,
      "Adjunct faculty": HRReport.numberOfStaff.AdjunctFaculty.HealthSciences,
      "Non-teaching staff":
        HRReport.numberOfStaff.NonTeachingStaff.HealthSciences,
    },
    {
      degree: "Science and Technology",
      "Full-time faculty":
        HRReport.numberOfStaff.FulltimeFaculty.ScienceAndTechnology,
      "Adjunct faculty":
        HRReport.numberOfStaff.AdjunctFaculty.ScienceAndTechnology,
      "Non-teaching staff":
        HRReport.numberOfStaff.NonTeachingStaff.ScienceAndTechnology,
    },
  ];

  const questions = [
    {
      question: "Number of Staff Academic Year 2023/2024",
      handleSetAnswer: (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState((prevState) => [prevState[0], prevState[1], value]);
      },
      type: "table",
      value: state[0],
    },
  ];

  const handleSetValue = (value: any) => {
    const _v = [JSON.parse(JSON.stringify(HRReport.numberOfStaff))];

    let fulltimeTotal = 0;
    let adjunctTotal = 0;
    let nonTeachingTotal = 0;

    value.forEach((_newValue: any) => {
      const row = Object.values(_newValue);

      const fullTimeValue = Number(row[1]) || 0; // Ensure value is a number
      const adjunctValue = Number(row[2]) || 0; // Ensure value is a number
      const nonTeachingValue = Number(row[3]) || 0; // Ensure value is a number

      _v.forEach((v) => {
        if (row[0] === "Education and Arts") {
          v.FulltimeFaculty.EducationAndArts = fullTimeValue;
          v.AdjunctFaculty.EducationAndArts = adjunctValue;
          v.NonTeachingStaff.EducationAndArts = nonTeachingValue;
        } else if (row[0] === "Management and Social Sciences") {
          v.FulltimeFaculty.ManagementAndSocialSciences = fullTimeValue;
          v.AdjunctFaculty.ManagementAndSocialSciences = adjunctValue;
          v.NonTeachingStaff.ManagementAndSocialSciences = nonTeachingValue;
        } else if (row[0] === "Health Sciences") {
          v.FulltimeFaculty.HealthSciences = fullTimeValue;
          v.AdjunctFaculty.HealthSciences = adjunctValue;
          v.NonTeachingStaff.HealthSciences = nonTeachingValue;
        } else if (row[0] === "Science and Technology") {
          v.FulltimeFaculty.ScienceAndTechnology = fullTimeValue;
          v.AdjunctFaculty.ScienceAndTechnology = adjunctValue;
          v.NonTeachingStaff.ScienceAndTechnology = nonTeachingValue;
        }
      });

      // Sum up the totals
      fulltimeTotal += fullTimeValue;
      adjunctTotal += adjunctValue;
      nonTeachingTotal += nonTeachingValue;
    });

    // Update the totals
    _v[0].FulltimeFaculty.Total = fulltimeTotal;
    _v[0].AdjunctFaculty.Total = adjunctTotal;
    _v[0].NonTeachingStaff.Total = nonTeachingTotal;

    dispatch(setNumberOfStaff(_v[0]));
  };

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ margin: "5% 0 -4% 0" }}>
        <center> Human Resource Statistics</center>
      </h3>

      <Box>
        <Box
          sx={{
            ml: "15%",
            mt: "10%",
            p: "2%",
            width: "68%",
            backgroundColor: "#FFD954",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Academic Year: 2023-2024
          </Typography>
        </Box>

        <Box
          sx={{
            color: "red",
            display: "flex",
            justifyContent: "left",
            width: "70%",
            ml: "15%",
            mt: "-3%",
            pb: "2%",
            pt: "3%",
            pl: "2%",
            backgroundColor: "#FFD954",
            borderRadius: "0 0 5px 5px",
          }}
        >
          The annual report Key statistics provides significant statistics for
          the University of Belize for the academic year.
        </Box>

        <Box sx={{ width: "101.4%", ml: "0.29%", mb: "-2%", mt: "-3%" }}>
          <UBTextField
            question="Office/Department"
            SetAnswer={(e) => dispatch(setDepartment(e.target.value as string))}
            value={HRReport.department}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mt: "6%",
          width: "68%",
          ml: "15%",
          mb: "-6%",
          pt: "3%",
          pb: "2%",
          pl: "2%",
          backgroundColor: "#FFD954",
          fontWeight: "bold",
          borderRadius: "5px 5px 0 0",
        }}
      >
        Number of Staff Academic Year 2023/2024
      </Box>
      <UBInfoTable
        columns={columns}
        initialRows={initialRows}
        SetValue={handleSetValue}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7rem",
          position: "relative",
          top: "5.8rem",
        }}
      >
        <button
          onClick={() => downloadPDF(HRReportId)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          Download PDF
        </button>
      </div>
    </Container>
  );
};

export default HumanResourceStatistics;
