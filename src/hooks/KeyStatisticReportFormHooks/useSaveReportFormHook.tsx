import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { Box, Button } from "@mui/material";
// import SaveIcon from '@mui/icons-material/Save';
// import Snackbar from '@mui/material/Snackbar';
import { useUpdateRecordReportMutation } from "../../store/services/recordsReportAPI";
import { selectRecordReport } from "../../store/features/recordsReportSlice";

const useSaveRecordFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateRecordReportMutation();
    const record = useSelector(selectRecordReport)
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(record)

        triggerSaveForm()

    }, [record])

    return { data, error, isLoading, isSuccess }
}

export default useSaveRecordFormHook;