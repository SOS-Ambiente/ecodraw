<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const settings = ref({
  highContrast: false,
  reducedMotion: false,
  largeText: false,
  screenReader: false
})

const applySettings = () => {
  if (settings.value.highContrast) {
    document.documentElement.classList.add('high-contrast')
  } else {
    document.documentElement.classList.remove('high-contrast')
  }
  
  if (settings.value.reducedMotion) {
    document.documentElement.classList.add('reduced-motion')
  } else {
    document.documentElement.classList.remove('reduced-motion')
  }
  
  if (settings.value.largeText) {
    document.documentElement.classList.add('large-text')
  } else {
    document.documentElement.classList.remove('large-text')
  }
  
  // Save to localStorage
  localStorage.setItem('accessibility-settings', JSON.stringify(settings.value))
}

const loadSettings = () => {
  const saved = localStorage.getItem('accessibility-settings')
  if (saved) {
    settings.value = JSON.parse(saved)
    applySettings()
  }
}

loadSettings()
</script>

<template>
  <div class="accessibility-overlay" @click.self="emit('close')">
    <div class="accessibility-menu">
      <div class="menu-header">
        <h2>Accessibility Settings</h2>
        <button class="close-btn" @click="emit('close')" aria-label="Close accessibility menu">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <div class="menu-content">
        <div class="setting-item">
          <label class="setting-label">
            <input 
              type="checkbox" 
              v-model="settings.highContrast"
              @change="applySettings"
            />
            <span class="checkbox-custom"></span>
            <div class="setting-info">
              <span class="setting-title">High Contrast</span>
              <span class="setting-desc">Increase contrast for better visibility</span>
            </div>
          </label>
        </div>
        
        <div class="setting-item">
          <label class="setting-label">
            <input 
              type="checkbox" 
              v-model="settings.reducedMotion"
              @change="applySettings"
            />
            <span class="checkbox-custom"></span>
            <div class="setting-info">
              <span class="setting-title">Reduced Motion</span>
              <span class="setting-desc">Minimize animations and transitions</span>
            </div>
          </label>
        </div>
        
        <div class="setting-item">
          <label class="setting-label">
            <input 
              type="checkbox" 
              v-model="settings.largeText"
              @change="applySettings"
            />
            <span class="checkbox-custom"></span>
            <div class="setting-info">
              <span class="setting-title">Large Text</span>
              <span class="setting-desc">Increase text size throughout the app</span>
            </div>
          </label>
        </div>
        
        <div class="setting-item">
          <label class="setting-label">
            <input 
              type="checkbox" 
              v-model="settings.screenReader"
              @change="applySettings"
            />
            <span class="checkbox-custom"></span>
            <div class="setting-info">
              <span class="setting-title">Screen Reader Mode</span>
              <span class="setting-desc">Optimize for screen reader users</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accessibility-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.accessibility-menu {
  width: 90%;
  max-width: 500px;
  background: rgba(20, 20, 20, 0.98);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
  animation: slideUp 0.3s ease;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.menu-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.close-btn:hover {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.1);
}

.close-btn svg {
  width: 24px;
  height: 24px;
}

.menu-content {
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.setting-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(var(--primary-rgb), 0.3);
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.setting-label input[type="checkbox"] {
  display: none;
}

.checkbox-custom {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.setting-label input[type="checkbox"]:checked + .checkbox-custom {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.setting-label input[type="checkbox"]:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.setting-title {
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.setting-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
