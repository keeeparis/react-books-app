import React from 'react'
import useBooks from '../hooks/useBooks'
import { useAppSelector } from '../redux/hooks/hooks'
import {
  selectInput,
  selectStartIndex,
  selectSkip,
} from '../redux/mainFeature/mainSlice'
import { useGetBooksQuery } from '../redux/services/books'

const BookList = () => {
  const startIndex = useAppSelector(selectStartIndex)
  const input = useAppSelector(selectInput)
  const isSkip = useAppSelector(selectSkip)

  const { data, isLoading, isFetching, isSuccess, isUninitialized, isError } =
    useGetBooksQuery({ input, startIndex }, { skip: isSkip })

  const { books } = useBooks(data, startIndex)

  return (
    <div>
      {books.length
        ? books.map((book: any) => (
            <div key={`${book.id} + ${book.etag}`}>{book.volumeInfo.title}</div>
          ))
        : null}

      {isFetching ? (
        <div>LOADING...</div>
      ) : isUninitialized ? (
        <div>Давай, смелее!</div>
      ) : isError ? (
        <div>Произошла Ошибка</div>
      ) : (
        !books.length && (
          <div>Мы не смогли найти ни одной книги по вашему запросу.</div>
        )
      )}
    </div>
  )
}

export default BookList
