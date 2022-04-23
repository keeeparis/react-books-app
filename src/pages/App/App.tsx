import React from 'react'
import BookList from '../../containers/BookList'
import Form from '../../containers/Form'
import FoundResults from '../../containers/FoundResults'
import LoadingSection from '../../containers/LoadingSection'
import SortingSection from '../../containers/SortingSection'
import styles from './App.module.scss'

const App = () => {
  return (
    <>
      {/* <div className={styles.Wrapper}> */}
      <Form />

      <SortingSection />
      {/* <div className={styles.Background} /> */}
      {/* </div> */}

      <FoundResults />

      <BookList />

      <LoadingSection />
    </>
  )
}

export default App