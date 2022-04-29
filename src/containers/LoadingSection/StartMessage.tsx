import React from 'react'
import cn from 'classnames'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const StartMessage = () => (
  <Fade>
    <div className={cn(styles.StartMessage, styles.Box)}>
      Введите в поиск ключевые слова и я покажу здесь список книг{' '}
      {<Emoji label="books" symbol={'📚'} />}
    </div>
  </Fade>
)

export default StartMessage
