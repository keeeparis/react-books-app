import React, {
  InputHTMLAttributes,
  useState,
  MouseEvent,
  forwardRef,
} from 'react'
import cn from 'classnames'

import SearchHistory from '../../components/SearchHistory'
import useUpdateLocalStorage from '../../hooks/useUpdateLocalStorage'
import styles from './InputSearch.module.scss'

import { removeSearchHistoryFromLocalstorage } from '../../utils/searchHistoryLocalStorage'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetInput: () => void
  stateInput: string
  handleHistorySearchClick: (option: string) => () => void
}

const InputSearch = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, resetInput, stateInput, handleHistorySearchClick, ...props },
    ref
  ) => {
    const [isHistoryVisible, setIsHistoryVisible] = useState(false)
    const [history, setHistory] = useState<string[] | null>(null)

    /* Когда отправляется новый запрос, мы меняем инпут в нашем store,
    и триггерится данный хук, который обновляет данные с localstorage 
    в state history */
    useUpdateLocalStorage('search-history', setHistory, stateInput)

    const deleteFromSearchHistory =
      (option: string) => (e: MouseEvent<HTMLButtonElement>) => {
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
          onFocus={() => setIsHistoryVisible(true)}
          onBlur={() => setIsHistoryVisible(false)}
          ref={ref}
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
        {history && (
          <SearchHistory
            history={history}
            historyVisible={isHistoryVisible}
            deleteFromSearchHistory={deleteFromSearchHistory}
            handleHistorySearchClick={handleHistorySearchClick}
          />
        )}
      </div>
    )
  }
)

export default InputSearch
