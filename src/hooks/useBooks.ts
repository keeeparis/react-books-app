import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/hooks/hooks'
import { updateTotalItemsResponse } from '../redux/mainFeature/mainSlice'

const useBooks = (data: any, startIndex: any) => {
  const [books, setBooks] = useState<any>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isData = data?.items && data.items.length

    if (isData && startIndex === 1) {
      setBooks([...data.items])
    } else if (isData && startIndex >= 2) {
      setBooks([...books, ...data.items])
    }

    if (data && data.hasOwnProperty('totalItems'))
      dispatch(updateTotalItemsResponse(data.totalItems))

    if (data?.totalItems === 0) {
      setBooks([])
    }
  }, [data])

  return { books }
}

export default useBooks
