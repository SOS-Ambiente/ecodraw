# 🌿 EcoDraw - Agroecological Plant Planner

A modern Vue 3 drawing application with Konva canvas integration, designed for botanical illustration and agroecological garden planning.

## ✨ Features

### 🎨 Drawing Tools
- **Smart Brush System**: 
  - Adjustable thickness, hardness, and opacity (1-100%)
  - Hover-activated controls for clean workspace
  - Real-time visual feedback with gradient sliders
  - Smooth anti-aliased rendering
- **Eraser Tool**: Precision erasing with destination-out compositing
- **Shape Tools**: Square, circle, and triangle with live preview
- **Text & Image**: Insert annotations and reference images

### 🎯 Modern UI/UX
- **Grid Canvas**: Professional grid overlay (40px) for precise planning
- **Centered Toolbar**: Vertically aligned tools with active state indicators
- **Hover-Based Controls**: Brush settings appear only when needed
- **Smooth Animations**: Slide-in transitions and pulse effects
- **Glassmorphism Design**: Modern backdrop blur and transparency effects

### 🌱 Botanical Library
- Browse 24+ botanical elements
- 7 organized categories (Vegetables, Leaves, Fruits, Roots, Trees, Flowers, Herbs)
- Responsive grid layout with hover effects
- Quick search and filtering

### ⚡ Advanced Features
- **History Management**: Full undo/redo with state preservation
- **Zoom Controls**: 0.1x - 5x zoom with pan navigation
- **Touch Support**: Full mobile and tablet compatibility
- **Performance Optimized**: Efficient rendering with layer separation
- **Responsive Design**: Adapts to any screen size

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Konva.js** for canvas manipulation via `vue-konva`
- **Vite** for fast development and building

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Editor/
│   │   ├── EditorCanvas.vue    # Main Konva canvas
│   │   ├── Toolbar.vue         # Top toolbar with tools
│   │   ├── Sidebar.vue         # Left navigation sidebar
│   │   └── BrushControls.vue   # Brush settings panel
│   ├── ColorPicker/
│   │   └── ColorPickerPalette.vue
│   └── Library/
│       └── BotanicalLibrary.vue
├── composables/
│   ├── useHistory.js           # Undo/redo logic
│   ├── useCanvas.js            # Canvas zoom/pan management
│   └── useBrush.js             # Brush state and configuration
├── App.vue
└── main.js
```

## 🎨 Design System

Modern dark theme with professional aesthetics:
- **Primary Background**: `#0a0a0a` with gradient overlays
- **Accent Colors**: 
  - Primary: `#FF4015` (Vibrant Orange-Red)
  - Success: `#65FF86` (Eco Green)
- **Typography**: Inter, SF Pro with letter-spacing for clarity
- **Effects**: 
  - Glassmorphism with `backdrop-filter: blur(20px)`
  - Smooth transitions and hover states
  - Custom scrollbars with accent colors
  - Gradient buttons and sliders
- **Spacing**: Consistent 8px grid system
- **Borders**: Subtle `rgba(255, 255, 255, 0.05)` for depth

## 🚀 Key Improvements

1. **Grid Background**: Professional 40px grid on Konva canvas for precise drawing
2. **Toolbar Redesign**: Centered, compact toolbar with animated underlines
3. **Smart Controls**: Brush settings only appear on hover to maximize canvas space
4. **Modern Sliders**: Gradient-styled range inputs with custom thumbs
5. **Enhanced Sidebar**: Glassmorphic cards with hover animations
6. **Responsive Library**: Adaptive grid layout with smooth transitions
7. **Performance**: Separated grid and drawing layers for optimal rendering

## License

MIT
