
export const rawMapData : any = {

  // // fields sent to database
  id: "",
  name: "map_name",
  creator: "",
  player1: "",
  player2: "",
  player3: "",
  player4: "",
  width: 1000,
  height: 1000,
  entities: {},

  // // fields generated on front end
  // // TO DO: strip and add these before saving
  x: 0,
  y: 0,
  scale: 30,
  selected: { x: 0, y: 0 },
  tool: "select",
}


// // deep copied in canvas-event-handlers.ts --- need better method than JSON.parse(JSON.stringify())
// // JSON.parse(JSON.stringify()) ok for objects containing strings, numbers, booleans, null, NaN (converted to null)
// // undefined values are lost!! which could cause issues...
export const emptyEntityTemplate : any = {
    type: "empty", // // "wall" or "creature" or "empty", default empty
    name: "", // // give it a name, default name is set to equal type when type is set ("wall" or "creature") default "empty"
    text: "", // // brief narrative color to be displayed when player occupies or investigates square
}

