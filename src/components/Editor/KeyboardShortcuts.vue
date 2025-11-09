<script setup>
import { ref } from 'vue'
import IconKeyboard from '../Icons/IconKeyboard.vue'

const emit = defineEmits(['close'])

const shortcuts = [
  { keys: ['Ctrl', 'Z'], action: 'Undo' },
  { keys: ['Ctrl', 'Shift', 'Z'], action: 'Redo' },
  { keys: ['Ctrl', 'Y'], action: 'Redo (Alt)' },
  { keys: ['Ctrl', 'S'], action: 'Save Project' },
  { keys: ['Ctrl', '+'], action: 'Zoom In' },
  { keys: ['Ctrl', '-'], action: 'Zoom Out' },
  { keys: ['Ctrl', '0'], action: 'Reset Zoom' },
  { keys: ['B'], action: 'Brush Tool' },
  { keys: ['E'], action: 'Eraser Tool' },
  { keys: ['T'], action: 'Text Tool' },
  { keys: ['M'], action: 'Move Tool' },
  { keys: ['G'], action: 'Toggle Grid' },
  { keys: ['Space'], action: 'Pan Canvas (Hold)' },
  { keys: ['Delete'], action: 'Clear Selection' },
]
</script>

<style scoped>
.shortcuts-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.shortcuts-panel {
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
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

.shortcuts-header {
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

.shortcuts-header h2 {
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

.shortcuts-list {
  padding: 24px 32px;
  max-height: calc(80vh - 120px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.shortcuts-list::-webkit-scrollbar {
  width: 8px;
}

.shortcuts-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.shortcuts-list::-webkit-scrollbar-thumb {
  background: rgba(var(--primary-rgb), 0.5);
  border-radius: 4px;
}

.shortcut-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.shortcut-item:hover {
  background: rgba(var(--primary-rgb), 0.08);
  border-color: rgba(var(--primary-rgb), 0.2);
  transform: translateX(4px);
}

.shortcut-keys {
  display: flex;
  gap: 8px;
  align-items: center;
}

.key {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  min-width: 32px;
  text-align: center;
}

.shortcut-action {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.3px;
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
