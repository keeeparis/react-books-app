import React from 'react'
import Spinner from '../../components/Spinner'
import useBooks from '../../hooks/useBooks'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import {
  incrementStartIndex,
  selectCategorizedBooks,
} from '../../redux/mainFeature/mainSlice'
import { selectAreMoreResults } from '../../redux/mainFeature/selectors'

export const BOOKS_PER_PAGE = 30

const LoadingSection = () => {
  const books = useAppSelector(selectCategorizedBooks)
  const areMoreResults = useAppSelector(selectAreMoreResults)

  const dispatch = useAppDispatch()

  const { isFetching, isUninitialized, isError } = useBooks()

  const onNextStartIndex = () => {
    // количество отображаемых записей на странице
    dispatch(incrementStartIndex(BOOKS_PER_PAGE))
  }

  return (
    <>
      {isUninitialized ? (
        <div>Поиск книг!</div>
      ) : isFetching ? (
        <Spinner />
      ) : isError ? (
        <div>
          Произошла Ошибка. Попробуйте ввести запрос иначе или попробуйте
          позднее. {'>'}:
        </div>
      ) : !books.length ? (
        <div>Мы не смогли найти ни одной книги по вашему запросу.</div>
      ) : areMoreResults ? (
        <button onClick={onNextStartIndex}>Загрузить ещё</button>
      ) : null}
    </>
  )
}

export default LoadingSection
