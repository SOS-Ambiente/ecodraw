<script setup>
import { CANVAS_CONFIG } from '@/constants/tools'

// Props
defineProps({
  showGrid: {
    type: Boolean,
    default: true
  }
})

// 🌿 STATIC GRID - Pre-calculated once, never changes
const METER_TO_PIXELS = CANVAS_CONFIG.METER_TO_PIXELS

// Create a large fixed grid area (100m x 100m)
const gridExtent = 50 // 50 meters in each direction
const startX = -gridExtent * METER_TO_PIXELS
const endX = gridExtent * METER_TO_PIXELS
const startY = -gridExtent * METER_TO_PIXELS
const endY = gridExtent * METER_TO_PIXELS
const gridSpacing = 2 * METER_TO_PIXELS // 2 meters = 200 pixels

// Pre-calculate all grid lines once
const gridLines = []

// Vertical lines
for (let x = startX; x <= endX; x += gridSpacing) {
  const isMajorLine = (x / gridSpacing) % 4 === 0
  gridLines.push({
    points: [x, startY, x, endY],
    stroke: isMajorLine ? 'rgba(101, 255, 134, 0.12)' : 'rgba(255, 255, 255, 0.06)',
    strokeWidth: isMajorLine ? 2 : 1,
    dash: isMajorLine ? [8, 6] : [4, 4],
    listening: false,
    perfectDrawEnabled: false
  })
}

// Horizontal lines
for (let y = startY; y <= endY; y += gridSpacing) {
  const isMajorLine = (y / gridSpacing) % 4 === 0
  gridLines.push({
    points: [startX, y, endX, y],
    stroke: isMajorLine ? 'rgba(101, 255, 134, 0.12)' : 'rgba(255, 255, 255, 0.06)',
    strokeWidth: isMajorLine ? 2 : 1,
    dash: isMajorLine ? [8, 6] : [4, 4],
    listening: false,
    perfectDrawEnabled: false
  })
}
</script>

<template>
  <!-- Static Grid Layer - Never re-renders -->
  <v-layer v-if="showGrid" v-once :config="{ listening: false }">
    <v-line
      v-for="(line, i) in gridLines"
      :key="i"
      :config="line"
    />
  </v-layer>
</template>
