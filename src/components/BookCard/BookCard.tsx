import React from 'react'
import { Link } from 'react-router-dom'

import Fade from '../../containers/Fade'
import styles from './BookCard.module.scss'

import { volumeInfo } from '../../redux/types'
import { transformAuthors, transformCategory, transformImage } from './helper'

interface BookCardProps {
  book: volumeInfo
  id: string
}

const BookCard = React.memo(({ book, id }: BookCardProps) => {
  const category = transformCategory(book.categories)
  const image = transformImage(book.imageLinks)
  const authors = transformAuthors(book.authors)

  return (
    <Link to={`/book/${id}`}>
      <Fade>
        <div className={styles.container} title={book.title}>
          <div className={styles.imageWrapper}>{image}</div>
          <div className={styles.category}>{category}</div>
          <div className={styles.title}>{book.title}</div>
          <div className={styles.authorWrapper}>{authors}</div>
        </div>
      </Fade>
    </Link>
  )
})

export default BookCard
