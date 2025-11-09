<script setup>
import { ref } from 'vue'
import IconDownload from '../Icons/IconDownload.vue'

const props = defineProps({
  canvasRef: Object
})

const emit = defineEmits(['close'])

const exportFormat = ref('png')
const exportQuality = ref(100)
const exportScale = ref(1)
const isExporting = ref(false)

const formats = [
  { id: 'png', label: 'PNG', desc: 'High quality with transparency' },
  { id: 'jpg', label: 'JPG', desc: 'Smaller file size' },
  { id: 'svg', label: 'SVG', desc: 'Vector format (scalable)' },
  { id: 'json', label: 'JSON', desc: 'Project data' }
]

const handleExport = async () => {
  if (!props.canvasRef) return
  
  isExporting.value = true
  
  try {
    if (exportFormat.value === 'json') {
      const data = props.canvasRef.getCanvasData()
      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `ecodraw-${Date.now()}.json`
      link.click()
      URL.revokeObjectURL(url)
    } else {
      // Export only the neon border area (export area)
      const dataURL = props.canvasRef.getCanvasDataURL(
        exportFormat.value,
        exportQuality.value / 100
      )
      
      if (dataURL) {
        const link = document.createElement('a')
        link.href = dataURL
        link.download = `ecodraw-${Date.now()}.${exportFormat.value}`
        link.click()
      }
    }
    
    setTimeout(() => {
      isExporting.value = false
      emit('close')
    }, 1000)
  } catch (error) {
    console.error('Export failed:', error)
    isExporting.value = false
  }
}
</script>

<template>
  <Transition name="fade">
    <div class="export-overlay" @click.self="emit('close')">
      <div class="export-panel">
        <div class="export-header">
          <div class="header-icon">
            <IconDownload />
          </div>
          <h2>Export Canvas</h2>
          <button class="close-btn" @click="emit('close')">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div class="export-content">
          <div class="format-section">
            <label class="section-label">Export Format</label>
            <div class="format-grid">
              <button
                v-for="format in formats"
                :key="format.id"
                :class="['format-btn', { active: exportFormat === format.id }]"
                @click="exportFormat = format.id"
              >
                <div class="format-label">{{ format.label }}</div>
                <div class="format-desc">{{ format.desc }}</div>
              </button>
            </div>
          </div>

          <div v-if="exportFormat !== 'json' && exportFormat !== 'svg'" class="settings-section">
            <div class="setting-item">
              <label>Quality: {{ exportQuality }}%</label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                v-model="exportQuality"
                class="slider"
              />
            </div>

            <div class="setting-item">
              <label>Scale: {{ exportScale }}x</label>
              <input 
                type="range" 
                min="1" 
                max="4" 
                step="0.5"
                v-model="exportScale"
                class="slider"
              />
            </div>
          </div>

          <button 
            class="export-btn"
            @click="handleExport"
            :disabled="isExporting"
          >
            <IconDownload v-if="!isExporting" />
            <div v-else class="spinner"></div>
            {{ isExporting ? 'Exporting...' : 'Export' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.export-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.export-panel {
  width: 90%;
  max-width: 500px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 24px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.export-header {
  padding: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.header-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0.1) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.header-icon svg {
  width: 28px;
  height: 28px;
}

.export-header h2 {
  flex: 1;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.95);
}

.close-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(var(--primary-rgb), 0.15);
  border-color: rgba(var(--primary-rgb), 0.3);
  color: var(--primary-color);
}

.close-btn svg {
  width: 20px;
  height: 20px;
}

.export-content {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-label {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
  display: block;
}

.format-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.format-btn {
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.format-btn:hover {
  background: rgba(var(--primary-rgb), 0.08);
  border-color: rgba(var(--primary-rgb), 0.2);
  transform: translateY(-2px);
}

.format-btn.active {
  background: rgba(var(--primary-rgb), 0.15);
  border-color: var(--primary-color);
}

.format-label {
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 4px;
}

.format-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.setting-item label {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.slider {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, var(--primary-color) 0%, rgba(var(--primary-rgb), 0.8) 100%);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(255, 64, 21, 0.4);
  transition: all 0.2s ease;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(255, 64, 21, 0.6);
}

.export-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color) 0%, rgba(var(--primary-rgb), 0.8) 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
}

.export-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.6);
}

.export-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.export-btn svg {
  width: 20px;
  height: 20px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
