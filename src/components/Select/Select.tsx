import React, { FC, KeyboardEvent, useState } from 'react'
import cn from 'classnames'

import styles from './Select.module.scss'
import useClickedOutside from '../../hooks/useClickedOutside'
import { useTranslation } from 'react-i18next'

interface SelectType {
  data: string[]
  value: string
  onClick: (option: string) => void
}

const Select: FC<SelectType> = ({ data, value, onClick }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  const closeOptions = () => {
    setIsVisible(false)
  }

  const { ref } = useClickedOutside(closeOptions)

  const toggleOptionsClick = () => {
    setIsVisible((prev) => !prev)
  }

  const toggleOptionsKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsVisible((prev) => !prev)
    }
  }

  const handleOptionClick = (option: string) => () => {
    closeOptions()
    onClick(option)
  }

  const handleOptionKey =
    (option: string) => (e: KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        closeOptions()
        onClick(option)
      }
    }

  return (
    <div
      className={cn(styles.select, { [styles.rotate]: isVisible })}
      ref={ref}
    >
      <div
        className={styles.selectShow}
        onClick={toggleOptionsClick}
        onKeyDown={toggleOptionsKey}
        tabIndex={0}
        role="selected"
      >
        {t(value)}
      </div>
      {isVisible && (
        <ul className={styles.selectUl}>
          {data.map((option) => (
            <li
              className={cn(styles.selectLi, {
                [styles.active]: value === option,
              })}
              onClick={handleOptionClick(option)}
              onKeyDown={handleOptionKey(option)}
              key={option}
              tabIndex={0}
              role="listitem"
            >
              {t(option).toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
