import { useState, useEffect, useRef } from 'react'

export default function useClickedOutside(callback: any) {
  const ref = useRef<any>(null)

  const handleClickOutside = (event: any) => {
    if (!(ref.current == event.target || ref.current.contains(event.target))) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref }
}
