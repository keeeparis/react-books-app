import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Select from '../Select'
import styles from './LanguagePicker.module.scss'

const LanguagePicker = () => {
  const { i18n } = useTranslation()

  const languages = useMemo(() => [...i18n.languages], [])

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className={styles.Wrapper}>
      <Select data={languages} onClick={changeLanguage} value={i18n.language} />
    </div>
  )
}

export default LanguagePicker
