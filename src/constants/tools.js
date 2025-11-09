// Tool constants
export const TOOLS = {
  BRUSH: 'brush',
  ERASER: 'eraser',
  SQUARE: 'square',
  CIRCLE: 'circle',
  TRIANGLE: 'triangle',
  TEXT: 'text',
  IMAGE: 'image',
  MOVE: 'move',
  ZOOM_IN: 'zoom-in',
  ZOOM_OUT: 'zoom-out',
  LIBRARY: 'library'
}

export const TOOL_OPTIONS = {
  BRUSH: {
    PENCIL: 'pencil',
    MARKER: 'marker',
    SPRAY: 'spray',
    CALLIGRAPHY: 'calligraphy'
  },
  ERASER: {
    SOFT: 'soft',
    HARD: 'hard'
  },
  SQUARE: {
    RECT: 'rect',
    FILLED: 'filled',
    ROUNDED: 'rounded'
  },
  CIRCLE: {
    CIRCLE: 'circle',
    FILLED: 'filled',
    ELLIPSE: 'ellipse'
  },
  TRIANGLE: {
    TRIANGLE: 'triangle',
    FILLED: 'filled',
    RIGHT: 'right'
  },
  TEXT: {
    NORMAL: 'normal',
    HEADING: 'heading',
    LABEL: 'label'
  },
  IMAGE: {
    UPLOAD: 'upload',
    PLANT: 'plant'
  }
}

// Canvas configuration constants
export const CANVAS_CONFIG = {
  METER_TO_PIXELS: 50,
  GRID_SIZE_METERS: 1,
  MAX_ZOOM: 10,
  MIN_ZOOM: 0.1,
  ZOOM_FACTOR: 1.08,
  MAX_HISTORY_STATES: 50,
  MAX_GRID_LINES: 1000,
  STAGE_PADDING: 10000
}

// Grid scale constants
export const GRID_SCALES = {
  MICRO: 0.25,
  SMALL: 0.5,
  STANDARD: 1,
  MEDIUM: 2,
  LARGE: 4,
  MACRO: 8
}

// Plant spacing presets (in meters)
export const PLANT_SPACING = {
  MICROGREENS: 0.1,
  LETTUCE: 0.25,
  HERBS: 0.3,
  CARROTS: 0.15,
  TOMATOES: 0.6,
  SQUASH: 1.2,
  CORN: 0.45,
  TREES: 4
}
