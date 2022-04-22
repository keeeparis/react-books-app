import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface mainState {
  startIndex: number
  skip: boolean
  input: string
  totalItems: number
}

const initialState: mainState = {
  startIndex: 1,
  skip: true,
  input: '',
  totalItems: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resetStartIndex: (state) => {
      state.startIndex = 1
    },
    incrementStartIndex: (state, action) => {
      state.startIndex += action.payload
    },
    updateSkip: (state, action) => {
      state.skip = action.payload
    },
    updateInput: (state, action) => {
      state.input = action.payload
    },
    updateTotalItemsResponse: (state, action) => {
      state.totalItems = action.payload
    },
  },
})

export const {
  resetStartIndex,
  incrementStartIndex,
  updateSkip,
  updateInput,
  updateTotalItemsResponse,
} = mainSlice.actions

export default mainSlice.reducer

export const selectStartIndex = (state: RootState) => state.main.startIndex
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
export const selectAreMoreResults = (state: RootState) =>
  state.main.totalItems > state.main.startIndex + 30
