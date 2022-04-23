import React from 'react'
import styles from './BookItem.module.scss'

const BookItem = ({ book }: { book: any }) => {
  const author = book.authors && book.authors[0]
  const category = book.categories ? book.categories[0] : <> &nbsp;</>

  const image = book.imageLinks ? (
    <img src={book.imageLinks.thumbnail} alt="picture" loading="lazy" />
  ) : (
    <div>Нет изображения</div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>{image}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{book.title}</div>
      <div className={styles.author}>{author}</div>
    </div>
  )
}

export default BookItem
