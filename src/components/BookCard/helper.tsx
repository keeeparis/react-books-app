import styles from './BookCard.module.scss'
import { volumeInfo } from '../../redux/types'

export const transformCategory = (categories: volumeInfo['categories']) => {
  const categoryDiv = categories ? categories[0] : <>&nbsp;</>
  return categoryDiv
}

export const transformImage = (images: volumeInfo['imageLinks']) => {
  const imagesDiv = images ? (
    <img src={images.thumbnail} alt="picture" loading="lazy" />
  ) : (
    <div>Нет изображения</div>
  )
  return imagesDiv
}

export const transformAuthors = (authors: volumeInfo['authors']) => {
  if (!authors) return
  const authorsDiv = authors.map((author, i) => (
    <h4 className={styles.author} key={author}>
      {author}
      {i + 1 !== authors.length ? ',' : null}
    </h4>
  ))
  return authorsDiv
}
