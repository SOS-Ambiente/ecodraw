# Botanical Library Card Improvements

## Overview
Redesigned plant cards to be compact, independent, and use each item's specific color as the accent.

## Key Improvements

### 1. Individual Item Colors
- Each card now uses its own `item.color` property as the accent
- Implemented using CSS custom properties (`--item-color`)
- Dynamic color application to borders, backgrounds, shadows, and text
- Color-mix() function for transparent variations

### 2. Compact Card Design
- Reduced padding and spacing throughout
- Smaller font sizes for better density
- `height: fit-content` ensures cards only take needed space
- No empty expanded cards - content only shows when expanded

### 3. Independent Card Styling
Each card is self-contained with:
- Own color scheme based on plant type
- Independent hover effects
- Individual shadow and glow effects
- Smooth expand/collapse animations

### 4. Visual Enhancements

#### Card Header
- Reduced padding: `12px 14px` (was `16px`)
- Smaller icon: `24px` (was `28px`)
- Compact title: `15px` (was `16px`)
- Gradient background using item color

#### Quick Info Badges
- Smaller badges: `10px` font, `3px 7px` padding
- Item-colored value badge
- Maintained origin (green) and region (blue) colors

#### Expanded Content
- Smooth slide-down animation
- Compact info grid with smaller items
- Item-colored section headers
- Reduced gap between sections: `12px` (was `16px`)

#### Tags & Buttons
- Smaller tags: `10px` font
- Compact button: `8px 14px` padding, `12px` font
- Item-colored close button
- Hover effects with lift animation

### 5. Color System

```css
/* Each card gets its color */
:style="{ '--item-color': item.color }"

/* Used throughout the card */
border: 1px solid var(--item-color);
background: color-mix(in srgb, var(--item-color) 15%, transparent);
box-shadow: 0 4px 20px color-mix(in srgb, var(--item-color) 25%, transparent);
```

### 6. Animation Improvements
- Smooth expand/collapse with `expandDown` keyframe
- Heartbeat animation for favorites
- Pulse animation for warnings
- Hover lift effects on interactive elements

## Technical Implementation

### CSS Custom Properties
```vue
<div
  v-for="item in paginatedItems"
  :key="item.id"
  :style="{ '--item-color': item.color }"
  class="plant-card"
>
```

### Color Mixing
```css
/* 15% opacity */
background: color-mix(in srgb, var(--item-color) 15%, transparent);

/* 30% opacity for borders */
border: 1px solid color-mix(in srgb, var(--item-color) 30%, transparent);
```

## Color Examples by Plant Type

- **Açaí**: `#6532FF` (Purple)
- **Cupuaçu**: `#8B4513` (Brown)
- **Jabuticaba**: `#4B0082` (Indigo)
- **Caju**: `#FF6347` (Tomato Red)
- **Maracujá**: `#9370DB` (Medium Purple)
- **Pitanga**: `#DC143C` (Crimson)
- **Graviola**: `#32CD32` (Lime Green)
- **Acerola**: `#FF4500` (Orange Red)
- **Guaraná**: `#8B0000` (Dark Red)
- **Pequi**: `#FF8C00` (Dark Orange)

## Benefits

1. **Visual Distinction**: Each plant type has its unique color identity
2. **Compact Layout**: More cards visible without scrolling
3. **Better Performance**: No unnecessary empty expanded states
4. **Improved UX**: Clear visual feedback with item-specific colors
5. **Consistent Design**: All elements use the same color system
6. **Accessibility**: Maintained contrast ratios with dark theme

## Responsive Behavior

- Cards maintain compact size on all screen sizes
- Grid adapts: 350px → 300px → 1 column
- Sidebar collapses to grid on mobile
- All animations remain smooth

## Future Enhancements

- Add drag-and-drop functionality for cards
- Implement card reordering
- Add color picker for custom plant colors
- Create color themes (warm, cool, monochrome)
- Add card export with color preservation
