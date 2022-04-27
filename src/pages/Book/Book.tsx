import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import styles from './Book.module.scss'

import { useAppSelector } from '../../redux/hooks/hooks'
import { selectBookById } from '../../redux/mainFeature/selectors'
import { transformCategory, transformAuthors } from './helper'
import { transformImage } from '../../components/BookCard/helper'

const Book = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (!id) return null

  const book = useAppSelector((state) => selectBookById(state, id))

  useEffect(() => {
    if (!book) navigate('/')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [book])

  const image = transformImage(book.volumeInfo.imageLinks)
  const categories = transformCategory(book?.volumeInfo.categories)
  const authors = transformAuthors(book.volumeInfo.authors)

  return (
    <>
      <CSSTransition
        classNames="fade"
        addEndListener={() => {}}
        timeout={500}
        appear={true}
        in={true}
      >
        <div className={styles.Container}>
          <div className={styles.ImageWrapper}>
            <div className={styles.ImageInner}>{image}</div>
          </div>
          <div className={styles.TextWrapper}>
            <div className={styles.Categories}>{categories}</div>

            <div className={styles.Title}>
              <h2>{book?.volumeInfo.title}</h2>
            </div>

            <div className={styles.Authors}>{authors}</div>

            <div className={styles.Description}>
              {book?.volumeInfo.description}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default Book
