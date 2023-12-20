// import { getXYStr } from "./get-selected";

export function getMatrix (mapData: any) {

  // // generate matrix
  const mapMatrix: Array<Array<any>> = [];
  // // across x-axis, array of arrays
  for (let i = 0; i <= mapData.width; i++) {
    // // down y-axis, sparse arrays
    mapMatrix.push(new Array(mapData.height + 1));
  }

  // // add entities
  for (const key of Object.keys(mapData.entities)) {
    if (key === "template") continue;
    mapMatrix[mapData.entities[key].x][mapData.entities[key].y] = 1;
  }

  // fill every location
  // for testing purposes
  // for (let i = 0; i < mapMatrix.length; i++) {
  //   for (let j = 0; j < mapMatrix[i].length; j++) {
  //     mapMatrix[i][j] = 1;
  //     mapData.entities[getXYStr(i, j)] = {
  //       x: i,
  //       y: j,
  //       type: "zombie",
  //     }
  //   }
  // }

  console.log('matrix generated', mapMatrix)
  return mapMatrix
  
}