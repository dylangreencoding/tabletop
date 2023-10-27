
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
    type: "wall", detail: ""}, "5 5": {type: "zombie", detail: ""}, "6 5": {type: "detail", detail: "detail goes here"}},

  // // fields generated on front end
  // // TO DO: strip and add these before saving
  x: 0,
  y: 0,
  scale: 30,
  selected: { x: 0, y: 0 },
  tool: "select",
}


