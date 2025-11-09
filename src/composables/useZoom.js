import { ref, computed } from 'vue'
import { CANVAS_CONFIG } from '@/constants/tools'
import { logger } from '@/utils/logger'

// Centralized zoom state management
const stageScale = ref(1)
const stagePosition = ref({ x: 0, y: 0 })
const stageConfig = ref({
  width: window.innerWidth - 280,
  height: window.innerHeight - 80
})

// Prevent concurrent zoom operations
let isZooming = false

export function useZoom() {
  // Safe stage center calculation
  const getSafeStageCenter = () => {
    const width = stageConfig.value?.width ?? (window.innerWidth - 280)
    const height = stageConfig.value?.height ?? (window.innerHeight - 80)
    
    if (!stageConfig.value?.width || !stageConfig.value?.height) {
      logger.warn('Stage config unavailable, using fallback dimensions')
    }
    
    return {
      x: width / 2,
      y: height / 2
    }
  }

  // Zoom in with safe bounds checking
  const zoomIn = () => {
    if (isZooming) {
      return
    }
    
    const oldScale = stageScale.value
    const newScale = Math.min(oldScale * 1.2, CANVAS_CONFIG.MAX_ZOOM)
    
    if (newScale === oldScale) {
      return
    }
    
    isZooming = true
    
    const center = getSafeStageCenter()
    const mousePointTo = {
      x: (center.x - stagePosition.value.x) / oldScale,
      y: (center.y - stagePosition.value.y) / oldScale
    }
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      stageScale.value = newScale
      stagePosition.value = {
        x: center.x - mousePointTo.x * newScale,
        y: center.y - mousePointTo.y * newScale
      }
      
      requestAnimationFrame(() => {
        isZooming = false
      })
    })
  }

  // Zoom out with safe bounds checking
  const zoomOut = () => {
    if (isZooming) {
      return
    }
    
    const oldScale = stageScale.value
    const newScale = Math.max(oldScale / 1.2, CANVAS_CONFIG.MIN_ZOOM)
    
    if (newScale === oldScale) {
      return
    }
    
    isZooming = true
    
    const center = getSafeStageCenter()
    const mousePointTo = {
      x: (center.x - stagePosition.value.x) / oldScale,
      y: (center.y - stagePosition.value.y) / oldScale
    }
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      stageScale.value = newScale
      stagePosition.value = {
        x: center.x - mousePointTo.x * newScale,
        y: center.y - mousePointTo.y * newScale
      }
      
      requestAnimationFrame(() => {
        isZooming = false
      })
    })
  }

  // Zoom to specific point (for mouse wheel)
  const zoomToPoint = (pointer, direction) => {
    if (isZooming) {
      return
    }
    
    if (!pointer) {
      return
    }

    const oldScale = stageScale.value
    const scaleBy = CANVAS_CONFIG.ZOOM_FACTOR
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy
    
    // Clamp scale with bounds checking
    const clampedScale = Math.max(
      CANVAS_CONFIG.MIN_ZOOM, 
      Math.min(CANVAS_CONFIG.MAX_ZOOM, newScale)
    )
    
    if (clampedScale === oldScale) {
      return
    }

    isZooming = true

    const mousePointTo = {
      x: (pointer.x - stagePosition.value.x) / oldScale,
      y: (pointer.y - stagePosition.value.y) / oldScale
    }
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      stageScale.value = clampedScale
      stagePosition.value = {
        x: pointer.x - mousePointTo.x * clampedScale,
        y: pointer.y - mousePointTo.y * clampedScale
      }
      
      requestAnimationFrame(() => {
        isZooming = false
      })
    })
  }

  // Reset zoom to default
  const resetZoom = () => {
    if (isZooming) {
      return
    }
    
    isZooming = true
    
    requestAnimationFrame(() => {
      stageScale.value = 1
      stagePosition.value = { x: 0, y: 0 }
      
      requestAnimationFrame(() => {
        isZooming = false
      })
    })
  }

  // Update stage config (for window resize)
  const updateStageConfig = (width, height) => {
    stageConfig.value = { width, height }
  }

  // Computed properties
  const isMaxZoom = computed(() => stageScale.value >= CANVAS_CONFIG.MAX_ZOOM)
  const isMinZoom = computed(() => stageScale.value <= CANVAS_CONFIG.MIN_ZOOM)
  const zoomPercentage = computed(() => Math.round(stageScale.value * 100))

  return {
    // State
    stageScale,
    stagePosition,
    stageConfig,
    
    // Methods
    zoomIn,
    zoomOut,
    zoomToPoint,
    resetZoom,
    updateStageConfig,
    getSafeStageCenter,
    
    // Computed
    isMaxZoom,
    isMinZoom,
    zoomPercentage
  }
}
