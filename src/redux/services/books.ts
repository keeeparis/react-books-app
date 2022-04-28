import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { resetBooks, updateTotalItemsResponse } from '../mainFeature/mainSlice'
import { BOOKS_PER_PAGE } from '../../pages/App'
import { RootState } from '../store/store'
import { Book, Category, Sorting } from '../types'

interface RequestData {
  input: string
  category: Category
  startIndex: number
  sorting: Sorting
}

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
      query: (data: RequestData) => {
        const startRequest = `volumes?q=${data.input}`
        const subject =
          data.category !== Category.ALL ? `+subject:${data.category}` : ''
        const startIndex = `&startIndex=${data.startIndex}`
        const maxResults = `&maxResults=${BOOKS_PER_PAGE}`
        const orderBy = `&orderBy=${data.sorting}`
        return `${startRequest}${subject}${startIndex}${maxResults}${orderBy}`
      },
      async onQueryStarted(data, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        // При новом запросе (startIndex = 1) -> очищай массив книг
        state.main.startIndex === 1 && dispatch(resetBooks())

        try {
          const { data }: { data: Response } = await queryFulfilled

          // Обнови общее количество книг только! при новом запросе.
          // Это нужно потому, что ответ с количеством items незначительно
          // отличается при каждом (дополнительном) запросе.
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
