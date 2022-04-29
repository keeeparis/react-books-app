import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const StartMessage = () => {
  const { t } = useTranslation()
  return (
    <Fade>
      <div className={cn(styles.StartMessage, styles.Box)}>
        {t('start-message')} {<Emoji label="books" symbol={'📚'} />}
      </div>
    </Fade>
  )
}

export default StartMessage
