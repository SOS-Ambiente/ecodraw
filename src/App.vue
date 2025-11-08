<script setup>
import { ref, computed } from 'vue'
import EditorCanvas from './components/Editor/EditorCanvas.vue'
import Sidebar from './components/Editor/Sidebar.vue'
import Toolbar from './components/Editor/Toolbar.vue'
import BrushControls from './components/Editor/BrushControls.vue'
import BotanicalLibrary from './components/Library/BotanicalLibrary.vue'
import { useBrush } from './composables/useBrush'
import { useCanvas } from './composables/useCanvas'
import { useHistory } from './composables/useHistory'
import { useTheme } from './composables/useTheme'

const showLibrary = ref(false)
const currentTool = ref('brush')
const canvasRef = ref(null)

// Use composables for better state management
const { color: brushColor, thickness: brushThickness, hardness: brushHardness, opacity: brushOpacity } = useBrush()
const { zoomIn, zoomOut, resetZoom } = useCanvas()
const { canUndo, canRedo } = useHistory()
const { primaryColor } = useTheme()

// Sync brush color with theme color
const syncedBrushColor = computed({
  get: () => brushColor.value,
  set: (val) => {
    brushColor.value = val
    primaryColor.value = val
  }
})

const handleToolChange = (tool, option) => {
  // Handle action tools immediately
  if (tool === 'zoom-in') {
    if (canvasRef.value) {
      canvasRef.value.zoomIn()
    }
    return
  } else if (tool === 'zoom-out') {
    if (canvasRef.value) {
      canvasRef.value.zoomOut()
    }
    return
  } else if (tool === 'library') {
    showLibrary.value = true
    return
  } else if (tool === 'image') {
    if (option === 'upload') {
      handleImageUpload()
    } else {
      currentTool.value = tool
    }
    return
  }
  
  // Set current tool
  currentTool.value = tool
  
  // Handle tool options
  if (option) {
    console.log(`Tool: ${tool}, Option: ${option}`)
  }
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
    const data = canvasRef.value.exportCanvas()
    console.log('Saving canvas data:', data)
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

// Keyboard shortcuts
const handleKeyDown = (e) => {
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'z' && !e.shiftKey) {
      e.preventDefault()
      handleUndo()
    } else if (e.key === 'z' && e.shiftKey || e.key === 'y') {
      e.preventDefault()
      handleRedo()
    } else if (e.key === 's') {
      e.preventDefault()
      handleSave()
    }
  }
}

// Add keyboard listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeyDown)
}
</script>

<template>
  <div class="app">
    <Sidebar @tool-change="handleToolChange" />
    
    <div class="main-content">
      <Toolbar 
        :current-tool="currentTool"
        :can-undo="canUndo()"
        :can-redo="canRedo()"
        @tool-change="handleToolChange"
        @undo="handleUndo"
        @redo="handleRedo"
        @save="handleSave"
      />
      
      <EditorCanvas 
        ref="canvasRef"
        :tool="currentTool"
        :brush-color="syncedBrushColor"
        :brush-thickness="brushThickness"
        :brush-hardness="brushHardness"
        :brush-opacity="brushOpacity"
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
  </div>
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
