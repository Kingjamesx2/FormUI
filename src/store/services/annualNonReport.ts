import { baseAPI } from "./baseAPI";
import { setRequest } from "../../store/features/authSlice"

interface IRequest {
    // username: string;
    // password: string
    annualNonReport: string;
}

export const annualNonReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        facultyReport: builder.mutation({
            query: (report: IRequest) => ({
                url: '/facultyReport',
                method: 'POST',
                body: report
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    console.log(id)
                    const { data } = await queryFulfilled
                    if (data?.token) {
                        // set token
                        dispatch(setRequest(data));
                    }
                } catch(e) {
                    console.error(e)
                }
            }
        })
    })
})

export const {
    // useLoginMutation
    useFacultyReportMutation
} = annualNonReportAPI