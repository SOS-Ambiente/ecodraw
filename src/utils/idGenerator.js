/**
 * ID Generator utility with collision prevention
 */
let idCounter = 0

/**
 * Generates a unique ID for canvas elements
 * @returns {string} Unique element ID
 */
export function generateElementId() {
  return `el_${Date.now()}_${++idCounter}_${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Resets the ID counter (useful for testing)
 */
export function resetIdCounter() {
  idCounter = 0
}
