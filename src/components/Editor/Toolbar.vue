<script setup>
import { ref } from 'vue'
import ToolOptions from './ToolOptions.vue'

const props = defineProps({
  currentTool: String,
  canUndo: Boolean,
  canRedo: Boolean
})

const emit = defineEmits(['tool-change', 'undo', 'redo', 'save'])

const hoveredTool = ref(null)
const toolPosition = ref({ x: 0 })

const tools = [
  { id: 'brush', icon: 'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z', group: 'draw', hasOptions: true },
  { id: 'eraser', icon: 'M16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95z', group: 'draw', hasOptions: true },
  { id: 'square', icon: 'M3 3h18v18H3z', group: 'shapes', hasOptions: true },
  { id: 'circle', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', group: 'shapes', hasOptions: true },
  { id: 'triangle', icon: 'M12 2L1 21h22z', group: 'shapes', hasOptions: true },
  { id: 'text', icon: 'M5 4v3h5.5v12h3V7H19V4z', group: 'tools', hasOptions: true },
  { id: 'image', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z', group: 'tools', hasOptions: true },
  { id: 'undo', icon: 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z', group: 'actions', hasOptions: false },
  { id: 'redo', icon: 'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z', group: 'actions', hasOptions: false },
  { id: 'zoom-in', icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z', group: 'actions', hasOptions: false },
  { id: 'zoom-out', icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z', group: 'actions', hasOptions: false },
  { id: 'save', icon: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z', group: 'actions', hasOptions: false }
]

const handleToolClick = (tool) => {
  if (tool.id === 'undo') {
    emit('undo')
    return
  } else if (tool.id === 'redo') {
    emit('redo')
    return
  } else if (tool.id === 'save') {
    emit('save')
    return
  } else if (tool.id === 'zoom-in') {
    emit('tool-change', 'zoom-in')
    return
  } else if (tool.id === 'zoom-out') {
    emit('tool-change', 'zoom-out')
    return
  }
  
  // For tools with options, don't change tool on click, wait for option selection
  if (!tool.hasOptions) {
    emit('tool-change', tool.id)
  }
}

const handleToolHover = (tool, event) => {
  if (tool.hasOptions) {
    const rect = event.currentTarget.getBoundingClientRect()
    toolPosition.value = { x: rect.left + rect.width / 2 }
    hoveredTool.value = tool.id
  }
}

const handleToolLeave = () => {
  setTimeout(() => {
    hoveredTool.value = null
  }, 300)
}

const handleOptionSelect = (data) => {
  emit('tool-change', data.tool, data.option)
  hoveredTool.value = null
}
</script>

<template>
  <div class="toolbar">
    <div class="toolbar-content">
      <button
        v-for="tool in tools"
        :key="tool.id"
        :class="[
          'tool-btn', 
          { 
            active: currentTool === tool.id,
            disabled: (tool.id === 'undo' && !canUndo) || (tool.id === 'redo' && !canRedo)
          }
        ]"
        @click="handleToolClick(tool)"
        @mouseenter="handleToolHover(tool, $event)"
        @mouseleave="handleToolLeave"
        :disabled="(tool.id === 'undo' && !canUndo) || (tool.id === 'redo' && !canRedo)"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path :d="tool.icon" />
        </svg>
        <div v-if="currentTool === tool.id" class="tool-underline"></div>
        <div v-if="tool.hasOptions" class="options-indicator">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </button>
    </div>
    
    <ToolOptions
      v-if="hoveredTool"
      :tool="hoveredTool"
      :position="toolPosition"
      @option-select="handleOptionSelect"
      @close="hoveredTool = null"
      @mouseenter="() => {}"
      @mouseleave="handleToolLeave"
    />
  </div>
</template>

<style scoped>
.toolbar {
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.toolbar-content {
  display: flex;
  gap: 8px;
  padding: 0 24px;
  align-items: center;
}

.tool-btn {
  position: relative;
  width: 56px;
  height: 56px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 12px;
  flex-direction: column;
}

.tool-btn svg {
  width: 28px;
  height: 28px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.tool-btn:hover svg {
  color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.tool-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.tool-btn.active svg {
  color: var(--primary-color);
}

.tool-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.options-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tool-btn:hover .options-indicator {
  opacity: 0.6;
}

.options-indicator svg {
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.6);
}

.tool-underline {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
  animation: slideIn 0.2s ease;
  box-shadow: 0 0 8px rgba(var(--primary-rgb), 0.6);
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 32px;
    opacity: 1;
  }
}
</style>
