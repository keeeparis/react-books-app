import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  addBooks,
  resetBooks,
  updateTotalItemsResponse,
} from '../mainFeature/mainSlice'
import { RootState } from '../store/store'
import { Book } from '../types'

interface Response {
  kind: string
  totalItems: number
  items: Book[]
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      keepUnusedDataFor: 0,
      query: (data) => {
        return `volumes?q=${data.input}&startIndex=${data.startIndex}&maxResults=30&orderBy=${data.sorting}`
      },
      async onQueryStarted(data, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        console.log('first')
        // При новом запросе (startIndex = 1) -> очищай массив книг
        state.main.startIndex === 1 && dispatch(resetBooks())

        try {
          const { data }: { data: Response } = await queryFulfilled
          // Если в response есть поле items -> вызови dispatch
          data.items && dispatch(addBooks(data.items))

          // Обнови общее количество книг только! при новом запросе.
          // Это нужно потому, что ответ с количеством items незначительно
          // отличается при каждом запросе .
          state.main.startIndex === 1 &&
            dispatch(updateTotalItemsResponse(data.totalItems))
        } catch (e) {
          console.log(e)
        }
      },
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
