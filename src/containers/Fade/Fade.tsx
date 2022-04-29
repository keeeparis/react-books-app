import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

interface FadeProps {
  children: React.ReactNode
}

const Fade: FC<FadeProps> = ({ children }) => {
  return (
    <CSSTransition
      classNames="fade"
      addEndListener={() => {}}
      timeout={1500}
      appear={true}
      in={true}
    >
      {children}
    </CSSTransition>
  )
}

export default Fade
