export function getXYArray (xyString: string) {
  return xyString.split(" ").map((value) => +value)
}

export function getXYStr (x: number, y: number) {
  return x.toString().concat(" ", y.toString());
}

export function getSelected (mapData: any) {
  let selected;

  // // if a square is selected
  if ((mapData.selected.x >= 0 && mapData.selected.x <= mapData.width) && (mapData.selected.y >= 0 && mapData.selected.y <= mapData.height)) {
    selected = mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)];

    // // if selected square contains an entity
    if (selected) {
      return selected;
    } else {
      // // if selected square is empty
      return {
        type: "empty square",
        detail: ""
      }
    }
  } else {
    // // if no square is selected
    return {
      type: "",
      detail: ""
    }
  }
}