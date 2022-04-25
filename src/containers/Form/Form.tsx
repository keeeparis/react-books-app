import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { updateInputAndResetIndex } from '../../redux/mainFeature/mainSlice'
import { selectInput } from '../../redux/mainFeature/selectors'
import styles from './Form.module.scss'

const Form = () => {
  // to save input value after switching pages
  const [input, setInput] = useState(useAppSelector(selectInput))
  const dispatch = useAppDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateInputAndResetIndex(input))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type="text"
          onChange={onInputChange}
          value={input}
          placeholder="Я ищу..."
        />
        <Button type="submit" disabled={!input}>
          Поиск
        </Button>
      </form>
    </div>
  )
}

export default Form
