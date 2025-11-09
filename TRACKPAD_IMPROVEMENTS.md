# Trackpad Gesture Improvements

## What's New

Enhanced two-finger trackpad gestures for smoother and more intuitive canvas navigation.

## Key Improvements

### 1. **Smooth Two-Finger Panning**
- Added velocity tracking for more responsive panning
- Increased acceleration (1.2x) for faster movement
- Better distinction between zoom and pan gestures

### 2. **Natural Trackpad Scrolling**
- Two-finger scroll now pans the canvas naturally
- Ctrl/Cmd + scroll for pinch-to-zoom
- Automatic detection of trackpad vs mouse wheel

### 3. **Intelligent Gesture Detection**
- Distinguishes between zoom and pan based on finger movement
- Smooth zoom with damping to prevent jarring changes
- Better handling of mixed gestures

### 4. **Performance Optimizations**
- Reduced throttle delay from 100ms to 16ms (~60fps)
- Time-based velocity calculations for smoother motion
- Optimized event handling

## How to Use

### Trackpad Gestures:
- **Two-finger scroll**: Pan around the canvas
- **Ctrl/Cmd + scroll**: Zoom in/out
- **Pinch gesture**: Zoom in/out (on touch devices)
- **Two-finger drag**: Pan and zoom simultaneously

### Mouse:
- **Middle mouse button**: Pan mode
- **Scroll wheel**: Zoom in/out
- **Move tool**: Click and drag to pan

## Technical Details

- Added velocity tracking for smoother panning
- Improved gesture detection algorithm
- Better separation of zoom vs pan intentions
- Enhanced visual feedback with updated indicator text
