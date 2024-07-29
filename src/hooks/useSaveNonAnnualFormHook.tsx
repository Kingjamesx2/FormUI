import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { Box, Button } from "@mui/material";
// import SaveIcon from '@mui/icons-material/Save';
// import Snackbar from '@mui/material/Snackbar';
import { useUpdateAnnualNonReportMutation } from "../store/services/annualNonReportAPI";
import { selectAnnualNonReport } from "../store/features/annualNonReportSlice";

const useSaveNonAnnualFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateAnnualNonReportMutation();
    const annualNonReport = useSelector(selectAnnualNonReport)
    
    useEffect(() => {
        console.warn(annualNonReport)
        const triggerSaveForm = async () => await saveForm(annualNonReport)

        triggerSaveForm()

        console.log(data, error, isSuccess)

    }, [annualNonReport])

    return { data, error, isLoading, isSuccess }
}

export default useSaveNonAnnualFormHook