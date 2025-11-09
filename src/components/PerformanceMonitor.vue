<script setup>
import { ref } from 'vue'
import { usePerformance } from '@/composables/usePerformance'

const { fps, memory, isLowPerformance } = usePerformance()
const isExpanded = ref(false)
</script>

<template>
  <div 
    class="performance-monitor" 
    :class="{ expanded: isExpanded, warning: isLowPerformance }"
    @click="isExpanded = !isExpanded"
  >
    <div class="monitor-compact">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
      </svg>
      <span class="fps-value">{{ fps }}</span>
    </div>
    
    <Transition name="slide-down">
      <div v-if="isExpanded" class="monitor-details">
        <div class="detail-row">
          <span class="label">FPS:</span>
          <span class="value">{{ fps }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Memory:</span>
          <span class="value">{{ memory }} MB</span>
        </div>
        <div v-if="isLowPerformance" class="warning-message">
          ⚠️ Low performance detected
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.performance-monitor {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  user-select: none;
}

.performance-monitor:hover {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(var(--primary-rgb), 0.3);
}

.performance-monitor.warning {
  border-color: rgba(255, 193, 7, 0.5);
  animation: pulse-warning 2s ease-in-out infinite;
}

@keyframes pulse-warning {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 193, 7, 0);
  }
}

.monitor-compact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.monitor-compact svg {
  width: 20px;
  height: 20px;
  color: var(--primary-color);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.fps-value {
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Courier New', monospace;
  min-width: 30px;
}

.monitor-details {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
}

.label {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
}

.value {
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Courier New', monospace;
  font-weight: 700;
}

.warning-message {
  font-size: 11px;
  color: #FFC107;
  text-align: center;
  padding: 6px;
  background: rgba(255, 193, 7, 0.1);
  border-radius: 6px;
  margin-top: 4px;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
