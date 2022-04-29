import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './Form.module.scss'

import { updateInputAndResetIndex } from '../../redux/mainFeature/mainSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { selectInput } from '../../redux/mainFeature/selectors'

const Form = () => {
  // to save input value after switching pages
  const stateInput = useAppSelector(selectInput)
  const [input, setInput] = useState(stateInput)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateInputAndResetIndex(input))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const resetInput = () => {
    setInput('')
  }

  const isButtonDisabled = !input || input === stateInput

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form} role="form">
        <Input
          type="text"
          onChange={onInputChange}
          resetInput={resetInput}
          value={input}
          placeholder={t('search-placeholder')}
          role="input"
        />
        <Button type="submit" disabled={isButtonDisabled} role="button">
          {t('search')}
        </Button>
      </form>
    </div>
  )
}

export default Form
