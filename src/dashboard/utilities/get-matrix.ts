// // initialized in Canvas useMemo
// // mutated in canvas-event-handlers.ts, selectLocation and moveWithArrow functions
// // referenced in canvas/draw.ts
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

    const xy = key.split(" ").map((value) => +value);

    mapMatrix[xy[0]][xy[1]] = mapData.entities[key];

  }

  // // fill every location
  // // for testing purposes
  // for (let i = 0; i < mapMatrix.length; i++) {
  //   for (let j = 0; j < mapMatrix[i].length; j++) {
  //     mapMatrix[i][j] = 1;
  //   }
  // }

  console.log('matrix generated', mapMatrix)
  return mapMatrix
  
}