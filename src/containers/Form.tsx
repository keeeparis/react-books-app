import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../redux/hooks/hooks'
import { updateInputAndResetIndex } from '../redux/mainFeature/mainSlice'

const Form = () => {
  const [input, setInput] = useState('')
  const dispatch = useAppDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateInputAndResetIndex(input))
    /*  FIXME: 
      Если загрузить больше данных, а потом опять отправить форму с инпутом
      (инпут не reset-ается), то из-за resetIndex, идет запрос опять первых 30.
      Данные кэшируется, поэтому показывает быстро, но так не должно быть. 

      -> Ресет инпута после каждого удачного?! запроса. 
      -> Проверка на одинаковость в action-e и если да, то не менять инпут, 
          и тем самым не триггерить rtk query.
    */
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onInputChange} value={input} />
      <button type="submit" disabled={!input}>
        Отправить
      </button>
    </form>
  )
}

export default Form
