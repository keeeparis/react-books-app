import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../redux/hooks/hooks'
import { updateInput, updateSkip } from '../redux/mainFeature/mainSlice'

const Form = () => {
  const [input, setInput] = useState('')
  const dispatch = useAppDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // я обновляю skip на false при каждой отправке формы,
    // сам skip нужен только при пропуске первого запроса
    dispatch(updateSkip(false))
    dispatch(updateInput(input))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onInputChange} value={input} />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default Form
