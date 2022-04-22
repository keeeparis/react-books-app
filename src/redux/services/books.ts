import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resetBooks } from '../mainFeature/mainSlice'
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
      async onQueryStarted(data, { dispatch, getState }) {
        const state = getState() as RootState
        // При отправки формы startIndex-у присваивается значение 1.
        // Это позволяет очистить массив и показать пустой экран
        // при новом поиске.
        if (state.main.startIndex === 1) {
          dispatch(resetBooks())
        }
      },
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
