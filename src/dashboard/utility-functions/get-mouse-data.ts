export const getMouseMovement = (e: MouseEvent) => {
  return {
    x: e.movementX,
    y: e.movementY,
  };
};

export const getMousePosition = (e: MouseEvent, hashX: any, hashY: any) => {
  // // Math.trunc unnecessary for mouse events
  // // I had this as a pointer event originally, I will leave it for now
  let positionX = hashX[Math.trunc(e.clientX)];
  let positionY = hashY[Math.trunc(e.clientY)];
  return {
    x: positionX,
    y: positionY,
  };
};