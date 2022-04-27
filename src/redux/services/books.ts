import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BOOKS_PER_PAGE } from '../../pages/App'

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

/* RTK Query делает запрос к Google API, используя 3 параметра: 
  -input, 
  -startIndex, 
  -sorting. 
  
  При изменении одной из переменных выше, происходит новый запрос.
  Для отправки запроса по кнопке, изначально переменная skip равна true,
  запрещая отправлять запрос при монтировании компонента LoadingSection. 
  Также, при размонтировании компонента skip = true.

  При submit формы skip переводится на false и происходит запрос. 
  Изменения в параметрах выше - триггерит новый запрос.

  Неудобство подхода в том, что нужно делать skip=false, когда
  диспатчится экш изменения одного из параметров
*/

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      // keepUnusedDataFor: 10,
      query: (data) => {
        return `volumes?q=${data.input}&startIndex=${data.startIndex}&maxResults=${BOOKS_PER_PAGE}&orderBy=${data.sorting}`
      },
      async onQueryStarted(data, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
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
