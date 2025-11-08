import { ref, computed, watch } from 'vue'

const primaryColor = ref('#FF4015')

export function useTheme() {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 64, b: 21 }
  }

  // Generate color variations
  const colorVariants = computed(() => {
    const rgb = hexToRgb(primaryColor.value)
    
    return {
      primary: primaryColor.value,
      primaryRgb: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
      light: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
      medium: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
      strong: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`,
      gradient: `linear-gradient(135deg, ${primaryColor.value} 0%, rgba(${rgb.r + 20}, ${rgb.g + 20}, ${rgb.b + 20}, 1) 100%)`,
      shadow: `0 4px 12px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`,
      glow: `0 0 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`
    }
  })

  // Apply theme to CSS variables
  watch(primaryColor, (newColor) => {
    const rgb = hexToRgb(newColor)
    document.documentElement.style.setProperty('--primary-color', newColor)
    document.documentElement.style.setProperty('--primary-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`)
  }, { immediate: true })

  const setPrimaryColor = (color) => {
    primaryColor.value = color
  }

  return {
    primaryColor,
    colorVariants,
    setPrimaryColor
  }
}
