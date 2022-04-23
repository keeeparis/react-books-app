import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import {
  addBooks,
  selectInput,
  selectSkip,
  selectSorting,
  selectStartIndex,
  updateTotalItemsResponse,
} from '../redux/mainFeature/mainSlice'
import { useGetBooksQuery } from '../redux/services/books'

const useBooks = () => {
  const startIndex = useAppSelector(selectStartIndex)
  const input = useAppSelector(selectInput)
  const isSkip = useAppSelector(selectSkip)
  const sorting = useAppSelector(selectSorting)

  const dispatch = useAppDispatch()

  const { data, isLoading, isFetching, isSuccess, isUninitialized, isError } =
    useGetBooksQuery({ input, startIndex, sorting }, { skip: isSkip })

  useEffect(() => {
    const isData = data?.items && data.items.length
    if (isData) {
      dispatch(addBooks(data.items))
    }

    if (data && data.hasOwnProperty('totalItems'))
      // обновление проходит каждый раз, хотя можно только в первый раз
      dispatch(updateTotalItemsResponse(data.totalItems))
  }, [data])

  return { isFetching, isUninitialized, isError }
}

export default useBooks
