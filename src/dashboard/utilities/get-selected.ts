export function getXYStr (x: number, y: number) {
  return x.toString().concat(" ", y.toString());
}

export function getSelected (selectedX: number, selectedY: number, mapData: any) {
  let selected;

  // // if a square is selected
  if ((selectedX >= 0 && selectedX <= mapData.width) && (selectedY >= 0 && selectedY <= mapData.height)) {
    selected = mapData.entities[getXYStr(selectedX, selectedY)];

    // // if selected square contains an entity
    if (selected) {
      return selected;
    } else {
      // // if selected square is empty
      return {
        x: selectedX,
        y: selectedY,
        type: "~",
      }
    }
  } else {
    // // if no square is selected
    return {
      x: 'x',
      y: 'y',
      type: "",
    }
  }
}