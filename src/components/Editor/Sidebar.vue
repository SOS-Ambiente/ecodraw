<script setup>
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import ColorWheel from '../ColorPicker/ColorWheel.vue'

const emit = defineEmits(['tool-change'])

const { primaryColor, colorVariants } = useTheme()
const showColorWheel = ref(false)

const currentTime = ref(new Date().toLocaleTimeString('en-US', { 
  hour: 'numeric', 
  minute: '2-digit' 
}))

setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit' 
  })
}, 60000)

const handleColorWheelHover = () => {
  showColorWheel.value = true
}

const handleColorWheelLeave = () => {
  // Delay to allow moving to the color wheel panel
  setTimeout(() => {
    if (!showColorWheel.value) return
    showColorWheel.value = false
  }, 300)
}

const handleColorChange = (color) => {
  primaryColor.value = color
  emit('tool-change', 'color-changed')
}
</script>

<template>
  <div class="sidebar">
    <div class="user-section">
      <div class="user-avatar">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      <div class="user-name">HAUTLY</div>
    </div>

    <nav class="nav-section">
      <button class="nav-item" @click="emit('tool-change', 'library')">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
        </svg>
        <span>LIBRARY</span>
      </button>

      <button class="nav-item">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
        <span>STRUCTURES</span>
      </button>
    </nav>

    <div 
      class="color-wheel" 
      @mouseenter="handleColorWheelHover"
      @mouseleave="handleColorWheelLeave"
      :style="{ background: colorVariants.gradient }"
    >
      <div class="color-wheel-inner"></div>
    </div>

    <ColorWheel
      v-if="showColorWheel"
      :selected-color="primaryColor"
      @color-change="handleColorChange"
      @close="showColorWheel = false"
      @mouseenter="showColorWheel = true"
      @mouseleave="handleColorWheelLeave"
    />

    <div class="time-display">{{ currentTime }}</div>
  </div>
</template>


<style scoped>
.sidebar {
  width: 162px;
  background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  gap: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.user-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.user-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(var(--primary-rgb), 0.3);
  transition: all 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.05);
  border-color: rgba(var(--primary-rgb), 0.6);
}

.user-avatar svg {
  width: 40px;
  height: 40px;
  color: var(--primary-color);
}

.user-name {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.nav-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  transition: all 0.2s ease;
  width: 100%;
}

.nav-item:hover {
  background: rgba(var(--primary-rgb), 0.1);
  border-color: rgba(var(--primary-rgb), 0.3);
  transform: translateY(-2px);
}

.nav-item svg {
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.nav-item:hover svg {
  color: var(--primary-color);
}

.nav-item span {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.nav-item:hover span {
  color: rgba(255, 255, 255, 0.95);
}

.color-wheel {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: auto;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 12px rgba(var(--primary-rgb), 0.4));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.color-wheel:hover {
  transform: scale(1.15) rotate(15deg);
  filter: drop-shadow(0 8px 20px rgba(var(--primary-rgb), 0.6));
  border-color: rgba(255, 255, 255, 0.4);
}

.color-wheel-inner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
}

.time-display {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  min-width: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
}
</style>
