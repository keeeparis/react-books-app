import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { useAppSelector } from '../../redux/hooks/hooks'
import { selectBookById } from '../../redux/mainFeature/selectors'
import styles from './Book.module.scss'

const Book = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (!id) return null
  /* TODO: разделить на компоненты */
  const book = useAppSelector((state) => selectBookById(state, id))

  useEffect(() => {
    if (!book) navigate('/')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [book])

  const transformImgLink = (link: string | undefined) => {
    if (!link) return

    let l = link
    return l.replace('zoom=1', 'zoom=2').replace('http', 'https')
  }

  const originalLink = book?.volumeInfo?.imageLinks?.thumbnail

  const image = book?.volumeInfo?.imageLinks ? (
    <img
      srcSet={`
      ${transformImgLink(book?.volumeInfo?.imageLinks.thumbnail)},
      ${originalLink}, 
      `}
      // sizes="(max-width: 900px) 100vw, 300px"
      alt="book"
    />
  ) : (
    <div>Нет изображения</div>
  )

  return (
    book && (
      <div className={styles.Container}>
        <div className={styles.ImageWrapper}>
          <div className={styles.ImageInner}>{image}</div>
        </div>
        <CSSTransition
          classNames="fade"
          addEndListener={() => {}}
          timeout={500}
          appear={true}
          in={true}
        >
          <div className={styles.TextWrapper}>
            <div className={styles.Categories}>
              {book?.volumeInfo.categories?.map((cat) => (
                <div key={cat}>{cat}</div>
              ))}
            </div>

            <div className={styles.Title}>
              <h2>{book?.volumeInfo.title}</h2>
            </div>

            <div className={styles.Authors}>
              {book?.volumeInfo.authors?.map((author) => (
                <h4 key={author}>{author}</h4>
              ))}
            </div>
            <div className={styles.Description}>
              {book?.volumeInfo.description}
            </div>
          </div>
        </CSSTransition>
      </div>
    )
  )
}

export default Book
