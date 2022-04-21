import React from 'react'
import { useAppDispatch } from './redux/hooks/hooks'
import { updatePage } from './redux/mainFeature/mainSlice'
import BookList from './containers/BookList'
import Form from './containers/Form'

const BOOKS_PER_PAGE = 30

const App = () => {
  const dispatch = useAppDispatch()

  const onNextPage = () => {
    // количество отображаемых записей на странице
    dispatch(updatePage(BOOKS_PER_PAGE))
  }

  return (
    <div>
      <Form />

      <BookList />

      <button onClick={onNextPage}>Следующая страница</button>
    </div>
  )
}

export default App
