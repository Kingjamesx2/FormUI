import { baseAPI } from "./baseAPI";
import {AnnualReportInitialState} from "../../store/features/annualReportSlice"



export const annualReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchAnnualReport: builder.query({
            query: () => ({
                url: '/facultyReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    console.log(id)
                    const { data } = await queryFulfilled
                    console.log(data)
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
    // useLoginMutation
    useFetchAnnualReportQuery, useUpdateAnnualReportMutation
} = annualReportAPI