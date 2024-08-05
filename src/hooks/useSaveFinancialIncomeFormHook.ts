import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useUpdateFinanceReportMutation } from "../store/services/financeReportAPI";
import { selectFinanceReport } from "../store/features/financeReportSlice";

const useSaveFinancialIncomeFormHook = () => {
    const [saveForm, { data, error, isSuccess, isLoading }] = useUpdateFinanceReportMutation();
    const record = useSelector(selectFinanceReport)
    
    useEffect(() => {
        const triggerSaveForm = async () => await saveForm(record)
        
        triggerSaveForm()

    }, [record])

    return { data, error, isLoading, isSuccess }
}

export default useSaveFinancialIncomeFormHook;