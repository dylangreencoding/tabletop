
export const rawMapData : any = {

  // // fields sent to database
  id: "",
  name: "map_name",
  creator: "",
  player1: "",
  player2: "",
  player3: "",
  player4: "",
  width: 500,
  height: 500,
  entities: {template: {
    type: "wall", // // "wall" or "zombie"
}},

  // // fields generated on front end
  // // TO DO: strip and add these before saving
  x: 0,
  y: 0,
  scale: 30,
  selected: { x: 0, y: 0 },
  tool: "select",
}


