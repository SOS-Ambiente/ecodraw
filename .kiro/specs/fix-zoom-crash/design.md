# Design Document: Fix Zoom Crash

## Overview

This design addresses a critical crash in the zoom functionality caused by unsafe property access on the `stageConfig` object. The crash occurs when `stageConfig.value.width` or `stageConfig.value.height` are accessed before initialization or during race conditions. The solution implements defensive programming with null-safe property access and fallback values.

## Architecture

### Current Implementation Issues

The current `zoomIn` and `zoomOut` functions directly access `stageConfig.value.width` and `stageConfig.value.height` without validation:

```javascript
const centerX = stageConfig.value.width / 2
const centerY = stageConfig.value.height / 2
```

This causes crashes when:
- `stageConfig.value` is undefined
- `stageConfig.value.width` or `stageConfig.value.height` are undefined
- Race conditions occur during window resize events

### Proposed Solution

Implement a defensive approach with:
1. Null-safe property access using optional chaining
2. Fallback default values when stage config is unavailable
3. Validation before performing zoom calculations
4. Consistent error handling across all zoom operations

## Components and Interfaces

### Modified Functions

#### 1. `zoomIn()` Function
- Add null-safe access to `stageConfig.value`
- Provide fallback dimensions (default to window dimensions minus UI chrome)
- Maintain existing zoom behavior when values are valid

#### 2. `zoomOut()` Function
- Apply same null-safe pattern as `zoomIn()`
- Ensure consistent behavior with zoom in
- Preserve zoom center point calculation logic

#### 3. Helper Function: `getSafeStageCenter()`
- New utility function to safely retrieve stage center coordinates
- Returns fallback values when stage config is unavailable
- Centralizes the safety logic for reuse

### Data Models

#### Stage Configuration Object
```javascript
{
  width: number,   // Stage viewport width in pixels
  height: number   // Stage viewport height in pixels
}
```

#### Fallback Values
```javascript
const DEFAULT_STAGE_WIDTH = window.innerWidth - 280  // Account for sidebar
const DEFAULT_STAGE_HEIGHT = window.innerHeight - 80  // Account for toolbar
```

## Error Handling

### Validation Strategy

1. **Pre-calculation Validation**: Check if `stageConfig.value` exists before accessing properties
2. **Fallback Mechanism**: Use window dimensions as fallback when stage config is unavailable
3. **Logging**: Add warning logs when fallback values are used to aid debugging
4. **Graceful Degradation**: Continue zoom operation with safe defaults rather than crashing

### Error Scenarios

| Scenario | Current Behavior | New Behavior |
|----------|-----------------|--------------|
| `stageConfig.value` is undefined | Crash | Use window dimensions as fallback |
| `stageConfig.value.width` is undefined | Crash | Use `window.innerWidth - 280` |
| `stageConfig.value.height` is undefined | Crash | Use `window.innerHeight - 80` |
| Valid stage config | Works correctly | Works correctly (no change) |

## Implementation Details

### Code Changes

#### Before (Current Implementation)
```javascript
zoomOut: () => {
  const oldScale = stageScale.value
  const newScale = Math.max(oldScale / 1.2, CANVAS_CONFIG.MIN_ZOOM)
  stageScale.value = newScale
  
  const centerX = stageConfig.value.width / 2
  const centerY = stageConfig.value.height / 2
  const mousePointTo = {
    x: (centerX - stagePosition.value.x) / oldScale,
    y: (centerY - stagePosition.value.y) / oldScale
  }
  stagePosition.value = {
    x: centerX - mousePointTo.x * newScale,
    y: centerY - mousePointTo.y * newScale
  }
}
```

#### After (Proposed Implementation)
```javascript
// Helper function for safe stage center calculation
const getSafeStageCenter = () => {
  const width = stageConfig.value?.width ?? (window.innerWidth - 280)
  const height = stageConfig.value?.height ?? (window.innerHeight - 80)
  
  if (!stageConfig.value?.width || !stageConfig.value?.height) {
    logger.warn('Stage config unavailable, using fallback dimensions')
  }
  
  return {
    x: width / 2,
    y: height / 2
  }
}

zoomOut: () => {
  const oldScale = stageScale.value
  const newScale = Math.max(oldScale / 1.2, CANVAS_CONFIG.MIN_ZOOM)
  stageScale.value = newScale
  
  const center = getSafeStageCenter()
  const mousePointTo = {
    x: (center.x - stagePosition.value.x) / oldScale,
    y: (center.y - stagePosition.value.y) / oldScale
  }
  stagePosition.value = {
    x: center.x - mousePointTo.x * newScale,
    y: center.y - mousePointTo.y * newScale
  }
}
```

### Testing Strategy

#### Unit Testing Approach
- Test zoom functions with undefined `stageConfig`
- Test zoom functions with partially defined `stageConfig`
- Test zoom functions with valid `stageConfig`
- Verify fallback values are used correctly
- Verify zoom calculations remain accurate

#### Manual Testing Scenarios
1. **Normal Operation**: Zoom in/out with fully initialized canvas
2. **Early Zoom**: Attempt zoom before canvas fully loads
3. **Resize During Zoom**: Trigger zoom during window resize
4. **Rapid Zoom**: Quickly alternate between zoom in and zoom out
5. **Edge Cases**: Test at min/max zoom levels

#### Success Criteria
- No crashes occur during any zoom operation
- Zoom behavior remains smooth and predictable
- Fallback values provide reasonable zoom experience
- Console warnings appear when fallbacks are used (for debugging)

## Design Decisions and Rationales

### Decision 1: Use Optional Chaining and Nullish Coalescing
**Rationale**: Modern JavaScript operators provide clean, readable null-safe access without verbose if-checks. This approach is more maintainable and less error-prone.

### Decision 2: Window Dimensions as Fallback
**Rationale**: Window dimensions minus UI chrome (280px sidebar, 80px toolbar) provide reasonable defaults that match the expected stage size. This ensures zoom operations work even during initialization.

### Decision 3: Centralized Helper Function
**Rationale**: Creating `getSafeStageCenter()` eliminates code duplication between `zoomIn()` and `zoomOut()`, making the codebase more maintainable and ensuring consistent behavior.

### Decision 4: Warning Logs Instead of Errors
**Rationale**: Using fallback values is a valid recovery strategy, not an error condition. Warnings inform developers of the fallback usage without alarming users or breaking functionality.

### Decision 5: No Changes to Zoom Calculation Logic
**Rationale**: The existing zoom calculation logic works correctly when values are valid. We only need to ensure safe value retrieval, not change the mathematical approach.

## Performance Considerations

- Optional chaining and nullish coalescing have negligible performance impact
- Helper function call overhead is minimal (single function call per zoom operation)
- No additional DOM queries or heavy computations introduced
- Fallback calculation (window dimensions) is fast and cached by browser

## Browser Compatibility

- Optional chaining (`?.`) supported in all modern browsers (Chrome 80+, Firefox 74+, Safari 13.1+)
- Nullish coalescing (`??`) supported in all modern browsers (Chrome 80+, Firefox 72+, Safari 13.1+)
- Fallback to window dimensions is universally supported

## Future Enhancements

1. **Reactive Fallback Updates**: Update fallback values when window resizes
2. **Zoom Center Preference**: Allow users to configure zoom center point (center vs cursor)
3. **Zoom Animation**: Add smooth transitions between zoom levels
4. **Zoom Limits Per Tool**: Different zoom limits for different tools
