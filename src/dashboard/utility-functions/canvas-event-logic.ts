import { getXYStr, getSelected } from "./get-selected";

// // for use in canvas event handlers ONLY
// // these functions are impure as sewer water
// // they exist to clean up code in event handlers

export function selectLocation (mapData: any, mouse: any, matrix: Array<Array<number>>) {
  mapData.selected.x = (mouse.position.x - mapData.x) / mapData.scale;
  mapData.selected.y = (mouse.position.y - mapData.y) / mapData.scale;
  
  switch(mapData.tool) {
    case "select":
      break;
    case "create":
      mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)] = {
        x: mapData.selected.x,
        y: mapData.selected.y,
        type: "type", // // "wall" or "creature", if left as "type" square will be description only; nothing will be drawn
        name: "name", // // give it a name, default name is set to equal type when type is set ("wall" or "creature")
        fill: "fill", // // hex code to be used by canvas rendering context (creatures only)
        stroke: "stroke", // // hex code to be used by canvas rendering context (creatures only)
        text: "text", // // brief narrative color to be displayed when player occupies or investigates square
      };
      matrix[mapData.selected.x][mapData.selected.y] = 1;
      console.log('created here:', matrix[mapData.selected.x][mapData.selected.y], mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)])
      break;
    case "delete":
      delete mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)];
      delete matrix[mapData.selected.x][mapData.selected.y];
      break;
  }
}

export function move (mapData: any, matrix: Array<Array<number>>, x: number, y: number, shiftKey: boolean) {
  const selected = getSelected(mapData.selected.x, mapData.selected.y, mapData);
  const nextSquare = getSelected(mapData.selected.x + x, mapData.selected.y + y, mapData);


  if (selected.name !== "" && selected.name !== "~" && nextSquare.name === "~" && shiftKey === false) {
    console.log(nextSquare.name);
    // // move piece
    mapData.entities[getXYStr(selected.x + x, selected.y + y)] = {
      x: mapData.selected.x + x,
      y: mapData.selected.y + y,
      name: selected.name,
    };
    matrix[selected.x + x][selected.y + y] = 1;
    delete matrix[selected.x][selected.y];
    delete mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)];
    mapData.selected.x = selected.x + x;
    mapData.selected.y = selected.y + y;
  } else if (nextSquare.name === "~" && shiftKey === false) {
    mapData.selected.x = selected.x + x;
    mapData.selected.y = selected.y + y;
  } else if (nextSquare.name !== "" && shiftKey === true) {
    mapData.selected.x = selected.x + x;
    mapData.selected.y = selected.y + y;
  }
}

export function keepMapInView (mapData: any, canvas: any) {
  if (
    mapData.x + mapData.width * mapData.scale <
    canvas.width - mapData.scale
  ) {
    mapData.x =
      canvas.width -
      mapData.scale -
      mapData.width * mapData.scale;
  }
  if (
    mapData.y + mapData.height * mapData.scale <
    canvas.height - mapData.scale
  ) {
    mapData.y =
      canvas.height -
      mapData.scale -
      mapData.height * mapData.scale;
  }
  if (mapData.x > mapData.scale) {
    mapData.x = mapData.scale;
  }
  if (mapData.y > mapData.scale) {
    mapData.y = mapData.scale;
  }
}

