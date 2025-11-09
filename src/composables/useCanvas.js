import { ref, computed } from 'vue'
import { useZoom } from './useZoom'

// DEPRECATED: This composable is deprecated in favor of useZoom
// Kept for backward compatibility only
export function useCanvas() {
  const {
    stageScale,
    stagePosition,
    zoomIn: centralizedZoomIn,
    zoomOut: centralizedZoomOut,
    resetZoom: centralizedResetZoom
  } = useZoom()

  // Legacy compatibility layer
  const zoom = computed({
    get: () => stageScale.value,
    set: (val) => { stageScale.value = val }
  })

  const panX = computed({
    get: () => stagePosition.value.x,
    set: (val) => { stagePosition.value.x = val }
  })

  const panY = computed({
    get: () => stagePosition.value.y,
    set: (val) => { stagePosition.value.y = val }
  })

  const stageTransform = computed(() => ({
    scaleX: stageScale.value,
    scaleY: stageScale.value,
    x: stagePosition.value.x,
    y: stagePosition.value.y
  }))

  return {
    zoom,
    panX,
    panY,
    zoomIn: centralizedZoomIn,
    zoomOut: centralizedZoomOut,
    resetZoom: centralizedResetZoom,
    stageTransform
  }
}
