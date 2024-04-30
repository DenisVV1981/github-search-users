import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  })
  
  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })
  
  if (result?.error?.status === 403) {
    alert("403 ошибка - лимит на использование АПИ");
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
        console.log(response);
        return response;
      },
    })
  }),
});


export const { 
  useSearchUsersQuery,
  useLazySearchUsersQuery,
 } = githubApi;