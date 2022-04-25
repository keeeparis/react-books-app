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
      if (state.skip) {
        state.skip = false // Чтобы активировать rtk query
      }
      // Если введенный инпут отличается от предыдущего,
      // то обновляем индекс и state.input -> срабатывает rtk query
      if (state.input !== action.payload) {
        state.startIndex = 1
        state.input = action.payload
      } // иначе ничего не делаем -> не срабатывает rtk query
    },
    incrementStartIndex: (state, action) => {
      state.startIndex += action.payload
    },
    updateTotalItemsResponse: (state, action) => {
      state.totalItems = action.payload
    },
    addBooks: (state, action) => {
      if (state.startIndex === 1) {
        // Если это первый запрос по заданному поиску,
        state.books = action.payload // то полученные данные будут новым массивом books.
      } else {
        state.books = [...state.books, ...action.payload] // Иначе, добавь к имеющимся полученные данные в массив books.
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
    },
  },
})

export const {
  addBooks,
  resetBooks,
  incrementStartIndex,
  updateTotalItemsResponse,
  updateInputAndResetIndex,
  updateCategory,
  updateSorting,
} = mainSlice.actions

export default mainSlice.reducer
