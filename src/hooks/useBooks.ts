import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import {
  addBooks,
  updateTotalItemsResponse,
} from '../redux/mainFeature/mainSlice'
import {
  selectInput,
  selectStartIndex,
  selectSkip,
  selectSorting,
} from '../redux/mainFeature/selectors'
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
    const isData = data && data.items && data.items.length

    if (isData) dispatch(addBooks(data.items))
    if (data) dispatch(updateTotalItemsResponse(data.totalItems))
  }, [data])

  return { isFetching, isUninitialized, isError }
}

export default useBooks
