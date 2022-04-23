import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../../components/Input'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { updateInputAndResetIndex } from '../../redux/mainFeature/mainSlice'
import styles from './Form.module.scss'

const Form = () => {
  const [input, setInput] = useState('')
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
        <Input type="text" onChange={onInputChange} value={input} />
        <button type="submit" disabled={!input} className={styles.button}>
          Поиск
        </button>
      </form>
    </div>
  )
}

export default Form
