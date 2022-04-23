import { RootState } from '../store/store'

export const selectStartIndex = (state: RootState) => state.main.startIndex
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
export const selectAllBooks = (state: RootState) => state.main.books
export const selectCategory = (state: RootState) => state.main.category
export const selectSorting = (state: RootState) => state.main.sorting
export const selectTotalItems = (state: RootState) => state.main.totalItems

export const selectAreMoreResults = (state: RootState) =>
  state.main.totalItems > state.main.startIndex + 30
