import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

import Navigation from '../Navigation'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.Container}>
      <Navigation />
      <div className={styles.Wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
