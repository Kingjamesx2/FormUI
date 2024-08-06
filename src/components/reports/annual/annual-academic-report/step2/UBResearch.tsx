import React from "react";
import Container from "@mui/material/Container";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { setResearchPartnerships, selectAnnualReport } from "../../../../../store/features/annualReportSlice";

export const UBresearch: React.FC = () => {
  const dispatch = useDispatch();
  const annualReport = useSelector(selectAnnualReport)

  return (
    <Container sx={{ width: 1, m: 1, mb: "100px", p: 1 }}>
      <h3 style={{ marginBottom: "-20px", marginTop: "60px" }}>
        <center>Research & Partnership</center>
      </h3>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="1. Please list any external funding received by the faculty, include research and training grant proposals and awards, as well as any other support."
          SetAnswer={(e) =>
            dispatch(setResearchPartnerships({ externalFunding: e.target.value }))
          }
          value={annualReport.researchPartnerships.externalFunding}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="2. Please list research and publications generated as a result of the faculty’s activities (full citations)."
          SetAnswer={(e) =>
            dispatch(setResearchPartnerships({ researchPublications: e.target.value }))
          }
          value={annualReport.researchPartnerships.researchPublications}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="3. List any partnership agencies/organizations which your faculty engaged with during the year in review."
          SetAnswer={(e) =>
            dispatch(setResearchPartnerships({ partnershipAgencies: e.target.value }))
          }
          value={annualReport.researchPartnerships.partnershipAgencies}
        />
      </Box>
      
      <Box mb={-4.7}>
        <UBTextArea
          question="4. List any scholarships, fellowships or exchange programmes received or offered by the Faculty."
          SetAnswer={(e) =>
            dispatch(setResearchPartnerships({ scholarships: e.target.value }))
          }
          value={annualReport.researchPartnerships.scholarships}
        />
      </Box>
    </Container>
  );
};

export default UBresearch;
