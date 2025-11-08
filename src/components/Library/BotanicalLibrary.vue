<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const categories = ['VEGETABLES', 'LEAVES', 'FRUITS', 'ROOTS', 'TREES', 'FLOWERS', 'HERBS']
const selectedCategory = ref('FRUITS')

const items = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  name: `ITEM ${String(i).padStart(3, '0')}`,
  type: 'TYPE X'
}))
</script>

<template>
  <div class="library-overlay" @click.self="emit('close')">
    <div class="library-window">
      <div class="library-header">
        <h2>BOTANICAL LIBRARY</h2>
      </div>

      <div class="library-content">
        <div class="items-grid">
          <div 
            v-for="item in items" 
            :key="item.id"
            class="library-item"
          >
            <div class="item-bg"></div>
            <svg class="item-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1.25-.93-2.3-2.14-2.46.21-.34.34-.74.34-1.16 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C12.5 2.12 11.38 1 10 1S7.5 2.12 7.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 .42.13.82.34 1.16-1.21.16-2.14 1.21-2.14 2.46z"/>
            </svg>
            <div class="item-name">{{ item.name }}</div>
            <div class="item-type">{{ item.type }}</div>
          </div>
        </div>

        <div class="categories-sidebar">
          <div class="scrollbar-track">
            <div class="scrollbar-thumb"></div>
          </div>
          
          <div class="categories-list">
            <button
              v-for="category in categories"
              :key="category"
              :class="['category-btn', { active: category === selectedCategory }]"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <button class="resize-handle">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 22H2V2h20v20zm-2-2V4H4v16h16z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.library-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.library-window {
  width: 90vw;
  max-width: 1400px;
  height: 85vh;
  max-height: 800px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  border-radius: 24px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
}

.library-header {
  padding: 32px 0;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.library-header h2 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
}

.library-content {
  flex: 1;
  display: flex;
  padding: 0 49px 50px;
  gap: 30px;
  overflow: hidden;
}

.items-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  overflow-y: auto;
  padding-right: 20px;
}

.items-grid::-webkit-scrollbar {
  width: 8px;
}

.items-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.items-grid::-webkit-scrollbar-thumb {
  background: rgba(var(--primary-rgb), 0.5);
  border-radius: 4px;
}

.items-grid::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--primary-rgb), 0.7);
}

.library-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.library-item:hover {
  transform: translateY(-8px);
  background: rgba(var(--primary-rgb), 0.08);
  border-color: rgba(var(--primary-rgb), 0.3);
  box-shadow: 0 12px 24px rgba(var(--primary-rgb), 0.2);
}

.item-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  filter: blur(0);
  border-radius: 16px;
  top: 0;
  left: 0;
  z-index: 0;
}

.item-icon {
  width: 56px;
  height: 56px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.library-item:hover .item-icon {
  color: var(--primary-color);
  transform: scale(1.1);
}

.item-name {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}

.item-type {
  font-size: 10px;
  font-weight: 600;
  color: #65FF86;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.categories-sidebar {
  width: 220px;
  background: rgba(15, 15, 15, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 16px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.scrollbar-track {
  position: absolute;
  left: 6px;
  top: 110px;
  width: 16px;
  height: 663px;
  background: #0B0B0B;
  border-radius: 100px;
}

.scrollbar-thumb {
  width: 100%;
  height: 82px;
  background: #0F2C00;
  border-radius: 100px;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 58px 20px;
}

.category-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-align: left;
  padding: 12px 16px;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 10px;
  text-transform: uppercase;
}

.category-btn:hover {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.08);
}

.category-btn.active {
  color: var(--primary-color);
  background: rgba(var(--primary-rgb), 0.15);
  border-left: 3px solid var(--primary-color);
}

.category-btn.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: var(--primary-color);
  border-radius: 2px;
  z-index: -1;
}

.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 65px;
  height: 65px;
  background: none;
  border: none;
  cursor: nwse-resize;
  color: white;
}

.resize-handle svg {
  width: 100%;
  height: 100%;
}
</style>
