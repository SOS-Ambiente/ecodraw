import { ref, computed } from 'vue'

export function useCanvas() {
  const zoom = ref(1)
  const panX = ref(0)
  const panY = ref(0)

  const zoomIn = () => {
    zoom.value = Math.min(zoom.value * 1.2, 5)
  }

  const zoomOut = () => {
    zoom.value = Math.max(zoom.value / 1.2, 0.1)
  }

  const resetZoom = () => {
    zoom.value = 1
    panX.value = 0
    panY.value = 0
  }

  const stageTransform = computed(() => ({
    scaleX: zoom.value,
    scaleY: zoom.value,
    x: panX.value,
    y: panY.value
  }))

  return {
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    resetZoom,
    stageTransform
  }
}
