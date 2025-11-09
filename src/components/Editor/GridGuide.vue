<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const shortcuts = [
  { key: 'B', action: 'Brush' },
  { key: 'E', action: 'Eraser' },
  { key: 'M', action: 'Move' },
  { key: 'G', action: 'Grid' },
  { key: 'Ctrl+Z', action: 'Undo' },
  { key: 'Ctrl+Y', action: 'Redo' },
  { key: 'Ctrl++', action: 'Zoom In' },
  { key: 'Ctrl+-', action: 'Zoom Out' },
  { key: 'Del', action: 'Delete' }
]

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="grid-guide">
    <button 
      class="guide-toggle"
      @click="toggleExpanded"
      :class="{ expanded: isExpanded }"
      title="EcoDraw Atalhos"
    >
      <svg v-if="!isExpanded" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>

    <Transition name="slide-up">
      <div v-if="isExpanded" class="guide-panel">
        <div class="guide-header">
          <h3>EcoDraw Atalhos</h3>
        </div>
        <div class="shortcuts-grid">
          <div 
            v-for="(shortcut, index) in shortcuts" 
            :key="index"
            class="shortcut-row"
          >
            <kbd class="shortcut-key">{{ shortcut.key }}</kbd>
            <span class="shortcut-label">{{ shortcut.action }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.grid-guide {
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.guide-toggle {
  width: 48px;
  height: 48px;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.guide-toggle:hover {
  background: rgba(var(--primary-rgb), 0.15);
  border-color: rgba(var(--primary-rgb), 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.guide-toggle.expanded {
  background: rgba(var(--primary-rgb), 0.2);
  border-color: rgba(var(--primary-rgb), 0.4);
}

.guide-toggle svg {
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
}

.guide-toggle:hover svg {
  color: var(--primary-color);
}

.guide-panel {
  width: 280px;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.guide-header {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.guide-header h3 {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  letter-spacing: 0.5px;
}

.shortcuts-grid {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 400px;
  overflow-y: auto;
}

.shortcuts-grid::-webkit-scrollbar {
  width: 6px;
}

.shortcuts-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.shortcuts-grid::-webkit-scrollbar-thumb {
  background: rgba(var(--primary-rgb), 0.5);
  border-radius: 3px;
}

.shortcut-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.shortcut-row:hover {
  background: rgba(var(--primary-rgb), 0.08);
  border-color: rgba(var(--primary-rgb), 0.2);
  transform: translateX(4px);
}

.shortcut-key {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
}

.shortcut-label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  flex: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
