import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { Book, Category, mainState, Sorting } from '../types'
import { selectAllBooks } from './selectors'

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
      // Обновление общего количества результатов только при новом запросе.
      if (state.startIndex === 1) {
        state.totalItems = action.payload
      }
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

export const selectCategorizedBooks = createSelector(
  selectAllBooks,
  (state: RootState) => state.main.category,
  (books: Book[], category: Category) => {
    if (category === Category.ALL) return books
    const newBooks = books.filter(
      (book) =>
        book.volumeInfo.categories &&
        book.volumeInfo.categories.includes(category)
    )
    return newBooks
  }
)

export const selectBookById = createSelector(
  [selectAllBooks, (state, id: string) => id],
  (books, id) => {
    return books.filter((book) => book.id === id)
  }
)
