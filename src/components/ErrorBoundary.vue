<script setup>
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)
const errorInfo = ref(null)

onErrorCaptured((err, instance, info) => {
  error.value = err
  errorInfo.value = info
  console.error('Error caught by boundary:', err, info)
  return false
})

const reload = () => {
  window.location.reload()
}
</script>

<template>
  <div v-if="error" class="error-boundary">
    <div class="error-content">
      <svg class="error-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
      <h2>Something went wrong</h2>
      <p class="error-message">{{ error.message }}</p>
      <div class="error-actions">
        <button @click="reload" class="reload-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          Reload App
        </button>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<style scoped>
.error-boundary {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.error-content {
  max-width: 500px;
  padding: 48px;
  background: rgba(20, 20, 20, 0.95);
  border-radius: 24px;
  border: 1px solid rgba(255, 64, 21, 0.3);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.error-icon {
  width: 80px;
  height: 80px;
  color: var(--primary-color);
  animation: pulse 2s ease-in-out infinite;
}

.error-content h2 {
  font-size: 28px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.error-message {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Courier New', monospace;
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 12px;
  word-break: break-word;
}

.error-actions {
  display: flex;
  gap: 12px;
}

.reload-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, var(--primary-color) 0%, rgba(var(--primary-rgb), 0.8) 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
}

.reload-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.6);
}

.reload-btn svg {
  width: 20px;
  height: 20px;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}
</style>
