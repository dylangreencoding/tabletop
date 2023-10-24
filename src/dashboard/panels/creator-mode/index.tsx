import ToolBox from "./tool-box";
import SelectForm from "./select-form";

import { getSelected } from "../../utilities/get-selected";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function CreatorMode(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );

  const displayForm = () => {
    switch (props.mapData.tool) {
      case "select":
        return (
          <div>
            <p className="mb12">
              Click or tap the map to select a piece. Use this form to modify
              the currently selected piece.
            </p>
            <SelectForm
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={selected}
            />
          </div>
        );
      case "create":
        return (
          <div>
            <p className="mb12">
              Click or tap the map to create a piece. Use this form to specify
              what is created.
            </p>
            <SelectForm
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={props.mapData.entities.template}
            />
          </div>
        );
      case "delete":
        return "Click or tap the board to remove a piece";
    }
  };

  return (
    <div>
      <div
        style={{
          fontSize: "1.2rem",
          marginBottom: "0.6rem",
          letterSpacing: "2px",
          textAlign: "center",
          color: "hsl(0, 0%, 25%)",
        }}
      >
        <strong
          style={{
            fontWeight: "800",
          }}
        >
          CREATOR MODE
        </strong>{" "}
        &#10042; TABLETOP
      </div>
      <ToolBox mapData={props.mapData} setMapData={props.setMapData} />
      {displayForm()}
    </div>
  );
}
