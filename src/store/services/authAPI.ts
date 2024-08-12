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
            async onQueryStarted(input, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled
                    
                    if (data?.data?.token) {
                        dispatch(setAuthData({...data.data, username: input.username}));
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