import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateHRReportMutation } from "../store/services/HRReportApi";
import { selectHRReport } from "../store/features/HRReportSlice";

const useSaveHRReportFormHook = () => {
  const [saveForm, { data, error, isSuccess, isLoading }] =
    useUpdateHRReportMutation();
  const record = useSelector(selectHRReport);
  const navigate = useNavigate();

  useEffect(() => {
    const triggerSaveForm = async () => await saveForm(record);
    triggerSaveForm();
    if (record.formSubmitted) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [record]);

  return { data, error, isLoading, isSuccess };
};

export default useSaveHRReportFormHook;
