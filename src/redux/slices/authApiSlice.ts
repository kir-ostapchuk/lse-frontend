import {api} from "./apiSlice";

export const authApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials },
                headers: {},
            })
        }),
    })
})

export const {
    useLoginMutation
} = authApiSlice
