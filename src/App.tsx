import React from 'react'
import BookList from './containers/BookList'
import Form from './containers/Form'

export const BOOKS_PER_StartIndex = 30

const App = () => {
  return (
    <div>
      <Form />

      <BookList />
    </div>
  )
}

export default App
