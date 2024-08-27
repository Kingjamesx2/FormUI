import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUpdateRecordReportMutation } from "../../store/services/recordsReportAPI";
import { selectRecordReport } from "../../store/features/recordsReportSlice";
import { useNavigate } from "react-router-dom";

const useSaveRecordFormHook = () => {
  const [saveForm, { data, error, isSuccess, isLoading }] =
    useUpdateRecordReportMutation();
  const record = useSelector(selectRecordReport);
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

export default useSaveRecordFormHook;
