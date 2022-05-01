import React, {
  ChangeEvent,
  createRef,
  FormEvent,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../../components/Button'
import InputSearch from '../InputSearch'
import styles from './Form.module.scss'

import { updateInputAndResetIndex } from '../../redux/mainFeature/mainSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { selectInput } from '../../redux/mainFeature/selectors'
import { saveSearchHistoryToLocalStorage } from '../../utils/searchHistoryLocalStorage'

const Form = () => {
  // to save input value after switching pages
  const stateInput = useAppSelector(selectInput)
  const [input, setInput] = useState(stateInput)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const inputRef = createRef<HTMLInputElement>()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateInputAndResetIndex(input))
    /* Сохранение истории поиска в localstorage */
    saveSearchHistoryToLocalStorage(input)
    inputRef.current?.blur()
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleHistorySearchClick = (option: string) => () => {
    setInput(option)
    dispatch(updateInputAndResetIndex(option))
  }

  const resetInput = () => {
    setInput('')
  }

  const isButtonDisabled = !input || input === stateInput

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form} role="form">
        <InputSearch
          type="text"
          value={input}
          resetInput={resetInput}
          onChange={onInputChange}
          handleHistorySearchClick={handleHistorySearchClick}
          placeholder={t('search-placeholder')}
          stateInput={stateInput}
          role="input"
          ref={inputRef}
        />
        <Button type="submit" disabled={isButtonDisabled} role="button">
          {t('search')}
        </Button>
      </form>
    </div>
  )
}

export default Form
