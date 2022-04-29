import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <Fade>
      <div className={cn(styles.NotFound, styles.Box)}>
        <div>
          {t('not-found-1')} {<Emoji label="fearful" symbol={'😨'} />}
        </div>
        <div>{t('not-found-2')}</div>
      </div>
    </Fade>
  )
}

export default NotFound
