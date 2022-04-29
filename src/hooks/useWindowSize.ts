import { useEffect, useState } from 'react'

const getWindowDimensions = () => {
  const { scrollY: scrolledHeight } = window
  const {
    body: { offsetHeight: pageHeight },
  } = document
  return {
    scrolledHeight,
    pageHeight,
  }
}

function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleScroll() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return windowDimensions
}

export default useWindowSize
