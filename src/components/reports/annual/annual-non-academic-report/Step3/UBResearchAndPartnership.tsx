import React, { useState } from "react";
import { Container } from "@mui/material";
import { UBTextArea } from "../../../../common/Textarea/UBTextArea";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectAnnualNonReport, setResearchPartnerships } from "../../../../../store/features/annualNonReportSlice";

export const UBResearchAndPartnership = () => {
  const dispatch = useDispatch();
  const annualNonReport = useSelector(selectAnnualNonReport)

  return (
    <Container sx={{ width: 1, m: 1, p: 1 }}>
      <h3 style={{ marginBottom: "-10px" }}><center>Research & Partnerships</center></h3>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="1. Please list any external funding received by the faculty. Include research and training grant proposals and awards, as well as any other support."
          SetAnswer={(e) => dispatch(setResearchPartnerships({ externalFunding: e.target.value }))}
          value={annualNonReport.researchPartnerships.externalFunding}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="2. Please list research and publications generated as a result of the faculty’s activities (full citations)."
          SetAnswer={(e) => dispatch(setResearchPartnerships({ researchPublications: e.target.value }))}
          value={annualNonReport.researchPartnerships.researchPublications}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="3. List any partnership agencies/organizations which your faculty engaged with during the year in review."
          SetAnswer={(e) => dispatch(setResearchPartnerships({ partnershipAgencies: e.target.value }))}
          value={annualNonReport.researchPartnerships.partnershipAgencies}
        />
      </Box>
      
      <Box mb={-4.5}>
        <UBTextArea
          question="4. List any scholarships, fellowships or exchange programmes received or offered by your division."
          SetAnswer={(e) => dispatch(setResearchPartnerships({ scholarships: e.target.value }))}
          value={annualNonReport.researchPartnerships.scholarships}
        />
      </Box>
    </Container>
  );
};

export default UBResearchAndPartnership;
