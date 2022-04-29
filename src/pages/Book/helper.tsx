import Emoji from '../../components/Emoji'
import { volumeInfo } from '../../redux/types'

export const transformCategory = (categories: volumeInfo['categories']) => {
  if (!categories) return null
  const categoryDiv = categories.map((cat) => <h4 key={cat}>{cat}</h4>)
  return categoryDiv
}

export const transformAuthors = (authors: volumeInfo['authors']) => {
  if (!authors) return null
  const authorsDiv = authors.map((author) => <h4 key={author}>{author}</h4>)
  return authorsDiv
}

export const transformTags = (
  pageCount: volumeInfo['pageCount'],
  rating: volumeInfo['averageRating']
) => {
  const pageCountOut = pageCount ? (
    <h4 key={1}>
      {<Emoji label="pages" symbol={'📄'} />}
      {pageCount} pages
    </h4>
  ) : null
  const ratingOut = rating ? (
    <h4 key={2}>
      {<Emoji label="stars" symbol={'⭐'} />}
      {rating}/5
    </h4>
  ) : null

  return [pageCountOut, ratingOut]
}
