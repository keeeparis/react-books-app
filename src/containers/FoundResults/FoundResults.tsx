import React from 'react'

import styles from './FoundResults.module.scss'

import { useAppSelector } from '../../redux/hooks/hooks'
import { selectTotalItems } from '../../redux/mainFeature/selectors'

const FoundResults = () => {
  const resultsNumber = useAppSelector(selectTotalItems)

  return <div className={styles.wrapper}>Found {resultsNumber} results</div>
}

export default FoundResults
