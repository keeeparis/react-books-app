import { createSelector } from '@reduxjs/toolkit'

import { BOOKS_PER_PAGE } from '../../pages/App'
import { RootState } from '../store/store'

/* Select */
export const selectStartIndex = (state: RootState) => state.main.startIndex
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
export const selectAllBooks = (state: RootState) => state.main.books
export const selectCategory = (state: RootState) => state.main.category
export const selectSorting = (state: RootState) => state.main.sorting
export const selectTotalItems = (state: RootState) => state.main.totalItems

export const selectIsMoreResults = (state: RootState) =>
  state.main.totalItems > state.main.startIndex + BOOKS_PER_PAGE

/* Create Selectors */
export const selectIsAnyBooks = createSelector(selectAllBooks, (books) =>
  books ? !!books.length : 0
)

export const selectBookById = createSelector(
  [selectAllBooks, (state, id: string) => id],
  (books, id) => {
    return books.filter((book) => book.id === id)[0]
  }
)
