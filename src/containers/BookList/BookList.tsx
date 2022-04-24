import React from 'react'
import { useAppSelector } from '../../redux/hooks/hooks'
import { selectCategorizedBooks } from '../../redux/mainFeature/mainSlice'
import BookCard from '../BookCard'
import styles from './BookList.module.scss'

const BookList = () => {
  const books = useAppSelector(selectCategorizedBooks)
  return (
    <div className={styles.list}>
      {books.length
        ? books.map((book: any) => (
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
