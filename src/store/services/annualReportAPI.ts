import { baseAPI } from "./baseAPI"
import {AnnualReportInitialState, setAnnualReportState} from "../../store/features/annualReportSlice"

export const annualReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchAnnualReport: builder.query({
            query: () => ({
                url: '/facultyReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    if(data?.data?.reportData._id) {
                        dispatch(setAnnualReportState(data?.data?.reportData))
                    }
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateAnnualReport: builder.mutation({
            query: (body: Partial<AnnualReportInitialState>) => ({
                url: '/facultyReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchAnnualReportQuery, useUpdateAnnualReportMutation
} = annualReportAPI