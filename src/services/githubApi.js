import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  })
  
  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 403) {
    console.error("403 ошибка - лимит на использование АПИ");
    return null;
  }
  
  return result
  }
  
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({   
    searchUsers: builder.query({
      query: (
        {pattern="denisvv",
        per_page = 5,
        page = 1, 
        sort="repositories",
        order="asc"}
      ) => `/search/users?q=${pattern}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`,
      transformResponse: (response) => {
        return response;
      },
    }),
    searchUserRepositories: builder.query({
      query: ({login}) => `/users/${login}/repos`,
      transformResponse: (response) => {
        return response;
      },
    }),
    searchUserFollowers: builder.query({
      query: ({login}) => `/users/${login}/followers`,
      transformResponse: (response) => {
        return response;
      },
    }),
    searchUserSubscriptions: builder.query({
      query: ({login}) => `/users/${login}/subscriptions`,
      transformResponse: (response) => {
        return response;
      },
    })
  }),
});


export const { 
  useSearchUsersQuery,
  useLazySearchUsersQuery,
  useLazySearchUserRepositoriesQuery,
  useLazySearchUserFollowersQuery,
  useLazySearchUserSubscriptionsQuery,
 } = githubApi;