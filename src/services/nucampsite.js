import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const nucampApi = createApi({
  reducerPath: 'nucampApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://0.0.0.0:3001/' }),
  endpoints: (builder) => ({
    getNucampData: builder.query({
      query: (name) => `${name}`,
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNucampDataQuery } = nucampApi