import { useRef, useEffect, useMemo } from "react";

import { draw } from "./draw";

import {
  mouse,
  getMouseMovement,
  getMousePosition,
} from "../utilities/mouse-data";

import { touch, getTouch, getTouchPosition } from "../utilities/touch-data";

import { getHashX, getHashY } from "../utilities/get-hash-maps";
import { getMatrix } from "../utilities/get-matrix";

import {
  selectLocation,
  keepMapInView,
  moveWithArrow,
} from "../utilities/canvas-event-logic";

interface Props {
  selectedMap: any;
  mapData: any;
  setMapData: any;
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

    // // assure typescript canvasRef is not null
    const canvas = canvasRef.current!;

    // // to draw on canvas
    const ctx = canvas.getContext("2d");

    // // generate grid hashmaps
    const hashX = getHashX(props.mapData, canvas.width);
    const hashY = getHashY(props.mapData, canvas.height);
    console.log(props.mapData);

    // // initital draw
    draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);

    /// // ************* \\ \\\
    // // EVENT HANDLERS \\ \\
    const handleMouseDown = (_e: MouseEvent) => {
      mouse.isPressed = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
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

    const handleMouseUp = (_e: MouseEvent) => {
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

    const handleMouseLeave = (_e: MouseEvent) => {
      mouse.position.x = NaN;
      mouse.position.y = NaN;
      draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case "`":
          // // temporary, for development
          props.setMapData({ ...props.mapData, mapData });
          console.log(props.mapData);
          sessionStorage.setItem("tabletopUI", JSON.stringify(props.mapData));
          break;
        case "~":
          // // temporary, for development
          sessionStorage.removeItem("tabletopUI");
          location.reload();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          moveWithArrow(props.mapData, matrix, 0, -1, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowRight":
          moveWithArrow(props.mapData, matrix, 1, 0, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowDown":
          moveWithArrow(props.mapData, matrix, 0, 1, e.shiftKey);
          props.setMapData({ ...props.mapData, mapData });
          break;
        case "ArrowLeft":
          moveWithArrow(props.mapData, matrix, -1, 0, e.shiftKey);
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
      // // assure typescript canvas width is not undefined
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);
    };

    const handleTouchStart = (e: TouchEvent) => {
      console.log("touchstart", e);

      // // prevent mouse event from firing
      e.preventDefault();

      touch.thisTouch = getTouch(e);
      touch.position = getTouchPosition(e, hashX, hashY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      console.log("touchmove", e);
      e.preventDefault();

      // // move map
      touch.lastTouch.x = touch.thisTouch.x;
      touch.lastTouch.y = touch.thisTouch.y;
      touch.thisTouch = getTouch(e);
      props.mapData.x += touch.thisTouch.x - touch.lastTouch.x;
      props.mapData.y += touch.thisTouch.y - touch.lastTouch.y;
      touch.didMoveMap = true;
      keepMapInView(props.mapData, canvas);
      draw(ctx, canvas.width, canvas.height, props.mapData, mouse, matrix);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      console.log("touchend", e);
      e.preventDefault();

      if (
        !touch.didMoveMap &&
        touch.position.x !== undefined &&
        touch.position.y !== undefined
      ) {
        // // select if map was not moved
        selectLocation(props.mapData, touch, matrix);
      }

      touch.didMoveMap = false;
      // // set state properly after mutation
      // // this reruns useEffect which redraws map and re-initializes hashmaps
      props.setMapData({ ...props.mapData, mapData });
    };

    const handleTouchCancel = (e: TouchEvent) => {
      console.log("touchcancel", e);
      e.preventDefault();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("wheel", handleWheel);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchcancel", handleTouchCancel);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [props.mapData]);

  return (
    <canvas
      className="canvas"
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
