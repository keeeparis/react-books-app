import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface mainState {
  startIndex: number
  skip: boolean
  input: string
  totalItems: number
  books: any[]
}

const initialState: mainState = {
  startIndex: 1,
  skip: true,
  input: '',
  totalItems: 0,
  books: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateInputAndResetIndex: (state, action) => {
      if (state.skip) {
        state.skip = false // Чтобы активировать rtk query
      }
      state.startIndex = 1
      state.input = action.payload
    },
    incrementStartIndex: (state, action) => {
      state.startIndex += action.payload
    },
    updateTotalItemsResponse: (state, action) => {
      state.totalItems = action.payload
    },
    addBooks: (state, action) => {
      // Если это первый запрос по заданному поиске,
      if (state.startIndex === 1) {
        // то полученные данные будут новым массивом books.
        state.books = action.payload
      } else {
        // Иначе, добавь к имеющимся полученные данные в массив books
        state.books = [...state.books, ...action.payload]
      }
    },
    resetBooks: (state) => {
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
} = mainSlice.actions

export default mainSlice.reducer

export const selectStartIndex = (state: RootState) => state.main.startIndex
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
export const selectAllBooks = (state: RootState) => state.main.books
export const selectAreMoreResults = (state: RootState) =>
  state.main.totalItems > state.main.startIndex + 30
