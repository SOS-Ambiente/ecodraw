<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHistory } from '@/composables/useHistory'

const props = defineProps({
  tool: String,
  brushColor: String,
  brushThickness: Number,
  brushHardness: Number,
  brushOpacity: Number
})

const stageConfig = ref({
  width: window.innerWidth - 162,
  height: window.innerHeight - 80
})

const stageScale = ref(1)
const stagePosition = ref({ x: 0, y: 0 })

// Grid configuration - 2m² proportional grid
// 1 meter = 50 pixels, so 2m² = 100x100 pixels
const METER_TO_PIXELS = 50
const GRID_SIZE_METERS = 2
const gridSize = METER_TO_PIXELS * GRID_SIZE_METERS // 100 pixels = 2m²

const gridLines = computed(() => {
  const lines = []
  const width = stageConfig.value.width
  const height = stageConfig.value.height
  
  // Vertical lines
  for (let i = 0; i <= Math.ceil(width / gridSize); i++) {
    const x = i * gridSize
    const isMainLine = i % 5 === 0 // Every 10m is a main line
    lines.push({
      points: [x, 0, x, height],
      stroke: isMainLine ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
      strokeWidth: isMainLine ? 1.5 : 1,
      dash: isMainLine ? [] : [5, 5]
    })
  }
  
  // Horizontal lines
  for (let i = 0; i <= Math.ceil(height / gridSize); i++) {
    const y = i * gridSize
    const isMainLine = i % 5 === 0 // Every 10m is a main line
    lines.push({
      points: [0, y, width, y],
      stroke: isMainLine ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
      strokeWidth: isMainLine ? 1.5 : 1,
      dash: isMainLine ? [] : [5, 5]
    })
  }
  
  return lines
})

const lines = ref([])
const shapes = ref([])
const images = ref([])
const texts = ref([])
const isDrawing = ref(false)
const { saveHistory, undo, redo, currentState } = useHistory()

// Watch for undo/redo changes
const applyHistoryState = (state) => {
  if (state) {
    lines.value = [...state.lines]
    shapes.value = [...state.shapes]
    images.value = state.images ? [...state.images] : []
    texts.value = state.texts ? [...state.texts] : []
  }
}

defineExpose({
  undo: () => {
    const state = undo()
    applyHistoryState(state)
  },
  redo: () => {
    const state = redo()
    applyHistoryState(state)
  },
  clear: () => {
    lines.value = []
    shapes.value = []
    images.value = []
    texts.value = []
    saveHistory({ lines: [], shapes: [], images: [], texts: [] })
  },
  exportCanvas: () => {
    // Export functionality
    return { lines: lines.value, shapes: shapes.value, images: images.value, texts: texts.value }
  },
  zoomIn: () => {
    stageScale.value = Math.min(stageScale.value * 1.2, 5)
  },
  zoomOut: () => {
    stageScale.value = Math.max(stageScale.value / 1.2, 0.1)
  },
  resetZoom: () => {
    stageScale.value = 1
    stagePosition.value = { x: 0, y: 0 }
  },
  addImage: (imageData) => {
    images.value.push(imageData)
    saveHistory({ lines: lines.value, shapes: shapes.value, images: images.value, texts: texts.value })
  },
  addText: (textData) => {
    texts.value.push(textData)
    saveHistory({ lines: lines.value, shapes: shapes.value, images: images.value, texts: texts.value })
  }
})

// Improved drawing handler with better performance
const handleMouseDown = (e) => {
  const pos = e.target.getStage().getPointerPosition()
  
  // Handle text tool separately
  if (props.tool === 'text') {
    const text = prompt('Enter text:')
    if (text) {
      texts.value.push({
        text: text,
        x: pos.x,
        y: pos.y,
        fontSize: 24,
        fontFamily: 'Inter, sans-serif',
        fill: props.brushColor,
        draggable: true
      })
      saveHistory({ 
        lines: [...lines.value], 
        shapes: [...shapes.value],
        images: [...images.value],
        texts: [...texts.value]
      })
    }
    return
  }
  
  isDrawing.value = true
  
  if (props.tool === 'brush' || props.tool === 'eraser') {
    lines.value.push({
      tool: props.tool,
      points: [pos.x, pos.y, pos.x, pos.y], // Add point twice for single click visibility
      stroke: props.brushColor,
      strokeWidth: props.brushThickness / 10,
      opacity: props.brushOpacity / 100,
      tension: 0.5,
      lineCap: 'round',
      lineJoin: 'round',
      globalCompositeOperation: props.tool === 'eraser' ? 'destination-out' : 'source-over',
      perfectDrawEnabled: false // Performance optimization
    })
  } else if (props.tool === 'square') {
    shapes.value.push({
      type: 'rect',
      x: pos.x,
      y: pos.y,
      width: 0,
      height: 0,
      stroke: props.brushColor,
      strokeWidth: 2,
      fill: 'transparent'
    })
  } else if (props.tool === 'circle') {
    shapes.value.push({
      type: 'circle',
      x: pos.x,
      y: pos.y,
      radius: 0,
      stroke: props.brushColor,
      strokeWidth: 2,
      fill: 'transparent'
    })
  } else if (props.tool === 'triangle') {
    shapes.value.push({
      type: 'triangle',
      x: pos.x,
      y: pos.y,
      sides: 3,
      radius: 0,
      stroke: props.brushColor,
      strokeWidth: 2,
      fill: 'transparent',
      rotation: 180
    })
  }
}

const handleMouseMove = (e) => {
  if (!isDrawing.value) return
  
  // Prevent scrolling on touch devices
  if (e.evt) e.evt.preventDefault()
  
  const stage = e.target.getStage()
  const point = stage.getPointerPosition()
  
  if (props.tool === 'brush' || props.tool === 'eraser') {
    const lastLine = lines.value[lines.value.length - 1]
    lastLine.points = lastLine.points.concat([point.x, point.y])
  } else if (shapes.value.length > 0) {
    const lastShape = shapes.value[shapes.value.length - 1]
    const startX = lastShape.x
    const startY = lastShape.y
    
    if (lastShape.type === 'rect') {
      lastShape.width = point.x - startX
      lastShape.height = point.y - startY
    } else if (lastShape.type === 'circle') {
      const dx = point.x - startX
      const dy = point.y - startY
      lastShape.radius = Math.sqrt(dx * dx + dy * dy)
    } else if (lastShape.type === 'triangle') {
      const dx = point.x - startX
      const dy = point.y - startY
      lastShape.radius = Math.sqrt(dx * dx + dy * dy)
    }
  }
}

const handleMouseUp = () => {
  if (isDrawing.value) {
    isDrawing.value = false
    saveHistory({ 
      lines: [...lines.value], 
      shapes: [...shapes.value],
      images: [...images.value],
      texts: [...texts.value]
    })
  }
}

// Touch event support
const handleTouchStart = (e) => handleMouseDown(e)
const handleTouchMove = (e) => handleMouseMove(e)
const handleTouchEnd = () => handleMouseUp()

// Zoom with mouse wheel
const handleWheel = (e) => {
  e.evt.preventDefault()
  
  const stage = e.target.getStage()
  const oldScale = stageScale.value
  const pointer = stage.getPointerPosition()
  
  const mousePointTo = {
    x: (pointer.x - stagePosition.value.x) / oldScale,
    y: (pointer.y - stagePosition.value.y) / oldScale
  }
  
  const direction = e.evt.deltaY > 0 ? -1 : 1
  const scaleBy = 1.05
  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy
  
  stageScale.value = Math.max(0.1, Math.min(5, newScale))
  
  const newPos = {
    x: pointer.x - mousePointTo.x * stageScale.value,
    y: pointer.y - mousePointTo.y * stageScale.value
  }
  
  stagePosition.value = newPos
}

onMounted(() => {
  const handleResize = () => {
    stageConfig.value = {
      width: window.innerWidth - 162,
      height: window.innerHeight - 80
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <div class="canvas-container">
    <v-stage
      :config="{
        ...stageConfig,
        scaleX: stageScale,
        scaleY: stageScale,
        x: stagePosition.x,
        y: stagePosition.y
      }"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @wheel="handleWheel"
    >
      <!-- Grid Layer (background) -->
      <v-layer :config="{ listening: false }">
        <v-line
          v-for="(line, i) in gridLines"
          :key="`grid-${i}`"
          :config="line"
        />
        
        <!-- Grid labels for scale reference -->
        <v-text
          :config="{
            x: 10,
            y: 10,
            text: '2m² Grid',
            fontSize: 14,
            fontFamily: 'Inter, sans-serif',
            fill: 'rgba(255, 255, 255, 0.4)',
            fontStyle: 'bold'
          }"
        />
      </v-layer>
      
      <!-- Drawing Layer -->
      <v-layer>
        <!-- Draw all lines -->
        <v-line
          v-for="(line, i) in lines"
          :key="`line-${i}`"
          :config="line"
        />
        
        <!-- Draw all shapes -->
        <v-rect
          v-for="(shape, i) in shapes.filter(s => s.type === 'rect')"
          :key="`rect-${i}`"
          :config="shape"
        />
        
        <v-circle
          v-for="(shape, i) in shapes.filter(s => s.type === 'circle')"
          :key="`circle-${i}`"
          :config="shape"
        />
        
        <v-regular-polygon
          v-for="(shape, i) in shapes.filter(s => s.type === 'triangle')"
          :key="`triangle-${i}`"
          :config="shape"
        />
        
        <!-- Draw all images -->
        <v-image
          v-for="(img, i) in images"
          :key="`image-${i}`"
          :config="img"
        />
        
        <!-- Draw all texts -->
        <v-text
          v-for="(text, i) in texts"
          :key="`text-${i}`"
          :config="text"
        />
      </v-layer>
    </v-stage>
    
    <!-- Zoom indicator -->
    <div v-if="stageScale !== 1" class="zoom-indicator">
      {{ Math.round(stageScale * 100) }}%
    </div>
  </div>
</template>

<style scoped>
.canvas-container {
  flex: 1;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;
}
</style>

.zoom-indicator {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(20px);
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
