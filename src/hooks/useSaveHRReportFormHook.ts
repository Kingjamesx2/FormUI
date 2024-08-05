import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useUpdateHRReportMutation } from "../store/services/HRReportApi";
import { selectHRReport } from "../store/features/HRReportSlice";

const useSaveHRReportFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateHRReportMutation();
    const record = useSelector(selectHRReport)
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(record)
        
        triggerSaveForm()

    }, [record])

    return { data, error, isLoading, isSuccess }
}

export default useSaveHRReportFormHook;