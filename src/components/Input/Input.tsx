import React, { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetInput: () => void
}

const Input: FC<InputProps> = ({ value, resetInput, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      <input value={value} className={styles.input} role="input" {...props} />
      <button
        className={cn(styles.Close, { [styles.visible]: !!value })}
        onClick={resetInput}
        type="reset"
      >
        &#215;
      </button>
    </div>
  )
}

export default Input
