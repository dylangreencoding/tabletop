export const touch = {
  didMoveMap: false,
  lastTouch: { x: 0, y: 0 },
  thisTouch: { x: 0, y: 0 },
  position: { x: 0, y: 0 },
}

export const getTouch = (e: TouchEvent) => {
  // // Math.trunc necessary for touch events, unlike mouse events
  return {
    x: Math.trunc(e.targetTouches[0].clientX),
    y: Math.trunc(e.targetTouches[0].clientY),
  };
};

export const getTouchPosition = (e: TouchEvent, hashX: any, hashY: any) => {
  // // Math.trunc necessary for touch events, unlike mouse events
  return {
    x: hashX[Math.trunc(e.targetTouches[0].clientX)],
    y: hashY[Math.trunc(e.targetTouches[0].clientY)],
  };
};