import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import cn from 'classnames'

import styles from './Book.module.scss'
import Fade from '../../containers/Fade'

import { useAppSelector } from '../../redux/hooks/hooks'
import { selectBookById } from '../../redux/mainFeature/selectors'
import { transformCategory, transformAuthors, transformTags } from './helper'
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

  if (!book) return null

  const image = transformImage(book.volumeInfo.imageLinks)
  const categories = transformCategory(book.volumeInfo.categories)
  const authors = transformAuthors(book.volumeInfo.authors)
  const tags = transformTags(
    book.volumeInfo.pageCount,
    book.volumeInfo.averageRating
  )

  return (
    <>
      <Fade>
        <div className={styles.Container}>
          <div className={styles.ImageWrapper}>
            <div className={styles.ImageInner}>{image}</div>
          </div>

          <div className={styles.TextWrapper}>
            <div className={cn(styles.TagsWrapper)}>{categories}</div>

            <div className={styles.Title}>
              <h2>{book?.volumeInfo.title}</h2>
            </div>

            <div className={cn(styles.TagsWrapper, styles.Authors)}>
              {authors}
            </div>

            <div className={styles.Description}>
              {book.volumeInfo.description}
            </div>

            <div className={cn(styles.TagsWrapper, styles.AdditionalTags)}>
              {tags}
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Book
