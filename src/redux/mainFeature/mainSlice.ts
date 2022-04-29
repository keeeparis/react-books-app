import { createSlice } from '@reduxjs/toolkit'
import { Category, mainState, Sorting } from '../types'

const initialState: mainState = {
  startIndex: 0,
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
      state.skip = false // Чтобы активировать useQuery
      state.startIndex = 0
      state.input = action.payload
    },
    enableSkip: (state) => {
      state.skip = true
    },
    incrementStartIndex: (state, action) => {
      state.skip = false // Чтобы активировать useQuery
      state.startIndex += action.payload
    },
    updateTotalItemsResponse: (state, action) => {
      state.totalItems = action.payload
    },
    addBooks: (state, action) => {
      if (!action.payload) {
        state.books = []
      }
      if (state.startIndex === 0) {
        state.books = action.payload
      } else {
        state.books = [...state.books, ...action.payload]
      }
    },
    resetBooks: (state) => {
      state.books = []
    },
    updateCategory: (state, action) => {
      state.category = action.payload
      state.startIndex = 0
      if (state.input) {
        state.skip = false // Чтобы активировать useQuery
      }
    },
    updateSorting: (state, action) => {
      state.sorting = action.payload
      state.startIndex = 0
      if (state.input) {
        state.skip = false // Чтобы активировать useQuery
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
