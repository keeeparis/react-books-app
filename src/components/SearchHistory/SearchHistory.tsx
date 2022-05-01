import React, { MouseEvent } from 'react'
import cn from 'classnames'

import styles from './SearchHistory.module.scss'
import { useTranslation } from 'react-i18next'

interface SearchHistoryProps {
  history: string[]
  handleHistorySearchClick: (option: string) => () => void
  deleteFromSearchHistory: (
    option: string
  ) => (e: MouseEvent<HTMLButtonElement>) => void
  historyVisible: boolean
}

const SearchHistory = ({
  history,
  handleHistorySearchClick,
  deleteFromSearchHistory,
  historyVisible,
}: SearchHistoryProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.History, { [styles.visible]: historyVisible })}>
      <div className={styles.HistoryItem}>{t('search-history')}</div>

      {history.map((el) => (
        <div
          key={el}
          onClick={handleHistorySearchClick(el)}
          className={styles.HistoryItem}
        >
          <button
            onClick={deleteFromSearchHistory(el)}
            className={styles.RemoveButton}
            type="button"
          >
            &#215;
          </button>

          {el}
        </div>
      ))}
    </div>
  )
}

export default SearchHistory
