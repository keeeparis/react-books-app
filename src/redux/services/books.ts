import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => {
        return `volumes?q=${data.input}&startIndex=${data.page}&maxResults=30`
      },
    }),
    getBooks1: builder.mutation({
      query: (data) => {
        return `volumes?q=${data.input}&startIndex=${data.page}&maxResults=30`
      },
    }),
  }),
})

export const { useGetBooksQuery, useGetBooks1Mutation } = booksApi
