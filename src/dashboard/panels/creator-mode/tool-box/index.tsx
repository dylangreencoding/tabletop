import ToolBoxButton from "./tool-box-button";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function ToolBox(props: Props) {
  return (
    <div className="tool-box-wrapper">
      <div className="tool-box">
        <ToolBoxButton
          tool={"select"}
          title={`Press 'S' to select`}
          setMapData={props.setMapData}
          mapData={props.mapData}
        />
        <ToolBoxButton
          tool={"create"}
          title={`Press 'C' to create`}
          setMapData={props.setMapData}
          mapData={props.mapData}
        />
        <ToolBoxButton
          tool={"delete"}
          title={`Press 'D' to delete`}
          setMapData={props.setMapData}
          mapData={props.mapData}
        />
      </div>
    </div>
  );
}
