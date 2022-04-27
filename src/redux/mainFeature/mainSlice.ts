import { createSlice } from '@reduxjs/toolkit'
import { Category, mainState, Sorting } from '../types'

const initialState: mainState = {
  startIndex: 1,
  skip: true,
  input: '',
  totalItems: 0,
  books: [],
  category: Category.ALL,
  sorting: Sorting.RELEVANCE,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateInputAndResetIndex: (state, action) => {
      state.skip = false // Чтобы активировать rtk query
      state.startIndex = 1
      state.input = action.payload
    },
    enableSkip: (state) => {
      state.skip = true
    },
    incrementStartIndex: (state, action) => {
      state.skip = false // Чтобы активировать rtk query
      state.startIndex += action.payload
    },
    updateTotalItemsResponse: (state, action) => {
      state.totalItems = action.payload
    },
    addBooks: (state, action) => {
      // Если это первый запрос по заданному поиску,
      if (state.startIndex === 1) {
        // то полученные данные будут новым массивом books.
        state.books = action.payload
      } else {
        // Иначе, добавь к имеющимся полученные данные в массив books.
        state.books = [...state.books, ...action.payload]
      }
    },
    resetBooks: (state) => {
      state.books = []
    },
    updateCategory: (state, action) => {
      state.category = action.payload
    },
    updateSorting: (state, action) => {
      state.sorting = action.payload
      // При обновлении сортировки, предыдущий порядок книг невалидный.
      // Нужно сделать новый запрос с индексом 1.
      state.startIndex = 1
      // и если пользователь ввел текст запроса в инпут
      if (state.input) {
        state.skip = false // активировать rtk query
      }
    },
  },
})

export const {
  addBooks,
  resetBooks,
  enableSkip,
  incrementStartIndex,
  updateTotalItemsResponse,
  updateInputAndResetIndex,
  updateCategory,
  updateSorting,
} = mainSlice.actions

export default mainSlice.reducer
