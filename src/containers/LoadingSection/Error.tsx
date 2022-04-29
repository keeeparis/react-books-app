import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const Error = () => {
  const { t } = useTranslation()

  return (
    <Fade>
      <div className={cn(styles.Error, styles.Box)}>
        <div>
          {t('error-one')} {<Emoji label="sad face" symbol={'😓'} />},{' '}
          {t('error-two')}
        </div>
        <div>{t('error-three')}</div>
      </div>
    </Fade>
  )
}

export default Error
