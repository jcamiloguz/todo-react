import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem

        if (localStorage.getItem(itemName)) {
          localStorageItem = JSON.parse(localStorage.getItem(itemName))
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          localStorageItem = []
        }
        setItem(localStorageItem)
        setLoading(false)
      } catch (err) {
        setError(err)
      }
    }, 1000)
  })

  function saveLocalStorage (value) {
    try {
      localStorage.setItem(itemName, JSON.stringify(value))
      setItem(value)
    } catch (err) {
      setError(err)
    }
  }
  return { item, saveLocalStorage, loading, setLoading, error, setError }
}

export { useLocalStorage }
