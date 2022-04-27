import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <Link to={'/'}>Home</Link>
        <div onClick={onClick} className={styles.Up}>
          Up
        </div>
      </div>
    </div>
  )
}

export default Navigation
