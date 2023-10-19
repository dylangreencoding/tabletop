export const getTouch = (e: TouchEvent) => {
  // // Math.trunc necessary for touch events, unlike mouse events
  let clientX = Math.trunc(e.targetTouches[0].clientX);
  let clientY = Math.trunc(e.targetTouches[0].clientY);
  return {
    x: clientX,
    y: clientY,
  };
};

export const getTouchPosition = (e: TouchEvent, hashX: any, hashY: any) => {
  // // Math.trunc necessary for touch events, unlike mouse events
  let positionX = hashX[Math.trunc(e.targetTouches[0].clientX)];
  let positionY = hashY[Math.trunc(e.targetTouches[0].clientY)];
  return {
    x: positionX,
    y: positionY,
  };
};