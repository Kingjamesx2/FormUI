import { baseAPI } from "./baseAPI";
import  { annualNonReportInitialState, setAnnualNonReportState } from "../../store/features/annualNonReportSlice";


export const annualNonReportAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        fetchAnnualNonReport: builder.query({
            query: () => ({
                url: '/staffReportByUser',
                method: 'GET'
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled

                    if(data?.data?.reportData)
                        dispatch(setAnnualNonReportState(data?.data?.reportData))
                    // console.log(data)
                } catch(e) {
                    console.error(e)
                }
            }
        }),
        updateAnnualNonReport: builder.mutation({
            query: (body: Partial<annualNonReportInitialState>) => ({
                url: '/staffReport',
                method: 'PUT',
                body
            })
        })
    })
})


export const {
    useFetchAnnualNonReportQuery, useUpdateAnnualNonReportMutation

} = annualNonReportAPI