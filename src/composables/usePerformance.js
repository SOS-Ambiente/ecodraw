import { ref, onMounted } from 'vue'

export function usePerformance() {
  const fps = ref(60)
  const memory = ref(0)
  const isLowPerformance = ref(false)

  let frameCount = 0
  let lastTime = performance.now()
  let animationFrameId = null

  const measureFPS = () => {
    frameCount++
    const currentTime = performance.now()
    
    if (currentTime >= lastTime + 1000) {
      fps.value = Math.round((frameCount * 1000) / (currentTime - lastTime))
      frameCount = 0
      lastTime = currentTime
      
      // Detect low performance
      isLowPerformance.value = fps.value < 30
    }
    
    animationFrameId = requestAnimationFrame(measureFPS)
  }

  const measureMemory = () => {
    if (performance.memory) {
      memory.value = Math.round(performance.memory.usedJSHeapSize / 1048576) // Convert to MB
    }
  }

  const startMonitoring = () => {
    measureFPS()
    setInterval(measureMemory, 5000)
  }

  const stopMonitoring = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  }

  onMounted(() => {
    startMonitoring()
  })

  return {
    fps,
    memory,
    isLowPerformance,
    stopMonitoring
  }
}
