import React, { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LanguagePicker from '../../components/LanguagePicker'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const isIndexPage = location.pathname === '/'
  const link = isIndexPage ? (
    <Link to={'/'}>{t('home')}</Link>
  ) : (
    <a onClick={() => navigate(-1)}>{t('back')}</a>
  )

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        {link}
        <div className={styles.RightSide}>
          <LanguagePicker />
        </div>
      </div>
    </div>
  )
}

export default Navigation
