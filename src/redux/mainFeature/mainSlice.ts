import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
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
      // При обновлении сортировки, предыдущий порядок книг не валидный.
      // Нужно сделать новый запрос с индексом 1 и очистить массив книг.
      state.startIndex = 1
      state.books = []
    },
  },
})

export const {
  incrementStartIndex,
  updateTotalItemsResponse,
  addBooks,
  resetBooks,
  updateInputAndResetIndex,
  updateCategory,
  updateSorting,
} = mainSlice.actions

export default mainSlice.reducer

export const selectStartIndex = (state: RootState) => state.main.startIndex
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
export const selectAllBooks = (state: RootState) => state.main.books
export const selectCategory = (state: RootState) => state.main.category
export const selectSorting = (state: RootState) => state.main.sorting

export const selectAreMoreResults = (state: RootState) =>
  state.main.totalItems > state.main.startIndex + 30

export const selectCategorizedBooks = createSelector(
  selectAllBooks,
  (state: RootState) => state.main.category,
  (books: any, category: any) => {
    if (category === Category.ALL) return books
    const newBooks = books.filter(
      (book: any) =>
        book.volumeInfo.categories &&
        book.volumeInfo.categories.includes(category)
    )
    return newBooks
  }
)
