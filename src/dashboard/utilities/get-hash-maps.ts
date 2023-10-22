export const getHashX = (mapData: any, canvasWidth: number) => {
  const hashX: any = {};

  const maxHash = mapData.x + mapData.width*mapData.scale < canvasWidth ? mapData.scale * mapData.width + mapData.x + Math.trunc(mapData.scale/2) : canvasWidth;

  let currentSquare = mapData.x;
  let hashCounter = 0;
  const increment = () => {
    if (hashCounter === mapData.scale) {
      currentSquare += mapData.scale;
      hashCounter = 0;
    }
    hashCounter += 1;
  }

  // // count number of iterations in loop
  // // should equal canvas width
  let iterCounter = 0;

  for (
    let x = mapData.x - Math.trunc(mapData.scale/2);
    x < maxHash;
    x++
  ) {

    iterCounter += 1;

    if (x < 0) {
      x += mapData.scale;
      currentSquare += mapData.scale;
    }

    increment()
    if (x > 0) hashX[x] = currentSquare;
  }
  console.log("hashX iterCounter", iterCounter);
  return hashX;
};

export const getHashY = (mapData: any, canvasHeight: number) => {
  const hashY: any = {};

  const maxHash = mapData.y + mapData.height*mapData.scale < canvasHeight ? mapData.scale * mapData.height + mapData.y + Math.trunc(mapData.scale/2) : canvasHeight;

  let currentSquare = mapData.y;
  let hashCounter = 0;
  const increment = () => {
    if (hashCounter === mapData.scale) {
      currentSquare += mapData.scale;
      hashCounter = 0;
    }
    hashCounter += 1;
  }

  // // count number of iterations in loop
  // // should equal canvas width
  let iterCounter = 0;

  for (
    let y = mapData.y - Math.trunc(mapData.scale/2);
    y < maxHash;
    y++
  ) {
    iterCounter += 1;

    if (y < 0) {
      y += mapData.scale;
      currentSquare += mapData.scale;
    }

    increment();
    hashY[y] = currentSquare;
  }
  console.log("hashY iterCounter", iterCounter);
  return hashY;
};