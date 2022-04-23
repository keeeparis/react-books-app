import React, { FC, useState } from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'
import useClickedOutside from '../../hooks/useClickedOutside'

interface SelectType {
  data: string[]
  onClick: (option: string) => void
  value: string
}

const Select: FC<SelectType> = ({ data, onClick, value }) => {
  const [isVisible, setIsVisible] = useState(false)

  const closeOptions = () => {
    setIsVisible(false)
  }

  const { ref } = useClickedOutside(closeOptions)

  // TODO: Разделить на две функциии и прописать типы
  const toggleOptions = (e: any) => {
    if (e.type === 'click') {
      setIsVisible((prev) => !prev)
    } else {
      if (e.keyCode === 13 || e.keyCode === 32) {
        setIsVisible((prev) => !prev)
      }
    }
  }

  const handleClick = (option: string) => (e: any) => {
    if (e.type === 'click') {
      closeOptions()
      onClick(option)
    } else {
      if (e.keyCode === 13 || e.keyCode === 32) {
        closeOptions()
        onClick(option)
      }
    }
  }

  return (
    <div
      className={cn(styles.select, { [styles.rotate]: isVisible })}
      ref={ref}
    >
      <div
        className={styles.selectShow}
        onClick={toggleOptions}
        tabIndex={0}
        onKeyDown={toggleOptions}
      >
        {value}
      </div>
      {isVisible && (
        <ul className={styles.selectUl}>
          {data.map((option) => (
            <li
              className={cn(styles.selectLi, {
                [styles.active]: value === option,
              })}
              onClick={handleClick(option)}
              onKeyDown={handleClick(option)}
              key={option}
              tabIndex={0}
            >
              {option.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
