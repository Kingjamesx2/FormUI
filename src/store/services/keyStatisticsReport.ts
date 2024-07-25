import { baseAPI } from "./baseAPI";
import { setRequest } from "../../store/features/authSlice";

interface IRequest {
  // username: string;
  // password: string
  keyStatisticReport: string;
}

export const keyStatisticReportAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    records: builder.mutation({
      query: (report: IRequest) => ({
        url: "/recordsReport",
        method: "POST",
        body: report,
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          console.log(id);
          const { data } = await queryFulfilled;
          if (data?.token) {
            // set token
            dispatch(setRequest(data));
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  // useLoginMutation
  //   useKeyStatisticMutation,
  useRecordsMutation,
} = keyStatisticReportAPI;
