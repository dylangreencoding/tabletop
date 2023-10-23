import ToolBox from "./tool-box";
import SelectForm from "./select-form";
import CreateForm from "./create-form";

interface Props {
  mapData: any;
  setMapData: Function;
  entityTemplate: any;
  setEntityTemplate: Function;
}

export default function CreatorMode(props: Props) {
  const displayForm = () => {
    switch (props.mapData.tool) {
      case "select":
        return (
          <SelectForm mapData={props.mapData} setMapData={props.setMapData} />
        );
      case "create":
        return (
          <CreateForm
            entityTemplate={props.entityTemplate}
            setEntityTemplate={props.setEntityTemplate}
          />
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
