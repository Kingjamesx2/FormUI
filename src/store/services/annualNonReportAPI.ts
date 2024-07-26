import { baseAPI } from "./baseAPI";
// import { setRequest } from "../features/authSlice"
import  { annualNonReportInitialState } from "../../store/features/annualNonReportSlice"



export const annualNonReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        annualNonReport: builder.mutation({
            query: (report: annualNonReportInitialState) => ({
                url: '/facultyReport',
                method: 'POST',
                body: report
            })
        })
    })
})

export const {
    // useLoginMutation
    // useFacultyReportMutation
} = annualNonReportAPI