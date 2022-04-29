import React from 'react'
import cn from 'classnames'

import Emoji from '../../components/Emoji'
import Fade from '../Fade'
import styles from './LoadingSection.module.scss'

const NotFound = () => (
  <Fade>
    <div className={cn(styles.NotFound, styles.Box)}>
      <div>
        Увы, мы не смогли найти ни одной книги по вашему запросу.{' '}
        {<Emoji label="fearful" symbol={'😨'} />}
      </div>
      <div>Измените запрос или параметры сортировки</div>
    </div>
  </Fade>
)

export default NotFound
