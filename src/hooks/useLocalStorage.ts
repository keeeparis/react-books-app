import React, { useEffect } from 'react'

const useLocalStorage = (
  storageName: string,
  dispatchaction: any,
  dependantvalue: string
) => {
  useEffect(() => {
    const data = localStorage.getItem(storageName)
    if (data) {
      const newData = JSON.parse(data)
      dispatchaction(newData)
    }
  }, [dependantvalue])
  return
}

export default useLocalStorage
