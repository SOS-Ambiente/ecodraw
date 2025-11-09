import { onMounted, onUnmounted } from 'vue'

export function useKeyboard(handlers) {
  const handleKeyDown = (e) => {
    // Prevent shortcuts when typing in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

    const key = e.key.toLowerCase()
    const ctrl = e.ctrlKey || e.metaKey
    const shift = e.shiftKey
    const alt = e.altKey

    // Build shortcut key
    const shortcut = [
      ctrl && 'ctrl',
      shift && 'shift',
      alt && 'alt',
      key
    ].filter(Boolean).join('+')

    // Check if handler exists for this shortcut
    if (handlers[shortcut]) {
      e.preventDefault()
      handlers[shortcut]()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  return {
    handleKeyDown
  }
}
