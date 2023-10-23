import { getXYStr } from "../../../utilities/get-selected";

interface Props {
  type: string;
  title: string;
  selected: any;
  mapData: any;
  setMapData: Function;
}

export default function SelectTypeButton(props: Props) {
  return (
    <button
      className={`entity-type-button ${
        props.selected.type === props.type ? "entity-type-button-active" : ""
      }`}
      type="button"
      title={props.title}
      onClick={(e) => {
        e.preventDefault();
        const mapData = props.mapData;
        props.mapData.entities[
          getXYStr(props.mapData.selected.x, props.mapData.selected.y)
        ].type = props.type;
        props.mapData.entities[
          getXYStr(props.mapData.selected.x, props.mapData.selected.y)
        ].name = props.type;

        props.setMapData({ ...props.mapData, mapData });
      }}
    >
      {props.type}
    </button>
  );
}
