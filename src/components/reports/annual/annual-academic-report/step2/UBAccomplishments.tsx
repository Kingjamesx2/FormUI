import React, { useState } from "react";
import Container from "@mui/material/Container";
import { UBTextField } from "../../../../common/UBTextField/UBTextField";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import UbDropdown from "../../../../UbDropdown/UbDropdown";
import Box from "@mui/material/Box";
import { UBRadioButton } from "../../../../common/UBRadioButton/UBRadioButton";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccomplishments,
  selectAccomplishments,
} from "../../../../../store/features/annualReportSlice";

const initialState = ["", "", "", "", "", ""];

export const UBAccomplishments: React.FC = () => {
  const dispatch = useDispatch();
  const accomplishments = useSelector(selectAccomplishments);
  const [state, setState] = useState<string[]>(initialState);

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "50px" }}>
        <center>Accomplishments for the Reporting Period</center>
      </h3>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="1. List significant accomplishments of the Faculty."
          SetAnswer={(e) =>
            dispatch(
              setAccomplishments({ accomplishmentList: e.target.value })
            )
          }
          value={accomplishments.accomplishmentList}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="2. Explain/Describe how each of the above has advanced Faculty goals as well as those of the University."
          SetAnswer={(e) =>
            dispatch(
              setAccomplishments({ accomplishmentAdvancement: e.target.value })
            )
          }
          value={accomplishments.accomplishmentAdvancement}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBRadioButton
          label="3. Identify the most impactful change/initiative by your faculty for the academic year and give reasons why."
          options={[
            { value: "Teaching and Learning", label: "Teaching and Learning" },
            {
              value:
                "Institutional Development (partnerships, funding, visibility etc.)",
              label:
                "Institutional Development (partnerships, funding, visibility etc.)",
            },
            {
              value:
                "Training, webinars, conference and/or projects of improvement and other major achievements for your department.",
              label:
                "Training, webinars, conference and/or projects of improvement and other major achievements for your department.",
            },
            { value: "National development", label: "National development" },
          ]}
          handleSetValue={(e) =>
            dispatch(
              setAccomplishments({ multipleChoice: e.target.value })
            )
          }
          value={accomplishments.multipleChoice}
        />
      </Box>
      
      <Box mb={-4.7} sx={{ ml: "-0.7%", mt: "-6%", width: "101.4%" }}>
        <UBTextArea
          question=""
          SetAnswer={(e) =>
            dispatch(
              setAccomplishments({ why: e.target.value })
            )
          }
          value={accomplishments.why}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="4. What were the opportunities gained from this academic year that can be applicable to the upcoming academic year? Please be as specific as possible."
          SetAnswer={(e) =>
            dispatch(
              setAccomplishments({ applicableOpportunities: e.target.value })
            )
          }
          value={accomplishments.applicableOpportunities}
        />
      </Box>
    </Container>
  );
};

export default UBAccomplishments;
