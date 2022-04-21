import React, { useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '../redux/hooks/hooks'
import {
  selectInput,
  selectPage,
  selectSkip,
} from '../redux/mainFeature/mainSlice'
import { useGetBooksQuery } from '../redux/services/books'

const BookList = () => {
  const [books, setBooks] = useState<any>([])

  const page = useAppSelector(selectPage)
  const input = useAppSelector(selectInput)
  const isSkip = useAppSelector(selectSkip)

  const { data, isLoading, isFetching, isSuccess, isUninitialized, isError } =
    useGetBooksQuery(
      { input, page },
      {
        skip: isSkip,
      }
    )

  useEffect(() => {
    if (data?.items.length) {
      setBooks([...books, ...data.items])
    }
  }, [data])

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
      ) : null}
    </div>
  )
}

export default BookList
