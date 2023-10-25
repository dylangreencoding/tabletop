import { getXYStr, getSelected } from "./get-selected";

// // for use in canvas event handlers ONLY
// // these functions are impure as sewer water
// // they exist to clean up code in event handlers

export function selectLocation (mapData: any, mouse: any, matrix: Array<Array<number>>) {
  
  switch(mapData.tool) {
    case "select":
      mapData.selected.x = (mouse.position.x - mapData.x) / mapData.scale;
      mapData.selected.y = (mouse.position.y - mapData.y) / mapData.scale;
      break;
    case "create":
      mapData.selected.x = (mouse.position.x - mapData.x) / mapData.scale;
      mapData.selected.y = (mouse.position.y - mapData.y) / mapData.scale;
      // // TODO: replace JSON.parse(JSON.stringify()) with cloning method (lodash?)
      const entity = JSON.parse(JSON.stringify(mapData.entities.template))
      entity.x = mapData.selected.x;
      entity.y = mapData.selected.y;
      mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)] = entity;
      matrix[mapData.selected.x][mapData.selected.y] = 1;
      console.log('created here:', matrix[mapData.selected.x][mapData.selected.y], mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)])
      break;
    case "delete":
      mapData.selected.x = (mouse.position.x - mapData.x) / mapData.scale;
      mapData.selected.y = (mouse.position.y - mapData.y) / mapData.scale;
      delete mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)];
      delete matrix[mapData.selected.x][mapData.selected.y];
      break;
  }
}

export function moveWithArrow (mapData: any, matrix: Array<Array<number>>, x: number, y: number, shiftKey: boolean) {
  const selected = getSelected(mapData.selected.x, mapData.selected.y, mapData);
  const nextSquare = getSelected(mapData.selected.x + x, mapData.selected.y + y, mapData);


  if (selected.type !== "" && selected.type !== "~" && nextSquare.type === "~" && shiftKey === false) {
    
    // // move piece
    mapData.entities[getXYStr(selected.x + x, selected.y + y)] = JSON.parse(JSON.stringify(selected));
    mapData.entities[getXYStr(selected.x + x, selected.y + y)].x += x;
    mapData.entities[getXYStr(selected.x + x, selected.y + y)].y += y;
    matrix[selected.x + x][selected.y + y] = 1;
    delete matrix[selected.x][selected.y];
    delete mapData.entities[getXYStr(mapData.selected.x, mapData.selected.y)];
    mapData.selected.x = selected.x + x;
    mapData.selected.y = selected.y + y;
  } else if (nextSquare.type === "~" && shiftKey === false) {
    mapData.selected.x = selected.x + x;
    mapData.selected.y = selected.y + y;
  } else if (nextSquare.type !== "" && shiftKey === true) {
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

