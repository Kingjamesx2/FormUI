import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { Box, Button } from "@mui/material";
// import SaveIcon from '@mui/icons-material/Save';
// import Snackbar from '@mui/material/Snackbar';
import { useUpdateAnnualReportMutation } from "../store/services/annualReportAPI";
import { selectAnnualReport } from "../store/features/annualReportSlice";

const useSaveAnnualFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateAnnualReportMutation();
    const annualReport = useSelector(selectAnnualReport)
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(annualReport)

        triggerSaveForm()
    }, [annualReport])

    return { data, error, isLoading, isSuccess }
}

export default useSaveAnnualFormHook