import { baseAPI } from "./baseAPI";
import { setHRReportState, IHRReportState } from '../features/HRReportSlice'

export const HRReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchHRReport: builder.query({
            query: () => ({
                url: '/HRReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled

                    if(data?.data?.reportData)
                        dispatch(setHRReportState(data.data.reportData))
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateHRReport: builder.mutation({
            query: (body: Partial<IHRReportState>) => ({
                url: '/HRReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchHRReportQuery, useUpdateHRReportMutation
} = HRReportAPI