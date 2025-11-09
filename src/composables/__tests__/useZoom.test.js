import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { useZoom } from '../useZoom'
import { CANVAS_CONFIG } from '@/constants/tools'

// Mock nextTick to execute immediately in tests
vi.mock('vue', async () => {
  const actual = await vi.importActual('vue')
  return {
    ...actual,
    nextTick: (fn) => fn?.()
  }
})

describe('useZoom', () => {
  let zoom

  beforeEach(() => {
    // Get fresh instance for each test
    zoom = useZoom()
    // Reset to defaults
    zoom.stageScale.value = 1
    zoom.stagePosition.value = { x: 0, y: 0 }
    zoom.updateStageConfig(1000, 800)
  })

  describe('zoomIn', () => {
    it('should increase zoom by 1.2x', () => {
      zoom.zoomIn()
      expect(zoom.stageScale.value).toBe(1.2)
    })

    it('should not exceed MAX_ZOOM', () => {
      zoom.stageScale.value = CANVAS_CONFIG.MAX_ZOOM
      zoom.zoomIn()
      expect(zoom.stageScale.value).toBe(CANVAS_CONFIG.MAX_ZOOM)
    })

    it('should update position to center zoom', () => {
      const initialPos = { ...zoom.stagePosition.value }
      zoom.zoomIn()
      // Position should change when zooming
      expect(zoom.stagePosition.value).not.toEqual(initialPos)
    })
  })

  describe('zoomOut', () => {
    it('should decrease zoom by 1.2x', () => {
      zoom.stageScale.value = 1.2
      zoom.zoomOut()
      expect(zoom.stageScale.value).toBe(1)
    })

    it('should not go below MIN_ZOOM', () => {
      zoom.stageScale.value = CANVAS_CONFIG.MIN_ZOOM
      zoom.zoomOut()
      expect(zoom.stageScale.value).toBe(CANVAS_CONFIG.MIN_ZOOM)
    })

    it('should update position to center zoom', () => {
      zoom.stageScale.value = 2
      const initialPos = { ...zoom.stagePosition.value }
      zoom.zoomOut()
      // Position should change when zooming
      expect(zoom.stagePosition.value).not.toEqual(initialPos)
    })
  })

  describe('zoomToPoint', () => {
    it('should zoom in when direction is positive', () => {
      const pointer = { x: 500, y: 400 }
      zoom.zoomToPoint(pointer, 1)
      expect(zoom.stageScale.value).toBeGreaterThan(1)
    })

    it('should zoom out when direction is negative', () => {
      zoom.stageScale.value = 2
      const pointer = { x: 500, y: 400 }
      zoom.zoomToPoint(pointer, -1)
      expect(zoom.stageScale.value).toBeLessThan(2)
    })

    it('should respect zoom limits', () => {
      zoom.stageScale.value = CANVAS_CONFIG.MAX_ZOOM
      const pointer = { x: 500, y: 400 }
      zoom.zoomToPoint(pointer, 1)
      expect(zoom.stageScale.value).toBe(CANVAS_CONFIG.MAX_ZOOM)
    })

    it('should handle invalid pointer gracefully', () => {
      const initialScale = zoom.stageScale.value
      zoom.zoomToPoint(null, 1)
      expect(zoom.stageScale.value).toBe(initialScale)
    })
  })

  describe('resetZoom', () => {
    it('should reset scale to 1', () => {
      zoom.stageScale.value = 2.5
      zoom.resetZoom()
      expect(zoom.stageScale.value).toBe(1)
    })

    it('should reset position to origin', () => {
      zoom.stagePosition.value = { x: 100, y: 200 }
      zoom.resetZoom()
      expect(zoom.stagePosition.value).toEqual({ x: 0, y: 0 })
    })
  })

  describe('computed properties', () => {
    it('isMaxZoom should be true at MAX_ZOOM', () => {
      zoom.stageScale.value = CANVAS_CONFIG.MAX_ZOOM
      expect(zoom.isMaxZoom.value).toBe(true)
    })

    it('isMinZoom should be true at MIN_ZOOM', () => {
      zoom.stageScale.value = CANVAS_CONFIG.MIN_ZOOM
      expect(zoom.isMinZoom.value).toBe(true)
    })

    it('zoomPercentage should calculate correctly', () => {
      zoom.stageScale.value = 1.5
      expect(zoom.zoomPercentage.value).toBe(150)
    })
  })

  describe('updateStageConfig', () => {
    it('should update stage dimensions', () => {
      zoom.updateStageConfig(1920, 1080)
      expect(zoom.stageConfig.value).toEqual({ width: 1920, height: 1080 })
    })
  })

  describe('getSafeStageCenter', () => {
    it('should return center point', () => {
      zoom.updateStageConfig(1000, 800)
      const center = zoom.getSafeStageCenter()
      expect(center).toEqual({ x: 500, y: 400 })
    })

    it('should provide fallback when config is invalid', () => {
      zoom.stageConfig.value = {}
      const center = zoom.getSafeStageCenter()
      expect(center.x).toBeGreaterThan(0)
      expect(center.y).toBeGreaterThan(0)
    })
  })
})
