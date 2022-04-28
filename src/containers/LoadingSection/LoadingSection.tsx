import React, { useEffect } from 'react'

import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import Error from './Error'
import NotFound from './NotFound'
import StartMessage from './StartMessage'

import { BOOKS_PER_PAGE } from '../../pages/App'
import { useGetBooksQuery } from '../../redux/services/books'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import {
  addBooks,
  enableSkip,
  incrementStartIndex,
} from '../../redux/mainFeature/mainSlice'
import {
  selectSkip,
  selectInput,
  selectSorting,
  selectIsAnyBooks,
  selectStartIndex,
  selectIsMoreResults,
  selectCategory,
} from '../../redux/mainFeature/selectors'

const LoadingSection = () => {
  const input = useAppSelector(selectInput)
  const isSkip = useAppSelector(selectSkip)
  const sorting = useAppSelector(selectSorting)
  const category = useAppSelector(selectCategory)
  const startIndex = useAppSelector(selectStartIndex)
  const isAnyBooks = useAppSelector(selectIsAnyBooks)
  const isMoreResults = useAppSelector(selectIsMoreResults)

  const { data, isFetching, isUninitialized, isError } = useGetBooksQuery(
    { input, startIndex, sorting, category },
    { skip: isSkip }
  )

  const dispatch = useAppDispatch()

  const onNextStartIndex = () => {
    dispatch(incrementStartIndex(BOOKS_PER_PAGE))
  }

  useEffect(() => {
    return () => {
      // На размонтирование компонента -> переключаем скип на true
      // для того, чтобы при монтировании useGetBooksQuery не делал запрос.
      !isSkip && dispatch(enableSkip())
    }
  }, [isSkip])

  useEffect(() => {
    const isData = data && data.items && data.items.length
    if (isData) {
      // Обновляем книги в store при изменении ответа (data) от useQuery,
      // который возращает кэшируемые, if any, либо новые данные.
      dispatch(addBooks(data.items))
    }
  }, [data])

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : !isAnyBooks && !isUninitialized ? (
        <NotFound />
      ) : isMoreResults ? (
        <Button onClick={onNextStartIndex}>Загрузить ещё</Button>
      ) : isUninitialized ? (
        <StartMessage />
      ) : null}
    </>
  )
}

export default LoadingSection
