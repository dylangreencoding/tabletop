import { getSelected, getXYStr } from "../utilities/get-selected";

export function draw(ctx: any, canvasWidth: number, canvasHeight: number, mapData: any, mouseData: any, matrix: any) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.strokeStyle = "#252525";
  ctx.lineWidth = 1;

  ///////////////////////////////////////////
  // // draw grid //////////////////////////
  // // optimized to only draw the part of the grid that is within the canvas
  const verticalLineStart = mapData.y >= 0 ? mapData.y : mapData.scale ;
  const verticalLineEnd = mapData.y + (mapData.height * mapData.scale) <= canvasHeight ? (mapData.height*mapData.scale + mapData.y + mapData.scale) - mapData.scale : canvasHeight - mapData.scale ;

  const horizontalLineStart = mapData.x >= 0 ? mapData.x : mapData.scale ;
  const horizontalLineEnd = mapData.x + (mapData.width * mapData.scale) <= canvasWidth ? (mapData.width*mapData.scale + mapData.x + mapData.scale) - mapData.scale : canvasWidth - mapData.scale ;

  const firstVerticalLine = mapData.x >= 0 ? mapData.x : mapData.x % mapData.scale + mapData.scale*2;
  const lastVerticalLine = mapData.x + mapData.width*mapData.scale < canvasWidth ? mapData.width*mapData.scale + mapData.x : canvasWidth - mapData.scale ;

  const firstHorizontalLine = mapData.y >= 0 ? mapData.y : mapData.y % mapData.scale + mapData.scale*2;
  const lastHorizontalLine = mapData.y + mapData.height*mapData.scale < canvasHeight ? mapData.height*mapData.scale + mapData.y : canvasHeight - mapData.scale;

  for (let x = firstVerticalLine; x <= lastVerticalLine; x += mapData.scale) {
    ctx.beginPath();
    ctx.arc(x, verticalLineStart, mapData.scale*0.1, 0, Math.PI*2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, verticalLineEnd, mapData.scale*0.1, 0, Math.PI*2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, verticalLineStart);
    ctx.lineTo(x, verticalLineEnd);
    ctx.moveTo(x, verticalLineStart);
    ctx.closePath();
    ctx.stroke();
  }

  for (let y = firstHorizontalLine; y <= lastHorizontalLine; y += mapData.scale) {
    ctx.beginPath();
    ctx.arc(horizontalLineStart, y, mapData.scale*0.1, 0, Math.PI*2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(horizontalLineEnd, y, mapData.scale*0.1, 0, Math.PI*2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(horizontalLineStart, y);
    ctx.lineTo(horizontalLineEnd, y);
    ctx.moveTo(horizontalLineStart, y);
    ctx.closePath();
    ctx.stroke();
  }

  /////////////////////////////////////////////
  ////////////////////////////////////////////
  // // draw entities
  // // only draws entities within viewport

  const matrixRowStart = mapData.x <= 0 ? Math.trunc((-1*mapData.x) / mapData.scale) + 1 : 0;
  const matrixRowEnd =  mapData.width*mapData.scale > canvasWidth ? (matrixRowStart + Math.trunc(canvasWidth/mapData.scale)) : matrixRowStart + mapData.width;

  const matrixColumnStart = mapData.y <= 0 ? Math.trunc((-1*mapData.y) / mapData.scale) + 1 : 0;
  const matrixColumnEnd = mapData.height*mapData.scale > canvasHeight ? (matrixColumnStart + Math.trunc(canvasHeight/mapData.scale)) : matrixColumnStart + mapData.height;

  // // iterate across outer array of arrays
  for (let i = matrixRowStart; i < matrixRowEnd; i++) {
    // // iterate down sparse array
    for (let j = matrixColumnStart; j < matrixColumnEnd; j++) {
      // // returns false for empty slots aka elisions
      if (matrix[i].hasOwnProperty(j)) {
        if (mapData.entities[getXYStr(i, j)].type === "wall") {
          ctx.fillStyle = '#737373';
          ctx.beginPath();
          ctx.fillRect(i * mapData.scale + mapData.x - mapData.scale*0.5,  j * mapData.scale + mapData.y - mapData.scale*0.5, mapData.scale, mapData.scale)
          ctx.closePath();
        } else if (mapData.entities[getXYStr(i, j)].type === "zombie") {
          ctx.fillStyle = 'darkgreen';
          ctx.beginPath();
          ctx.arc(i * mapData.scale + mapData.x, j * mapData.scale + mapData.y, mapData.scale*0.3, 0, Math.PI*2);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }

  // // draw text
  const selected = getSelected(mapData.selected.x, mapData.selected.y, mapData)
  ctx.font = "18px monospace";
  ctx.fillStyle = '#e0e0e0a6';
  ctx.fillText(`${selected.x}, ${selected.y} ${selected.type}`, 10, 18);
  ctx.fillText(`${mapData.name}`, 10, canvasHeight - 18);




  //////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  // // draw selected
  ctx.strokeStyle = 'gold';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(mapData.selected.x*mapData.scale + mapData.x, mapData.selected.y*mapData.scale + mapData.y, mapData.scale*0.3, 0, Math.PI*2);
  ctx.closePath();
  ctx.stroke();

  // // draw selector
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(mouseData.position.x, mouseData.position.y, mapData.scale*0.5, 0, Math.PI*2);
  ctx.closePath();
  ctx.stroke();



  
   
    }
