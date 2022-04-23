import React from 'react'
import styles from './BookItem.module.scss'

const BookItem = React.memo(({ book }: { book: any }) => {
  const category = book.categories ? book.categories[0] : <> &nbsp;</>

  const image = book.imageLinks ? (
    <img src={book.imageLinks.thumbnail} alt="picture" loading="lazy" />
  ) : (
    <div>Нет изображения</div>
  )

  const authors =
    book.authors &&
    book.authors.map((author: string, i: number) => (
      <div className={styles.author} key={author}>
        {author}
        {i + 1 !== book.authors.length ? ',' : null}
      </div>
    ))

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>{image}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{book.title}</div>
      <div className={styles.authorWrapper}>{authors}</div>
    </div>
  )
})

export default BookItem
