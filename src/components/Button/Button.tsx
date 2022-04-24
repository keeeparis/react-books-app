import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
