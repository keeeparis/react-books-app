import React, { FC, InputHTMLAttributes, useState } from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage'
import { removeSearchHistoryFromLocalstorage } from '../../utils/saveSearchHistoryToLS'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetInput: () => void
  stateInput: string
  handleHistorySearchClick: (option: string) => () => void
}

const Input: FC<InputProps> = ({
  value,
  resetInput,
  stateInput,
  handleHistorySearchClick,
  ...props
}) => {
  const [historyVisible, setHistoryVisible] = useState(false)
  const [history, setHistory] = useState<string[] | null>([])
  /* TODO: продумать логику с localstorage */

  useLocalStorage('search-history', setHistory, stateInput)

  const deleteFromSearchHistory = (option: string) => (e: any) => {
    e.stopPropagation()
    removeSearchHistoryFromLocalstorage(option)
    setHistory(JSON.parse(localStorage.getItem('search-history')!))
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        value={value}
        className={styles.input}
        role="input"
        onFocus={() => setHistoryVisible(true)}
        onBlur={() => setHistoryVisible(false)}
        {...props}
      />

      {/* Reset Button Within Input */}
      <button
        className={cn(styles.Close, { [styles.visible]: !!value })}
        onClick={resetInput}
        type="reset"
      >
        &#215;
      </button>

      {/* Search History Results */}
      <div className={cn(styles.History, { [styles.visible]: historyVisible })}>
        <div>История поиска</div>
        {history &&
          history.map((el) => (
            <div key={el} onClick={handleHistorySearchClick(el)}>
              <button
                onClick={deleteFromSearchHistory(el)}
                className={styles.RemoveButton}
              >
                &#215;
              </button>
              {el}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Input
