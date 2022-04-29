import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }

  const isIndexPage = location.pathname === '/'
  const link = isIndexPage ? (
    <Link to={'/'}>Home</Link>
  ) : (
    <a onClick={() => navigate(-1)}>Back</a>
  )

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        {link}
        <div onClick={onClick} className={styles.Up}>
          Up
        </div>
      </div>
    </div>
  )
}

export default Navigation
