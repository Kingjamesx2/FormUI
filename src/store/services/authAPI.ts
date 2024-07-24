import { baseAPI } from "./baseAPI";
import { setAuthData } from '../features/authSlice'

interface ICredentials {
    username: string;
    password: string
}

export const authAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: ICredentials) => ({
                url: '/authenticate',
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    //console.log(id)
                    const { data } = await queryFulfilled
                    if (data?.token) {
                        // set token
                        dispatch(setAuthData(data));
                    }
                } catch(e) {
                    console.error(e)
                }
            }
        })
    })
})

export const {
    useLoginMutation
} = authAPI