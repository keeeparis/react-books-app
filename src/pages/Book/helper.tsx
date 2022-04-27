import { volumeInfo } from '../../redux/types'

export const transformCategory = (categories: volumeInfo['categories']) => {
  const categoryDiv =
    categories && categories.map((cat) => <div key={cat}>{cat}</div>)
  return categoryDiv
}

export const transformAuthors = (authors: volumeInfo['authors']) => {
  if (!authors) return
  const authorsDiv = authors.map((author) => <h4 key={author}>{author}</h4>)
  return authorsDiv
}
