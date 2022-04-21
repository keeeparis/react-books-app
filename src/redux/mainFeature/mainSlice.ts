import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface mainState {
  page: number
  skip: boolean
  input: string
}

const initialState: mainState = {
  page: 1,
  skip: true,
  input: '',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page += action.payload
    },
    updateSkip: (state, action) => {
      state.skip = action.payload
    },
    updateInput: (state, action) => {
      state.input = action.payload
    },
  },
})

export const { updatePage, updateSkip, updateInput } = mainSlice.actions

export default mainSlice.reducer

export const selectPage = (state: RootState) => state.main.page
export const selectSkip = (state: RootState) => state.main.skip
export const selectInput = (state: RootState) => state.main.input
