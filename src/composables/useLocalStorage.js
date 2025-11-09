import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const data = ref(defaultValue)

  // Load from localStorage
  const load = () => {
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        data.value = JSON.parse(stored)
      }
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error)
    }
  }

  // Save to localStorage
  const save = () => {
    try {
      localStorage.setItem(key, JSON.stringify(data.value))
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error)
    }
  }

  // Clear from localStorage
  const clear = () => {
    try {
      localStorage.removeItem(key)
      data.value = defaultValue
    } catch (error) {
      console.error(`Error clearing ${key} from localStorage:`, error)
    }
  }

  // Watch for changes and auto-save
  watch(data, () => {
    save()
  }, { deep: true })

  // Load on initialization
  load()

  return {
    data,
    save,
    load,
    clear
  }
}
