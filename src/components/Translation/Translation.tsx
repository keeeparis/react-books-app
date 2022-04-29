import React from 'react'
import { useTranslation } from 'react-i18next'

import Emoji from '../Emoji'
import styles from './Translation.module.scss'

const Translation = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (lang: string) => () => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={styles.Wrapper}>
      <button onClick={changeLanguage('en')}>
        <Emoji symbol={'🇺🇸'} label="us-flag" />
      </button>
      <button onClick={changeLanguage('ru')}>
        <Emoji symbol={'🇷🇺'} label="ru-flag" />
      </button>
    </div>
  )
}

export default Translation
