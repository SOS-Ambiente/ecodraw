<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  tool: String,
  position: Object
})

const emit = defineEmits(['option-select', 'close', 'mouseenter', 'mouseleave'])

const toolOptions = {
  brush: [
    { id: 'pencil', label: 'Pencil', icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z' },
    { id: 'marker', label: 'Marker', icon: 'M18.5 1.15l4.35 4.35L8.5 19.85H4.15v-4.35L18.5 1.15z' },
    { id: 'spray', label: 'Spray', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { id: 'calligraphy', label: 'Calligraphy', icon: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5z' }
  ],
  eraser: [
    { id: 'soft', label: 'Soft Eraser', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { id: 'hard', label: 'Hard Eraser', icon: 'M3 3h18v18H3z' },
    { id: 'magic', label: 'Magic Eraser', icon: 'M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14z' }
  ],
  square: [
    { id: 'rect', label: 'Rectangle', icon: 'M3 3h18v18H3z' },
    { id: 'rounded', label: 'Rounded', icon: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
    { id: 'filled', label: 'Filled', icon: 'M3 3h18v18H3z' }
  ],
  circle: [
    { id: 'circle', label: 'Circle', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { id: 'ellipse', label: 'Ellipse', icon: 'M12 4c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6z' },
    { id: 'filled', label: 'Filled Circle', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' }
  ],
  triangle: [
    { id: 'triangle', label: 'Triangle', icon: 'M12 2L1 21h22z' },
    { id: 'right', label: 'Right Triangle', icon: 'M2 22L2 2 22 22z' },
    { id: 'filled', label: 'Filled Triangle', icon: 'M12 2L1 21h22z' }
  ],
  text: [
    { id: 'normal', label: 'Normal Text', icon: 'M5 4v3h5.5v12h3V7H19V4z' },
    { id: 'heading', label: 'Heading', icon: 'M5 4v3h5.5v12h3V7H19V4z' },
    { id: 'label', label: 'Label', icon: 'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z' }
  ],
  image: [
    { id: 'upload', label: 'Upload Image', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z' },
    { id: 'plant', label: 'Plant Icon', icon: 'M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z' },
    { id: 'structure', label: 'Structure', icon: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' }
  ]
}

const options = computed(() => toolOptions[props.tool] || [])
</script>

<template>
  <Transition name="fade-slide">
    <div 
      v-if="options.length > 0"
      class="tool-options"
      :style="{ left: `${position.x}px` }"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
    >
      <div class="options-arrow"></div>
      <div class="options-grid">
        <button
          v-for="option in options"
          :key="option.id"
          class="option-btn"
          @click="emit('option-select', { tool: tool, option: option.id })"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path :d="option.icon" />
          </svg>
          <span>{{ option.label }}</span>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.tool-options {
  position: fixed;
  top: 90px;
  transform: translateX(-50%);
  background: rgba(20, 20, 20, 0.98);
  backdrop-filter: blur(30px);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 150;
  min-width: 200px;
}

.options-arrow {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: rgba(20, 20, 20, 0.98);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(-50%) rotate(45deg);
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
}

.option-btn:hover {
  background: rgba(var(--primary-rgb), 0.15);
  border-color: rgba(var(--primary-rgb), 0.3);
  color: var(--primary-color);
  transform: translateX(4px);
}

.option-btn svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}
</style>
