import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store/store'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data) => {
        return `volumes?q=${data.input}&startIndex=${data.startIndex}&maxResults=30`
      },
      async onQueryStarted(arg, dis) {
        const state = dis.getState() as RootState
        if (state.main.startIndex !== 1) {
          // console.log()
          // console.log(dis)
        }
      },
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
