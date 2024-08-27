import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateFinanceReportMutation } from "../store/services/financeReportAPI";
import { selectFinanceReport } from "../store/features/financeReportSlice";

const useSaveFinancialIncomeFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateFinanceReportMutation();
    const record = useSelector(selectFinanceReport)
    const navigate = useNavigate();
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(record)
        triggerSaveForm()
        if (record.formSubmitted) {
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }
    }, [record])

    return { data, error, isLoading, isSuccess }
}

export default useSaveFinancialIncomeFormHook;