import { ref, computed } from 'vue'

export function useBrush() {
  const color = ref('#FF4015')
  const thickness = ref(50)
  const hardness = ref(50)
  const opacity = ref(100)

  // Calculate actual stroke width based on thickness
  const strokeWidth = computed(() => {
    return (thickness.value / 10) * (hardness.value / 100)
  })

  // Calculate blur for brush hardness effect
  const blur = computed(() => {
    return (100 - hardness.value) / 20
  })

  // Get brush configuration for Konva
  const brushConfig = computed(() => ({
    stroke: color.value,
    strokeWidth: strokeWidth.value,
    opacity: opacity.value / 100,
    shadowBlur: blur.value,
    shadowColor: color.value,
    shadowOpacity: 0.5,
    lineCap: 'round',
    lineJoin: 'round',
    tension: 0.5
  }))

  return {
    color,
    thickness,
    hardness,
    opacity,
    strokeWidth,
    blur,
    brushConfig
  }
}
