export const getMouseMovement = (e: PointerEvent) => {
  return {
    x: e.movementX,
    y: e.movementY,
  };
};

export const getMousePosition = (e: PointerEvent, hashX: any, hashY: any) => {
  // // Math.trunc necessary for pointer events, unlike mouse events
  let positionX = hashX[Math.trunc(e.clientX)];
  let positionY = hashY[Math.trunc(e.clientY)];
  return {
    x: positionX,
    y: positionY,
  };
};