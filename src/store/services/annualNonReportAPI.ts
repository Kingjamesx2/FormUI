import { baseAPI } from "./baseAPI";
// import { setRequest } from "../features/authSlice"
import  { annualNonReportInitialState, setAnnualNonReportState } from "../../store/features/annualNonReportSlice"



// export const annualNonReportAPI = baseAPI.injectEndpoints({
//     endpoints: (builder) => ({
//         annualNonReport: builder.mutation({
//             query: (report: annualNonReportInitialState) => ({
//                 url: '/facultyReport',
//                 method: 'POST',
//                 body: report
//             })
//         })
//     })
// })



export const annualNonReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchAnnualNonReport: builder.query({
            query: () => ({
                url: '/facultyReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled

                    if(data?.data?.reportData)
                        dispatch(setAnnualNonReportState(data.data.reportData))
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateAnnualNonReport: builder.mutation({
            query: (body: Partial<annualNonReportInitialState>) => ({
                url: '/facultyReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchAnnualNonReportQuery, useUpdateAnnualNonReportMutation

} = annualNonReportAPI