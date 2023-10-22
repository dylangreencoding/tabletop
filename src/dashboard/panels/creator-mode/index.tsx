import ToolBox from "../../panel-outer/tool-box";
import SelectedBox from "../../panel-outer/selected-box";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function CreatorMode(props: Props) {
  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "2.4rem",
          fontWeight: "700",
          letterSpacing: "2px",
          textAlign: "center",
          color: "hsl(0, 0%, 15%)",
        }}
      >
        {props.mapData.name} &#10042; creator mode
      </div>
      <ToolBox mapData={props.mapData} setMapData={props.setMapData} />
      <SelectedBox mapData={props.mapData} setMapData={props.setMapData} />
    </div>
  );
}
