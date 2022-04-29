import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

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
  updateTotalItemsResponse,
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

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onNextStartIndex = () => {
    dispatch(incrementStartIndex(BOOKS_PER_PAGE))
  }

  useEffect(() => {
    return () => {
      /* На размонтирование компонента -> переключаем скип на true
      для того, чтобы при монтировании useGetBooksQuery не делал запрос. */
      !isSkip && dispatch(enableSkip())
    }
  }, [isSkip])

  useEffect(() => {
    if (data) {
      /* Обновляем книги в store при изменении ответа (data) от useQuery,
      который возращает кэшируемые, if any, либо новые данные или
      данных нет. */
      dispatch(addBooks(data?.items))

      /* Обнови общее количество книг только! при новом запросе.
      Это нужно потому, что ответ с количеством items незначительно
      отличается при каждом (дополнительном) запросе. */
      startIndex === 0 && dispatch(updateTotalItemsResponse(data.totalItems))
    }
  }, [data])

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : isMoreResults ? (
        <Button onClick={onNextStartIndex}>{t('load-more')}</Button>
      ) : !isAnyBooks && !isUninitialized ? (
        <NotFound />
      ) : isUninitialized ? (
        <StartMessage />
      ) : null}
    </>
  )
}

export default LoadingSection
