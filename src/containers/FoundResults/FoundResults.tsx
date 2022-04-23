import React from 'react'
import { useAppSelector } from '../../redux/hooks/hooks'
import { selectTotalItems } from '../../redux/mainFeature/selectors'

const FoundResults = () => {
  const resultsNumber = useAppSelector(selectTotalItems)
  return <div>Found {resultsNumber} results</div>
}

export default FoundResults
