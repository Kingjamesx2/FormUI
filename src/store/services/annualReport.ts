import { baseAPI } from "./baseAPI";
import { setRequest } from "../../store/features/authSlice"

interface IRequest {
    // username: string;
    // password: string
    annualReport: string;
}

export const annualReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        staffReport: builder.mutation({
            query: (report: IRequest) => ({
                url: '/staffReport',
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
    useStaffReportMutation
} = annualReportAPI