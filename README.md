# 🌿 EcoDraw - Agroecological Plant Planner

A modern, high-performance Vue 3 drawing application with Konva canvas integration, designed for botanical illustration and agroecological garden planning.

## ✨ Features

### 🎨 Drawing Tools
- **Smart Brush System**: 
  - Adjustable thickness, hardness, and opacity (1-100%)
  - Hover-activated controls for clean workspace
  - Real-time visual feedback with gradient sliders
  - Smooth anti-aliased rendering
  - Multiple brush types (Pencil, Marker, Spray, Calligraphy)
- **Eraser Tool**: Precision erasing with destination-out compositing
- **Shape Tools**: Square, circle, and triangle with live preview and fill options
- **Text & Image**: Insert annotations and reference images with drag support

### 🎯 Modern UI/UX
- **Grid Canvas**: Professional 2m² proportional grid (1m = 50px) for precise planning
- **Centered Toolbar**: Vertically aligned tools with active state indicators
- **Hover-Based Controls**: Brush settings appear only when needed
- **Smooth Animations**: Slide-in transitions and pulse effects
- **Glassmorphism Design**: Modern backdrop blur and transparency effects
- **Color Wheel**: Advanced HSL color picker with real-time preview
- **Theme System**: Dynamic color theming with CSS variables

### 🌱 Botanical Library
- Browse 32+ botanical elements
- 8 organized categories (All, Vegetables, Leaves, Fruits, Roots, Trees, Flowers, Herbs)
- Responsive grid layout with hover effects
- Quick search and filtering
- Drag-and-drop support

### ⚡ Advanced Features
- **History Management**: Full undo/redo with state preservation (50 states)
- **Zoom Controls**: 0.1x - 5x zoom with mouse wheel and pan navigation
- **Touch Support**: Full mobile and tablet compatibility
- **Performance Optimized**: 
  - Efficient rendering with layer separation
  - FPS monitoring and performance warnings
  - Memory usage tracking
  - Code splitting and lazy loading
- **Responsive Design**: Adapts to any screen size
- **PWA Support**: Install as desktop/mobile app with offline capability
- **Auto-Save**: Preferences saved to localStorage
- **Keyboard Shortcuts**: Full keyboard navigation support
- **Error Boundary**: Graceful error handling with recovery options
- **Accessibility**: 
  - High contrast mode
  - Reduced motion support
  - Large text option
  - Screen reader optimization
  - ARIA labels and semantic HTML

## 🚀 Tech Stack

- **Vue 3.5+** with Composition API (`<script setup>`)
- **Konva.js 9.3+** for canvas manipulation via `vue-konva`
- **Vite 5.4+** for fast development and optimized building
- **PWA** with service worker and offline support

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Or with npm
npm install

# Or with yarn
yarn install
```

## 🛠️ Development

```bash
# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎮 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `B` | Select Brush tool |
| `E` | Select Eraser tool |
| `T` | Select Text tool |
| `G` | Toggle Grid |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` | Redo |
| `Ctrl/Cmd + S` | Save |
| `Ctrl/Cmd + +` | Zoom In |
| `Ctrl/Cmd + -` | Zoom Out |
| `Ctrl/Cmd + 0` | Reset Zoom |
| `Ctrl/Cmd + Shift + A` | Accessibility Menu |
| `?` | Show Shortcuts |

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

## 🚀 Version 2.0 Improvements

### Performance & Optimization
1. **FPS Monitoring**: Real-time performance tracking with visual warnings
2. **Memory Management**: Heap size monitoring and optimization
3. **Code Splitting**: Vendor chunks for Vue and Konva
4. **Lazy Loading**: Components loaded on demand
5. **Build Optimization**: Terser minification with console removal

### User Experience
6. **Error Boundary**: Graceful error handling with recovery UI
7. **Auto-Save**: Preferences persist across sessions
8. **Keyboard Composable**: Centralized keyboard shortcut management
9. **LocalStorage Hook**: Reactive localStorage with auto-sync
10. **PWA Support**: Install as app with offline capability

### Accessibility
11. **High Contrast Mode**: Enhanced visibility for low vision users
12. **Reduced Motion**: Respects user motion preferences
13. **Large Text Mode**: Scalable text throughout the app
14. **Screen Reader Support**: ARIA labels and semantic HTML
15. **Focus Management**: Clear focus indicators

### Technical
16. **Modern Grid System**: 2m² proportional grid (1m = 50px)
17. **Composable Architecture**: Reusable logic with Vue composables
18. **Theme System**: Dynamic CSS variables for theming
19. **Type Safety**: Better prop validation and error handling
20. **Production Ready**: Optimized build with PWA manifest

## License

MIT
