import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { Box, Button } from "@mui/material";
// import SaveIcon from '@mui/icons-material/Save';
// import Snackbar from '@mui/material/Snackbar';
import { useUpdateRecordReportMutation } from "../../store/services/KeyStatisticReport/recordsReportAPI";
import { selectRecordReport } from "../../store/features/KeyStatisticsreportSlice/recordsReportSlice";

const useSaveRecordFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateRecordReportMutation();
    const RecordReport = useSelector(selectRecordReport)
    
    useEffect(() => {
        console.warn(RecordReport)
        const triggerSaveForm = async () => await saveForm(RecordReport)

        triggerSaveForm()

        console.log(data, error, isSuccess)

    }, [RecordReport])

    return { data, error, isLoading, isSuccess }
}

export default useSaveRecordFormHook;