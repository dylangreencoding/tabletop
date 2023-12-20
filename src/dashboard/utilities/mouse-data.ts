export const mouse = {
  isPressed: false,
  didMoveMap: false,
  movement: { x: 0, y: 0 },
  position: { x: NaN, y: NaN },
}

export const getMouseMovement = (e: MouseEvent) => {
  return {
    x: e.movementX,
    y: e.movementY,
  };
};

export const getMousePosition = (e: MouseEvent, hashX: any, hashY: any) => {
  // // Math.trunc unnecessary for mouse events
  // // I had this as a pointer event originally, I will leave it for now
  return {
    x: hashX[Math.trunc(e.clientX)],
    y: hashY[Math.trunc(e.clientY)],
  };
};