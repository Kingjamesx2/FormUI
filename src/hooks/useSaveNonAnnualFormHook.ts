import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUpdateAnnualNonReportMutation } from "../store/services/annualNonReportAPI";
import { selectAnnualNonReport } from "../store/features/annualNonReportSlice";
import { useNavigate } from "react-router-dom";

const useSaveNonAnnualFormHook = () => {
  const [saveForm, { data, error, isSuccess, isLoading }] =
    useUpdateAnnualNonReportMutation();
  const annualNonReport = useSelector(selectAnnualNonReport);
  const navigate = useNavigate();

  useEffect(() => {
    const triggerSaveForm = async () => await saveForm(annualNonReport);

    triggerSaveForm();
    if (annualNonReport.formSubmitted) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [annualNonReport]);

  return { data, error, isLoading, isSuccess };
};

export default useSaveNonAnnualFormHook;
