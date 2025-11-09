<script setup>
import { computed } from 'vue'

const props = defineProps({
  tool: String,
  currentOption: String,
  position: Object
})

const emit = defineEmits(['option-select', 'close', 'mouseenter', 'mouseleave'])

const toolOptions = {
  brush: [
    { id: 'pencil', label: 'Pencil', desc: 'Sharp, precise lines', icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z' },
    { id: 'marker', label: 'Marker', desc: 'Bold, smooth strokes', icon: 'M18.5 1.15l4.35 4.35L8.5 19.85H4.15v-4.35L18.5 1.15z' },
    { id: 'spray', label: 'Spray', desc: 'Soft, textured effect', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { id: 'calligraphy', label: 'Calligraphy', desc: 'Elegant, artistic', icon: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5z' }
  ],
  eraser: [
    { id: 'soft', label: 'Soft Eraser', desc: 'Gentle removal', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { id: 'hard', label: 'Hard Eraser', desc: 'Complete removal', icon: 'M3 3h18v18H3z' },
    { id: 'magic', label: 'Magic Eraser', desc: 'Smart selection', icon: 'M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14z' }
  ],
  square: [
    { id: 'rect', label: 'Rectangle', desc: 'Sharp corners', icon: 'M3 3h18v18H3z' },
    { id: 'rounded', label: 'Rounded', desc: 'Smooth corners', icon: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
    { id: 'filled', label: 'Filled', desc: 'Solid rectangle', icon: 'M3 3h18v18H3z' }
  ],
  circle: [
    { id: 'circle', label: 'Circle', desc: 'Perfect circle', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { id: 'ellipse', label: 'Ellipse', desc: 'Oval shape', icon: 'M12 4c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6z' },
    { id: 'filled', label: 'Filled', desc: 'Solid circle', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' }
  ],
  triangle: [
    { id: 'triangle', label: 'Triangle', desc: 'Equilateral', icon: 'M12 2L1 21h22z' },
    { id: 'right', label: 'Right Triangle', desc: '90° angle', icon: 'M2 22L2 2 22 22z' },
    { id: 'filled', label: 'Filled', desc: 'Solid triangle', icon: 'M12 2L1 21h22z' }
  ],
  text: [
    { id: 'normal', label: 'Normal Text', desc: 'Standard text', icon: 'M5 4v3h5.5v12h3V7H19V4z' },
    { id: 'heading', label: 'Heading', desc: 'Large title', icon: 'M5 4v3h5.5v12h3V7H19V4z' },
    { id: 'label', label: 'Label', desc: 'Small caption', icon: 'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z' }
  ],
  image: [
    { id: 'upload', label: 'Upload Image', desc: 'From your device', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z' },
    { id: 'plant', label: 'Plant Library', desc: 'Botanical icons', icon: 'M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z' },
    { id: 'structure', label: 'Structure', desc: 'Garden elements', icon: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z' }
  ]
}

const options = computed(() => toolOptions[props.tool] || [])
</script>

<template>
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
        :class="['option-btn', { active: currentOption === option.id }]"
        @click="emit('option-select', { tool: tool, option: option.id })"
        :aria-label="`${option.label}: ${option.desc}`"
      >
        <div class="option-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path :d="option.icon" />
          </svg>
        </div>
        <div class="option-text">
          <span class="option-label">{{ option.label }}</span>
          <span class="option-desc">{{ option.desc }}</span>
        </div>
        <div v-if="currentOption === option.id" class="active-indicator">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.tool-options {
  position: fixed;
  top: 90px;
  transform: translateX(-50%);
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
  backdrop-filter: blur(40px) saturate(180%);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.9),
    0 0 0 1px rgba(255, 255, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  z-index: 9999;
  min-width: 300px;
  max-width: 340px;
  animation: optionsSlideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: auto;
}

@keyframes optionsSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.options-arrow {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
  border-left: 1px solid rgba(var(--primary-rgb), 0.2);
  border-top: 1px solid rgba(var(--primary-rgb), 0.2);
  box-shadow: -2px -2px 8px rgba(0, 0, 0, 0.5);
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  outline: none;
  overflow: hidden;
}

.option-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0) 0%, rgba(var(--primary-rgb), 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.option-btn:hover::before {
  opacity: 1;
}

.option-btn:hover {
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--primary-rgb), 0.08) 100%);
  border-color: rgba(var(--primary-rgb), 0.4);
  transform: translateX(6px) scale(1.02);
  box-shadow: 
    0 8px 24px rgba(var(--primary-rgb), 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.option-btn.active {
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.25) 0%, rgba(var(--primary-rgb), 0.15) 100%);
  border-color: var(--primary-color);
  box-shadow: 
    0 0 20px rgba(var(--primary-rgb), 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.option-btn:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.option-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  position: relative;
}

.option-icon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: radial-gradient(circle at center, rgba(var(--primary-rgb), 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.option-btn:hover .option-icon {
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0.1) 100%);
  border-color: rgba(var(--primary-rgb), 0.3);
  color: var(--primary-color);
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
}

.option-btn:hover .option-icon::after {
  opacity: 1;
}

.option-btn.active .option-icon {
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.3) 0%, rgba(var(--primary-rgb), 0.2) 100%);
  border-color: var(--primary-color);
  color: var(--primary-color);
  box-shadow: 0 0 16px rgba(var(--primary-rgb), 0.5);
}

.option-icon svg {
  width: 22px;
  height: 22px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 1;
}

.option-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.option-label {
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.option-btn:hover .option-label {
  color: var(--primary-color);
  text-shadow: 0 0 12px rgba(var(--primary-rgb), 0.6);
}

.option-btn.active .option-label {
  color: var(--primary-color);
  text-shadow: 0 0 16px rgba(var(--primary-rgb), 0.8);
}

.option-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  letter-spacing: 0.2px;
  transition: color 0.3s ease;
}

.option-btn:hover .option-desc {
  color: rgba(255, 255, 255, 0.7);
}

.active-indicator {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--primary-color);
  animation: checkPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  filter: drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.8));
}

.active-indicator svg {
  width: 100%;
  height: 100%;
}

@keyframes checkPop {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.3) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
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
