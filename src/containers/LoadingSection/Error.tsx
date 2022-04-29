import React from 'react'
import cn from 'classnames'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const Error = () => (
  <Fade>
    <div className={cn(styles.Error, styles.Box)}>
      <div>
        Google перестал отвечать на запросы{' '}
        {<Emoji label="sad face" symbol={'😓'} />}, надеюсь с ним все в порядке.
      </div>
      <div>Дайте ему немного времени отдохнуть и возвращайтесь!</div>
    </div>
  </Fade>
)

export default Error
