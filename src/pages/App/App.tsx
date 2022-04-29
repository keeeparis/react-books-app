import React from 'react'
import BookList from '../../containers/BookList'
import Form from '../../containers/Form'
import FoundResults from '../../containers/FoundResults'
import LoadingSection from '../../containers/LoadingSection'
import SortingSection from '../../containers/SortingSection'

// количество отображаемых записей на странице
export const BOOKS_PER_PAGE = 30

const App = () => {
  return (
    <>
      <Form />

      <SortingSection />

      <FoundResults />

      <BookList />

      <LoadingSection />
    </>
  )
}

export default App
