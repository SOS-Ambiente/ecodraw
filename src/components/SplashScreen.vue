<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['loaded'])

const progress = ref(0)
const isLoaded = ref(false)

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += Math.random() * 15
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoaded.value = true
        setTimeout(() => {
          emit('loaded')
        }, 500)
      }, 300)
    }
  }, 100)
})
</script>

<template>
  <Transition name="fade-out">
    <div v-if="!isLoaded" class="splash-screen">
      <div class="splash-content">
        <div class="logo-container">
          <svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="url(#gradient)" stroke-width="3" fill="none" opacity="0.3"/>
            <path d="M50 10 C30 30, 30 50, 50 70 C70 50, 70 30, 50 10 Z" fill="url(#gradient)" opacity="0.8"/>
            <circle cx="50" cy="35" r="8" fill="var(--primary-color)"/>
            <circle cx="35" cy="55" r="6" fill="var(--success-color)"/>
            <circle cx="65" cy="55" r="6" fill="var(--success-color)"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:1" />
                <stop offset="100%" style="stop-color:var(--success-color);stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="logo-glow"></div>
        </div>
        
        <h1 class="app-title">ECODRAW</h1>
        <p class="app-subtitle">Botanical Drawing & Garden Planning</p>
        
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
          </div>
          <div class="progress-text">{{ Math.round(progress) }}%</div>
        </div>
      </div>
      
      <div class="splash-footer">
        <p>Powered by Vue 3 + Konva</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  animation: slideUp 0.8s ease;
}

.logo-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon {
  width: 100%;
  height: 100%;
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(var(--primary-rgb), 0.5));
}

.logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(var(--primary-rgb), 0.3) 0%, transparent 70%);
  animation: glow 2s ease-in-out infinite;
  pointer-events: none;
}

.app-title {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 4px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--success-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideDown 0.8s ease 0.2s both;
}

.app-subtitle {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  animation: slideDown 0.8s ease 0.3s both;
}

.progress-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideUp 0.8s ease 0.4s both;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--success-color) 100%);
  border-radius: 2px;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(var(--primary-rgb), 0.6);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-text {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Courier New', monospace;
}

.splash-footer {
  position: absolute;
  bottom: 40px;
  text-align: center;
  animation: fadeIn 1s ease 0.5s both;
}

.splash-footer p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 1px;
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s ease;
}

.fade-out-leave-to {
  opacity: 0;
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

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes glow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}
</style>
