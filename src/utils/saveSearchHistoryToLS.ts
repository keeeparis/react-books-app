export const saveSearchHistoryToLocalStorage = (data: string) => {
  const searchHistory = localStorage.getItem('search-history')
  if (searchHistory) {
    const newSearchHistory: string[] = JSON.parse(searchHistory)

    if (!newSearchHistory.includes(data)) {
      newSearchHistory.unshift(data)
      if (newSearchHistory.length == 6) {
        newSearchHistory.pop()
      }
    }
    localStorage.setItem('search-history', JSON.stringify(newSearchHistory))
  } else {
    const value = [data]
    localStorage.setItem('search-history', JSON.stringify(value))
  }
}

export const removeSearchHistoryFromLocalstorage = (data: string) => {
  const searchHistory = localStorage.getItem('search-history')
  console.log(data)
  if (searchHistory) {
    const newSearchHistory: string[] = JSON.parse(searchHistory)
    const filtered = newSearchHistory.filter((search) => search !== data)
    if (filtered.length) {
      localStorage.setItem('search-history', JSON.stringify(filtered))
    } else {
      localStorage.removeItem('search-history')
    }
  }
}
