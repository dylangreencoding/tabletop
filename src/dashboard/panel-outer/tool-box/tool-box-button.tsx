interface Props {
  tool: string;
  title: string;
  mapData: any;
  setMapData: Function;
}

export default function ToolBoxButton(props: Props) {
  return (
    <button
      className={`tool-box-button ${
        props.mapData.tool === props.tool ? "tool-box-button-active" : ""
      }`}
      type="button"
      title={props.title}
      onClick={(e) => {
        e.preventDefault();
        const mapData = props.mapData;
        props.mapData.tool = props.tool;
        props.setMapData({ ...props.mapData, mapData });
      }}
    >
      {props.tool}
    </button>
  );
}
