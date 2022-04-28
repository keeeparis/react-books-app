import React, { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <input {...props} className={styles.input} role="input" />
    </div>
  )
}

export default Input
