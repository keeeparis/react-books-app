import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks/hooks'
import { selectBookById } from '../../redux/mainFeature/mainSlice'
import styles from './Book.module.scss'

const Book = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  if (!id) return

  const book = useAppSelector((state) => selectBookById(state, id))

  useEffect(() => {
    if (!book[0]) navigate('/')
  }, [book])

  const transformImgLink = (link: string | undefined) => {
    if (!link) return
    // console.log(link.indexOf('zoom=1'))
    const begLink = link.slice(0, link.indexOf('zoom=1'))
    const restLink = link.slice(link.indexOf('zoom=1') + 6, link.length)
    const newLink = `${begLink}zoom=2${restLink}`
    return newLink
  }

  console.log(transformImgLink(book[0]?.volumeInfo?.imageLinks?.thumbnail))
  console.log(book[0]?.volumeInfo?.imageLinks?.thumbnail)

  const image = book[0]?.volumeInfo?.imageLinks ? (
    <img
      srcSet={transformImgLink(book[0]?.volumeInfo?.imageLinks.thumbnail)}
      alt="book"
    />
  ) : (
    <div>Нет изображения</div>
  )

  return (
    <div className={styles.Container}>
      <div className={styles.ImageWrapper}>{image}</div>
      <div className={styles.TextWrapper}>
        <div className="title">{book[0]?.volumeInfo.title}</div>
        <div className="categories">
          {book[0]?.volumeInfo.categories?.map((cat) => (
            <div key={cat}>{cat}</div>
          ))}
        </div>
        <div className="authors">
          {book[0]?.volumeInfo.authors?.map((author) => (
            <div key={author}>{author}</div>
          ))}
        </div>
        <div className="description">{book[0]?.volumeInfo.description}</div>
      </div>
    </div>
  )
}

export default Book
