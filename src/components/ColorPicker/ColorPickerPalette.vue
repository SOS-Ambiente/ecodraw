<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  selectedColor: String
})

const emit = defineEmits(['color-change'])

const swatchColors = [
  ['#FF4015', '#FF6B47', '#FF8C69', '#FFB399'],
  ['#007AFF', '#34C759', '#FFD700', '#FF1493'],
  ['#7AC6F5', '#AF52DE', '#5856D6', '#FF6347'],
  ['#00CED1', '#32CD32', '#FF4500', '#8A2BE2'],
  ['#000000', '#404040', '#808080', '#FFFFFF']
]

const opacity = ref(100)

const selectColor = (color) => {
  emit('color-change', color)
}

// Compute gradient for opacity slider
const opacityGradient = computed(() => {
  return `linear-gradient(90deg, transparent 0%, ${props.selectedColor} 100%)`
})
</script>

<template>
  <div class="color-picker">
    <div class="opacity-control">
      <label>Opacity</label>
      <div class="slider-row">
        <div class="slider-track">
          <div class="gradient-fill" :style="{ background: opacityGradient }">
            <div class="knob"></div>
          </div>
        </div>
        <div class="percentage">{{ opacity }}%</div>
      </div>
    </div>

    <div class="swatches-section">
      <div class="current-swatch" :style="{ background: selectedColor }">
        <div class="swatch-label">Current</div>
      </div>
      
      <div class="swatches-grid">
        <div 
          v-for="(row, rowIndex) in swatchColors" 
          :key="rowIndex"
          class="swatch-row"
        >
          <button
            v-for="(color, colIndex) in row"
            :key="colIndex"
            class="swatch-dot"
            :class="{ selected: color === selectedColor }"
            :style="{ background: color }"
            @click="selectColor(color)"
            :title="color"
          >
            <div v-if="color === selectedColor" class="selection-ring"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.opacity-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.opacity-control label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.slider-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.slider-track {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 0;
  position: relative;
}

.gradient-fill {
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  position: relative;
}

.knob {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, var(--primary-color) 0%, rgba(var(--primary-rgb), 0.8) 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.knob:hover {
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.6);
}

.percentage {
  min-width: 56px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.swatches-section {
  display: flex;
  gap: 20px;
}

.current-swatch {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 8px;
  flex-shrink: 0;
}

.current-swatch:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.swatch-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
}

.swatches-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 8px;
}

.swatches-grid::-webkit-scrollbar {
  width: 6px;
}

.swatches-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.swatches-grid::-webkit-scrollbar-thumb {
  background: rgba(var(--primary-rgb), 0.5);
  border-radius: 3px;
}

.swatch-row {
  display: flex;
  gap: 12px;
}

.swatch-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.swatch-dot:hover {
  transform: scale(1.15);
  border-color: rgba(255, 255, 255, 0.4);
}

.swatch-dot.selected {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.3), 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.selection-ring {
  position: absolute;
  inset: -5px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}
</style>
