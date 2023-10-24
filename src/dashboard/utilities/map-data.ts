
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
  entities: {template: {
    type: "wall", // // "wall" or "creature"
    name: "wall", // // give it a name, default name is set to equal type when type is set ("wall" or "creature")
    text: "", // // brief narrative color to be displayed when player occupies or investigates square
}},

  // // fields generated on front end
  // // TO DO: strip and add these before saving
  x: 0,
  y: 0,
  scale: 30,
  selected: { x: 0, y: 0 },
  tool: "select",
}


