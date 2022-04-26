import React, { useEffect } from 'react'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import { BOOKS_PER_PAGE } from '../../pages/App'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import {
  enableSkip,
  incrementStartIndex,
} from '../../redux/mainFeature/mainSlice'
import {
  selectIsMoreResults,
  selectInput,
  selectStartIndex,
  selectSkip,
  selectSorting,
  selectIsAnyBooks,
} from '../../redux/mainFeature/selectors'
import { useGetBooksQuery } from '../../redux/services/books'

const LoadingSection = () => {
  const startIndex = useAppSelector(selectStartIndex)
  const sorting = useAppSelector(selectSorting)
  const input = useAppSelector(selectInput)
  const isSkip = useAppSelector(selectSkip)
  const isAnyBooks = useAppSelector(selectIsAnyBooks)
  const isMoreResults = useAppSelector(selectIsMoreResults)

  const { isFetching, isUninitialized, isError } = useGetBooksQuery(
    { input, startIndex, sorting },
    { skip: isSkip, refetchOnMountOrArgChange: true }
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

  return (
    <>
      {' '}
      {/* // TODO: Поместить каждый вариант в компонент. */}
      {isUninitialized ? (
        <div>Поиск книг!</div>
      ) : isFetching ? (
        <Spinner />
      ) : isError ? (
        <div>
          Произошла Ошибка. Попробуйте ввести запрос иначе или попробуйте
          позднее. {'>'}:
        </div>
      ) : !isAnyBooks ? (
        <div>Мы не смогли найти ни одной книги по вашему запросу.</div>
      ) : isMoreResults ? (
        <Button onClick={onNextStartIndex}>Загрузить ещё</Button>
      ) : null}
    </>
  )
}

export default LoadingSection
