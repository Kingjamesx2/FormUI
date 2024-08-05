import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUpdateAnnualNonReportMutation } from "../store/services/annualNonReportAPI";
import { selectAnnualNonReport } from "../store/features/annualNonReportSlice";

const useSaveNonAnnualFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateAnnualNonReportMutation();
    const annualNonReport = useSelector(selectAnnualNonReport)
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(annualNonReport)

        triggerSaveForm()

    }, [annualNonReport])

    return { data, error, isLoading, isSuccess }
}

export default useSaveNonAnnualFormHook;