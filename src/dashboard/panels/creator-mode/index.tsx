import ToolBox from "./tool-box";
import SelectForm from "./select-form";

import { getSelected } from "../../utilities/get-selected";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function CreatorMode(props: Props) {
  const selected = getSelected(props.mapData);

  const displayForm = () => {
    switch (props.mapData.tool) {
      case "select":
        return (
          <div>
            <p
              style={{
                fontSize: "1.2rem",
                textTransform: "uppercase",
                marginBottom: "2.4rem",
                letterSpacing: "2px",
                fontWeight: "800",
                color: "hsl(0, 0%, 40%)",
              }}
            >
              Click or tap the map to select a piece.
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
            <p
              style={{
                fontSize: "1.2rem",
                textTransform: "uppercase",
                marginBottom: "2.4rem",
                letterSpacing: "2px",
                fontWeight: "800",
                color: "hsl(0, 0%, 40%)",
              }}
            >
              Click or tap the map to create a{" "}
              {props.mapData.entities.template.type}.
            </p>
            <SelectForm
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={props.mapData.entities.template}
            />
          </div>
        );
      case "delete":
        return (
          <p
            style={{
              fontSize: "1.2rem",
              textTransform: "uppercase",
              marginBottom: "2.4rem",
              letterSpacing: "2px",
              fontWeight: "800",
              color: "hsl(0, 0%, 40%)",
            }}
          >
            Click or tap the map to delete a piece.
          </p>
        );
    }
  };

  return (
    <div>
      <ToolBox mapData={props.mapData} setMapData={props.setMapData} />
      {displayForm()}
    </div>
  );
}
