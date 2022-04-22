import React from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks'
import {
  incrementStartIndex,
  selectAreMoreResults,
} from './redux/mainFeature/mainSlice'
import BookList from './containers/BookList'
import Form from './containers/Form'

const BOOKS_PER_StartIndex = 30

const App = () => {
  const dispatch = useAppDispatch()
  const areMoreResults = useAppSelector(selectAreMoreResults)

  const onNextStartIndex = () => {
    // количество отображаемых записей на странице
    dispatch(incrementStartIndex(BOOKS_PER_StartIndex))
  }

  return (
    <div>
      <Form />

      <BookList />

      {areMoreResults && (
        <button onClick={onNextStartIndex}>Следующая страница</button>
      )}
    </div>
  )
}

export default App
