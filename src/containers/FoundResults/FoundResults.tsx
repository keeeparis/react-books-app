import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './FoundResults.module.scss'

import { useAppSelector } from '../../redux/hooks/hooks'
import { selectTotalItems } from '../../redux/mainFeature/selectors'
import Fade from '../Fade'

const FoundResults = () => {
  const { t } = useTranslation()
  const resultsNumber = useAppSelector(selectTotalItems)

  return (
    <>
      {!!resultsNumber && (
        <Fade>
          <div className={styles.wrapper}>
            {t('resultsWithCount', { count: resultsNumber })}
          </div>
        </Fade>
      )}
    </>
  )
}

export default FoundResults
