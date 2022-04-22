import React from 'react'
import { BOOKS_PER_StartIndex } from '../App'
import useBooks from '../hooks/useBooks'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import {
  selectAllBooks,
  selectAreMoreResults,
  incrementStartIndex,
} from '../redux/mainFeature/mainSlice'

const BookList = () => {
  const books = useAppSelector(selectAllBooks)
  const areMoreResults = useAppSelector(selectAreMoreResults)

  const dispatch = useAppDispatch()

  const { isFetching, isUninitialized, isError } = useBooks()

  const onNextStartIndex = () => {
    // количество отображаемых записей на странице
    dispatch(incrementStartIndex(BOOKS_PER_StartIndex))
  }

  return (
    <div>
      {/* TODO: карточки книг */}
      {books.length
        ? books.map((book: any) => (
            <div key={`${book.id} + ${book.etag}`}>{book.volumeInfo.title}</div>
          ))
        : null}

      {/* TODO: вынести в отдельный компонент */}
      {isFetching ? (
        <div>LOADING...</div>
      ) : isUninitialized ? (
        <div>Давай, смелее!</div>
      ) : isError ? (
        <div>Произошла Ошибка</div>
      ) : !books.length ? (
        <div>Мы не смогли найти ни одной книги по вашему запросу.</div>
      ) : areMoreResults ? (
        <button onClick={onNextStartIndex}>Следующая страница</button>
      ) : null}
    </div>
  )
}

export default BookList
