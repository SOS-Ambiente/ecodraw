<script setup>
import { ref, computed, provide } from 'vue'
import EditorCanvas from './components/Editor/EditorCanvas.vue'
import Sidebar from './components/Editor/Sidebar.vue'
import Toolbar from './components/Editor/Toolbar.vue'
import BrushControls from './components/Editor/BrushControls.vue'
import BotanicalLibrary from './components/Library/BotanicalLibrary.vue'
import KeyboardShortcuts from './components/Editor/KeyboardShortcuts.vue'
import GridGuide from './components/Editor/GridGuide.vue'
import ExportDialog from './components/Editor/ExportDialog.vue'
import SplashScreen from './components/SplashScreen.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import AccessibilityMenu from './components/AccessibilityMenu.vue'
import { useBrush } from './composables/useBrush'
import { useHistory } from './composables/useHistory'
import { useTheme } from './composables/useTheme'
import { useKeyboard } from './composables/useKeyboard'
import { useLocalStorage } from './composables/useLocalStorage'
import { useZoom } from './composables/useZoom'
import { logger } from './utils/logger'

const showSplash = ref(true)
const showLibrary = ref(false)
const showShortcuts = ref(false)
const showExport = ref(false)
const showAccessibility = ref(false)
const showGrid = ref(true)
const currentTool = ref('brush')
const currentToolOption = ref('pencil')
const canvasRef = ref(null)
const canvasSize = ref({ width: 20, height: 15 }) // in meters

// Use composables for better state management
const { color: brushColor, thickness: brushThickness, hardness: brushHardness, opacity: brushOpacity } = useBrush()
const { canUndo, canRedo } = useHistory()
const { primaryColor } = useTheme()
const { zoomIn, zoomOut, resetZoom } = useZoom()

// Sync brush color with theme color
const syncedBrushColor = computed({
  get: () => brushColor.value,
  set: (val) => {
    brushColor.value = val
    primaryColor.value = val
  }
})

// Provide accent color to child components
provide('primaryColor', primaryColor)

// Auto-save preferences
const { data: preferences } = useLocalStorage('ecodraw-preferences', {
  showGrid: true,
  lastColor: '#FF4015',
  lastThickness: 50
})

// Load saved preferences
if (preferences.value.lastColor) {
  syncedBrushColor.value = preferences.value.lastColor
}
if (preferences.value.lastThickness) {
  brushThickness.value = preferences.value.lastThickness
}
if (preferences.value.showGrid !== undefined) {
  showGrid.value = preferences.value.showGrid
}

const handleToolChange = (tool, option) => {
  logger.log('Tool change:', tool, 'Option:', option)
  
  // Handle action tools immediately using centralized zoom
  if (tool === 'zoom-in') {
    zoomIn()
    return
  } else if (tool === 'zoom-out') {
    zoomOut()
    return
  } else if (tool === 'library') {
    showLibrary.value = true
    return
  }
  
  // Handle image tool with options
  if (tool === 'image') {
    if (option === 'upload') {
      handleImageUpload()
      return
    } else if (option === 'plant') {
      showLibrary.value = true
      return
    }
  }
  
  // Set current tool
  currentTool.value = tool
  
  // Set option or use default
  if (option) {
    currentToolOption.value = option
  } else {
    // Set default options for tools
    const defaults = {
      brush: 'pencil',
      eraser: 'soft',
      square: 'rect',
      circle: 'circle',
      triangle: 'triangle',
      text: 'normal',
      image: 'upload'
    }
    if (defaults[tool]) {
      currentToolOption.value = defaults[tool]
    }
  }
  
  logger.log(`Active Tool: ${currentTool.value}, Option: ${currentToolOption.value}`)
}

const handleImageUpload = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.onchange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          if (canvasRef.value) {
            canvasRef.value.addImage({
              image: img,
              x: 100,
              y: 100,
              width: img.width,
              height: img.height,
              draggable: true
            })
          }
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  input.click()
}

const handleColorChange = (color) => {
  syncedBrushColor.value = color
  preferences.value.lastColor = color
}

const handleUndo = () => {
  if (canvasRef.value && canUndo()) {
    canvasRef.value.undo()
  }
}

const handleRedo = () => {
  if (canvasRef.value && canRedo()) {
    canvasRef.value.redo()
  }
}

const handleSave = () => {
  if (canvasRef.value) {
    const data = canvasRef.value.getCanvasData()
    logger.log('Saving canvas data:', data)
    // Implement save functionality (e.g., download as JSON or image)
    const dataStr = JSON.stringify(data, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ecodraw-${Date.now()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }
}

const handleCanvasSizeChange = (size) => {
  canvasSize.value = size
  logger.log('Canvas size changed:', size)
  // The canvas will automatically adjust based on the new size
}

// Keyboard shortcuts using composable with centralized zoom
useKeyboard({
  'ctrl+z': handleUndo,
  'ctrl+shift+z': handleRedo,
  'ctrl+y': handleRedo,
  'ctrl+s': handleSave,
  'ctrl+=': zoomIn,
  'ctrl++': zoomIn,
  'ctrl+-': zoomOut,
  'ctrl+0': resetZoom,
  'b': () => handleToolChange('brush', 'pencil'),
  'e': () => handleToolChange('eraser', 'soft'),
  'r': () => handleToolChange('square', 'rect'),
  'c': () => handleToolChange('circle', 'circle'),
  't': () => handleToolChange('text', 'normal'),
  'i': () => handleToolChange('image', 'upload'),
  'm': () => handleToolChange('move'),
  'g': () => {
    showGrid.value = !showGrid.value
    preferences.value.showGrid = showGrid.value
  },
  '?': () => showShortcuts.value = true,
  'ctrl+e': () => showExport.value = true,
  'ctrl+shift+a': () => showAccessibility.value = true
})
</script>

<template>
  <ErrorBoundary>
    <SplashScreen v-if="showSplash" @loaded="showSplash = false" />
    
    <div v-show="!showSplash" class="app">
    <Sidebar 
      @tool-change="handleToolChange"
      @canvas-size-change="handleCanvasSizeChange"
      @color-change="handleColorChange"
    />
    
    <div class="main-content">
      <Toolbar 
        :current-tool="currentTool"
        :current-tool-option="currentToolOption"
        :can-undo="canUndo()"
        :can-redo="canRedo()"
        :show-grid="showGrid"
        @tool-change="handleToolChange"
        @undo="handleUndo"
        @redo="handleRedo"
        @save="handleSave"
        @toggle-grid="showGrid = !showGrid; preferences.showGrid = showGrid"
        @export="showExport = true"
      />
      
      <EditorCanvas 
        ref="canvasRef"
        :tool="currentTool"
        :tool-option="currentToolOption"
        :brush-color="syncedBrushColor"
        :brush-thickness="brushThickness"
        :brush-hardness="brushHardness"
        :brush-opacity="brushOpacity"
        :show-grid="showGrid"
        :canvas-size="canvasSize"
      />
    </div>

    <BrushControls
      :current-tool="currentTool"
      v-model:color="syncedBrushColor"
      v-model:thickness="brushThickness"
      v-model:hardness="brushHardness"
      v-model:opacity="brushOpacity"
      @color-change="handleColorChange"
    />

    <BotanicalLibrary 
      v-if="showLibrary"
      @close="showLibrary = false"
    />



    <ExportDialog
      v-if="showExport"
      :canvas-ref="canvasRef"
      @close="showExport = false"
    />

    <AccessibilityMenu
      v-if="showAccessibility"
      @close="showAccessibility = false"
    />

    
    <GridGuide />

     
    </div>
  </ErrorBoundary>
</template>

<style scoped>
.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
</style>
