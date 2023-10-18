import { useRef, useEffect, useMemo } from "react";

import { draw } from "./draw";

import { mouse } from "../data-objects/mouse-data";
import {
  getMouseMovement,
  getMousePosition,
} from "../utility-functions/get-mouse-data";

import { getHashX, getHashY } from "../utility-functions/get-hash-maps";
import { getMatrix } from "../utility-functions/get-matrix";

import {
  selectLocation,
  keepMapInView,
  move,
} from "../utility-functions/canvas-event-logic";

interface Props {
  selectedMap: any;
  mapData: any;
  setMapData: Function;
}

export default function Canvas(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // // matrix used to only draw the entities that are within the viewport
  // // only calculated when user selects a map
  // // not calculated when currently selected map is modified (then it is simply mutated)
  const matrix = useMemo<Array<Array<number>>>(
    () => getMatrix(props.mapData),
    [props.selectedMap]
  );

  // // useEffect necessary for drawing on canvas
  useEffect(() => {
    // // for setting state after mutation.....
    const mapData = props.mapData;

    // // assure typescript compiler canvasRef is not null
    const canvas = canvasRef.current!;

    // // to draw on canvas
    const ctx = canvas.getContext("2d");

    // // generate grid hashmaps
    let hashX = getHashX(props.mapData, canvas.width);
    let hashY = getHashY(props.mapData, canvas.height);

    // // initital draw
    draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);

    /// // ************* \\ \\\
    // // EVENT HANDLERS \\ \\
    const handlePointerDown = (_e: PointerEvent) => {
      mouse.isPressed = true;
    };

    const handlePointerMove = (e: PointerEvent) => {
      // // get mouse data
      mouse.movement = getMouseMovement(e);
      mouse.position = getMousePosition(e, hashX, hashY);

      // // drag map
      if (mouse.isPressed) {
        props.mapData.x += mouse.movement.x;
        props.mapData.y += mouse.movement.y;
        mouse.didMoveMap = true;
        keepMapInView(props.mapData, canvas);
      }

      draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);
    };

    const handlePointerUp = (_e: PointerEvent) => {
      mouse.isPressed = false;

      if (
        !mouse.didMoveMap &&
        mouse.position.x !== undefined &&
        mouse.position.y !== undefined
      ) {
        // // select if map was not moved
        selectLocation(props.mapData, mouse, matrix);
      }

      mouse.didMoveMap = false;
      // // set state properly after mutation
      // // this reruns useEffect which redraws map and re-initializes hashmaps
      props.setMapData({ ...props.mapData, mapData });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case "s":
          props.mapData.tool = "select";
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "a":
          props.mapData.tool = "add";
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "r":
          props.mapData.tool = "remove";
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "[":
          // // temporary, for development
          sessionStorage.setItem("tabletopUI", JSON.stringify(props.mapData));
          break;
        case "]":
          // // temporary, for development
          sessionStorage.removeItem("tabletopUI");
          location.reload();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          move(props.mapData, matrix, 0, -1, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowRight":
          move(props.mapData, matrix, 1, 0, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowDown":
          move(props.mapData, matrix, 0, 1, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowLeft":
          move(props.mapData, matrix, -1, 0, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      mouse.position = { x: NaN, y: NaN };
      if (e.deltaY < 0 && props.mapData.scale <= 50) {
        props.mapData.scale += 5;
      }
      if (e.deltaY > 0 && props.mapData.scale >= 25) {
        props.mapData.scale -= 5;
      }
      keepMapInView(props.mapData, canvas);

      // // set state properly after mutation
      // // this reruns useEffect which redraws map and re-initializes hashmaps
      props.setMapData({ ...props.mapData, mapData });
    };

    const handleResize = (_e: Event) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("wheel", handleWheel);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [props.mapData]);

  return (
    <div>
      <canvas
        className="canvas"
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
