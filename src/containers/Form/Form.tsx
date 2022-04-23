import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { updateInputAndResetIndex } from '../../redux/mainFeature/mainSlice'

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
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={input} />
        <button type="submit" disabled={!input}>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default Form
