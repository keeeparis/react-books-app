import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks/hooks'
import { selectBookById } from '../../redux/mainFeature/mainSlice'

const Book = () => {
  const { id } = useParams()
  console.log(id)

  const book = useAppSelector((state) => selectBookById(state, id))
  console.log(book)
  return (
    <div>
      Book
      {JSON.stringify(book)}
    </div>
  )
}

export default Book
