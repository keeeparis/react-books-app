import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import cn from 'classnames'

import styles from './Footer.module.scss'

const Footer = () => {
  const { scrolledHeight, pageHeight } = useWindowSize()

  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }

  // arbitrary value
  const isFarEnough = scrolledHeight * 8 > pageHeight

  return (
    <div className={styles.Wrapper}>
      <div
        onClick={onClick}
        className={cn(styles.Up, {
          [styles.active]: isFarEnough,
        })}
      >
        &#8593;
      </div>
    </div>
  )
}

export default Footer
