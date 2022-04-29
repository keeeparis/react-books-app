import React, { ChangeEvent, FormEvent, useState } from 'react'

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateInputAndResetIndex(input))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const isButtonDisabled = !input || input === stateInput

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form} role="form">
        <Input
          type="text"
          onChange={onInputChange}
          value={input}
          placeholder="Я ищу..."
          role="input"
        />
        <Button type="submit" disabled={isButtonDisabled} role="button">
          Поиск
        </Button>
      </form>
    </div>
  )
}

export default Form
