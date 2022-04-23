import React from 'react'
import BookList from './containers/BookList/BookList'
import Form from './containers/Form'
import LoadingSection from './containers/LoadingSection'
import SortingSection from './containers/SortingSection'
import styles from './styles/styles.module.scss'

export const BOOKS_PER_PAGE = 30

const App = () => {
  return (
    <div className={styles.App}>
      <Form />

      <SortingSection />

      <BookList />

      <LoadingSection />
    </div>
  )
}

export default App
