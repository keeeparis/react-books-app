import React, { FC, HtmlHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
