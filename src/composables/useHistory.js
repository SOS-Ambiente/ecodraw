import { ref, reactive } from 'vue'
import { CANVAS_CONFIG } from '@/constants/tools'

const history = ref([])
const position = ref(-1)
const currentState = reactive({
  lines: [],
  shapes: [],
  images: [],
  texts: []
})

/**
 * Deep clone utility with fallback
 * @param {any} obj - Object to clone
 * @returns {any} Cloned object
 */
function deepClone(obj) {
  // Use structuredClone if available (modern browsers)
  if (typeof structuredClone !== 'undefined') {
    try {
      return structuredClone(obj)
    } catch (e) {
      // Fallback to JSON if structuredClone fails
      return JSON.parse(JSON.stringify(obj))
    }
  }
  // Fallback for older browsers
  return JSON.parse(JSON.stringify(obj))
}

export function useHistory() {
  const saveHistory = (state) => {
    // Remove any future history if we're not at the end
    if (position.value < history.value.length - 1) {
      history.value = history.value.slice(0, position.value + 1)
    }
    
    // Deep clone the state
    const clonedState = deepClone(state)
    history.value.push(clonedState)
    position.value = history.value.length - 1
    
    // Update current state
    Object.assign(currentState, clonedState)
    
    // Limit history to MAX_HISTORY_STATES for performance
    if (history.value.length > CANVAS_CONFIG.MAX_HISTORY_STATES) {
      history.value.shift()
      position.value--
    }
  }

  const undo = () => {
    if (position.value > 0) {
      position.value--
      const state = history.value[position.value]
      Object.assign(currentState, deepClone(state))
      return currentState
    }
    return null
  }

  const redo = () => {
    if (position.value < history.value.length - 1) {
      position.value++
      const state = history.value[position.value]
      Object.assign(currentState, deepClone(state))
      return currentState
    }
    return null
  }

  const canUndo = () => position.value > 0
  const canRedo = () => position.value < history.value.length - 1

  const clear = () => {
    history.value = []
    position.value = -1
    currentState.lines = []
    currentState.shapes = []
    currentState.images = []
    currentState.texts = []
  }

  return {
    saveHistory,
    undo,
    redo,
    canUndo,
    canRedo,
    clear,
    currentState,
    historyLength: () => history.value.length,
    currentPosition: () => position.value
  }
}
