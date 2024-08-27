import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUpdateAnnualReportMutation } from "../store/services/annualReportAPI";
import { selectAnnualReport } from "../store/features/annualReportSlice";
import { useNavigate } from "react-router-dom";

const useSaveAnnualFormHook = () => {
  const [saveForm, { data, error, isSuccess, isLoading }] =
    useUpdateAnnualReportMutation();
  const annualReport = useSelector(selectAnnualReport);
  const navigate = useNavigate();


  useEffect(() => {
    const triggerSaveForm = async () => await saveForm(annualReport);
    triggerSaveForm();
    if (annualReport.formSubmitted) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [annualReport]);

  return { data, error, isLoading, isSuccess };
};

export default useSaveAnnualFormHook;
