# Implementation Plan: Fix Zoom Crash

- [x] 1. Create helper function for safe stage center calculation


  - Add `getSafeStageCenter()` function before the `defineExpose` block in EditorCanvas.vue
  - Implement null-safe access using optional chaining (`?.`) for `stageConfig.value.width` and `stageConfig.value.height`
  - Use nullish coalescing (`??`) to provide fallback values: `window.innerWidth - 280` for width and `window.innerHeight - 80` for height
  - Add warning log when fallback values are used: `logger.warn('Stage config unavailable, using fallback dimensions')`
  - Return object with `x` and `y` properties representing center coordinates
  - _Requirements: 1.1, 1.2, 3.1, 3.2, 3.4_



- [x] 2. Update zoomOut function to use safe center calculation




  - Replace direct `stageConfig.value.width / 2` and `stageConfig.value.height / 2` access with call to `getSafeStageCenter()`
  - Store result in `center` variable
  - Update `mousePointTo` calculation to use `center.x` and `center.y`
  - Update `stagePosition.value` calculation to use `center.x` and `center.y`


  - Preserve existing zoom scale calculation logic (`Math.max(oldScale / 1.2, CANVAS_CONFIG.MIN_ZOOM)`)
  - _Requirements: 1.1, 1.2, 1.3, 1.5, 3.1, 3.2_

- [x] 3. Update zoomIn function to use safe center calculation



  - Apply same pattern as zoomOut: replace direct property access with `getSafeStageCenter()` call
  - Ensure consistent implementation between zoomIn and zoomOut
  - Preserve existing zoom scale calculation logic (`Math.min(oldScale * 1.2, CANVAS_CONFIG.MAX_ZOOM)`)
  - _Requirements: 2.1, 2.2, 2.4, 3.1, 3.2_

- [x] 4. Test zoom functionality across different scenarios






  - Verify zoom out works without crashes at all zoom levels
  - Verify zoom in works without crashes at all zoom levels
  - Test zoom operations immediately after page load (before full initialization)
  - Test zoom during window resize events
  - Verify zoom behavior is smooth and maintains correct center point
  - Check console for warning logs when fallbacks are used
  - _Requirements: 1.4, 1.5, 2.3, 3.3, 3.5_
