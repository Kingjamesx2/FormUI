import { baseAPI } from "./baseAPI";
import {RecordsReportState, setRecordReportState} from "../features/recordsReportSlice"

export const RecordsReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchRecordsReport: builder.query({
            query: () => ({
              //check  url again
                url: '/recordsReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    
                    if(data?.data?.reportData)
                        dispatch(setRecordReportState(data.data.reportData))
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateRecordReport: builder.mutation({
            query: (body: Partial<RecordsReportState>) => ({
              //check URL
                url: '/recordsReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchRecordsReportQuery, useUpdateRecordReportMutation
} = RecordsReportAPI