import React from 'react'

import BookCard from '../../components/BookCard'
import styles from './BookList.module.scss'

import { useAppSelector } from '../../redux/hooks/hooks'
import {
  selectAllBooks,
  selectCategorizedBooks,
} from '../../redux/mainFeature/selectors'

const BookList = () => {
  const books = useAppSelector(selectAllBooks)

  return (
    <div className={styles.list}>
      {books.length
        ? books.map((book) => (
            <BookCard
              key={`${book.id} + ${book.etag}`}
              book={book.volumeInfo}
              id={book.id}
            />
          ))
        : null}
    </div>
  )
}

export default BookList
