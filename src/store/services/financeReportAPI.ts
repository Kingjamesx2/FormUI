import { baseAPI } from "./baseAPI";
import { setFinanceReport, IFinanceReportState } from "../features/financeReportSlice";

export const RecordsReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchFinanceReport: builder.query({
            query: () => ({
              //check  url again
                url: '/financeReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled

                    if(data?.data?.reportData)
                        dispatch(setFinanceReport(data.data.reportData))
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateFinanceReport: builder.mutation({
            query: (body: Partial<IFinanceReportState>) => ({
              //check URL
                url: '/financeReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchFinanceReportQuery, useUpdateFinanceReportMutation
} = RecordsReportAPI