import React from 'react'
import { BOOKS_PER_PAGE } from '../App'
import useBooks from '../hooks/useBooks'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import {
  incrementStartIndex,
  selectAreMoreResults,
  selectCategorizedBooks,
} from '../redux/mainFeature/mainSlice'

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
      {isFetching ? (
        <div>LOADING...</div>
      ) : isUninitialized ? (
        <div>Давай, смелее!</div>
      ) : isError ? (
        <div>Произошла Ошибка</div>
      ) : !books.length ? (
        <div>Мы не смогли найти ни одной книги по вашему запросу.</div>
      ) : areMoreResults ? (
        <button onClick={onNextStartIndex}>Загрузить ещё</button>
      ) : null}
    </>
  )
}

export default LoadingSection
