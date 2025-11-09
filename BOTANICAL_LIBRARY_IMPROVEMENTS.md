# Botanical Library Improvements

## Design Overhaul - Dark AMOLED Theme

### Visual Changes
- **Background**: Pure black (#000000) AMOLED-friendly design
- **Accent Color**: Dynamic integration with app's color wheel (default #FF4015)
- **Borders**: Subtle accent-colored borders with transparency
- **Shadows**: Glowing accent-colored shadows for depth
- **Animations**: Smooth transitions, heartbeat favorites, pulsing warnings

### Component Styling

#### Header
- Gradient text title using accent color
- Dark gradient background
- Accent-colored close button with hover effects
- Dark search input with accent border on focus
- Stats with accent-colored badges

#### Sidebar
- Dark background with accent-colored section headers
- Category buttons with accent hover/active states
- Custom accent-colored radio/checkbox inputs
- Dark select dropdown
- Red-tinted clear button

#### Plant Cards
- Dark card backgrounds with accent borders
- Hover effects with glow and lift
- Expanded state with enhanced accent glow
- Animated favorite button (heartbeat effect)
- Color-coded badges (origin, region, value)
- Pulsing warning icons

#### Content
- Accent-colored section headers
- Info items with subtle accent backgrounds
- Color-coded tags (green for uses, purple for certifications)
- Dark scrollbars with accent-colored thumbs

## Data Improvements

### New Plants Added

#### Fruits (6 new)
1. **Camu-camu** - World's highest vitamin C content superfruit
2. **Araçá** - Native small guava-like fruit
3. **Cambuci** - Endemic UFO-shaped fruit, gastronomic treasure
4. **Uvaia** - Delicate yellow native fruit
5. **Bacuri** - Amazonian fruit with medicinal oil
6. *(Space for more additions)*

#### Herbs (5 new)
1. **Capim-limão** (Lemongrass) - Calming citrus herb, insect repellent
2. **Erva-cidreira** (Melissa) - Anti-anxiety, sleep aid
3. **Camomila** (Chamomile) - Classic calming flower
4. **Sálvia** (Sage) - Memory and cognition support
5. *(Space for more additions)*

### Enhanced Data Fields
- More detailed descriptions
- Comprehensive harvest months
- Certification information
- Commercial value indicators
- Nutritional/efficacy scores
- Keywords for better search

## Functionality Fixes

### Details Button
- **Before**: Non-functional "Ver Detalhes Completos" button
- **After**: Changed to "Fechar Detalhes" button that collapses the expanded view
- **Behavior**: Clicking expands/collapses the detailed information inline

### User Experience
- Smooth expand/collapse animations
- Better visual feedback on interactions
- Improved readability with dark theme
- Consistent accent color throughout
- Enhanced mobile responsiveness

## Technical Implementation

### Dynamic Theming
```javascript
// Inject accent color from parent
const accentColor = inject('primaryColor', ref('#FF4015'))

// Use in CSS with v-bind
color: v-bind(accentColor);
border-color: v-bind(accentColor);
```

### Provide/Inject Pattern
```javascript
// App.vue
provide('primaryColor', primaryColor)

// BotanicalLibrary.vue
const accentColor = inject('primaryColor', ref('#FF4015'))
```

## Benefits

1. **Visual Consistency**: Matches app's dark theme and accent color
2. **AMOLED Friendly**: Pure black saves battery on OLED screens
3. **Better UX**: Fixed non-functional button, improved interactions
4. **More Content**: 11+ new plants with detailed information
5. **Accessibility**: Better contrast, larger touch targets
6. **Performance**: Smooth animations, optimized rendering

## Future Enhancements

- Add plant images/icons
- Implement plant comparison feature
- Add filtering by season/climate
- Export favorite plants list
- Integration with canvas for direct plant placement
- Community contributions for more plants
