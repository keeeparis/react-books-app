import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BookCard.module.scss'

const BookItem = React.memo(({ book, id }: { book: any; id: string }) => {
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

  // console.log(book)

  return (
    <Link to={`/book/${id}`}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>{image}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.authorWrapper}>{authors}</div>
      </div>
    </Link>
  )
})

export default BookItem
