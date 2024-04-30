import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: (builder) => ({   
        searchUsers: builder.query({
            query: () => "/search/users?q=denisvv",
            transformResponse: (response) => {
                return response;
            },
        })
    }),
});


export const { 
    useSearchUsersQuery,
    useLazySearchUsersQuery,
 } = githubApi;