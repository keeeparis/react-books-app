import React, { FC } from 'react'

interface EmojiProps {
  label?: string
  symbol: any
}

const Emoji: FC<EmojiProps> = (props) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {props.symbol}
    </span>
  )
}

export default Emoji
