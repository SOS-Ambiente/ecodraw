# ECODRAW Setup Guide

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173` (or the URL shown in terminal)

## Troubleshooting

### Empty Page / Module Errors

If you see an empty page or module errors:

1. **Clear node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Clear Vite cache:**
```bash
rm -rf node_modules/.vite
npm run dev
```

3. **Check browser console** for specific errors

### Vue Konva Issues

If you get errors about vue-konva exports:

1. Make sure you're using the correct version:
```bash
npm install vue-konva@3.0.2 konva@9.3.0 --save
```

2. Restart the dev server after installation

## Browser Requirements

- Modern browser with ES6+ support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Development Notes

- The app uses Vue 3 Composition API with `<script setup>`
- Konva components are accessed via `v-stage`, `v-layer`, `v-line`, etc.
- Hot Module Replacement (HMR) is enabled for fast development
