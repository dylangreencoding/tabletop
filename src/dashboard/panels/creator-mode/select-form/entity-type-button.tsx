interface Props {
  type: string;
  title: string;
  mapData: any;
  setMapData: Function;
  selected: any;
  entityKey: string;
}

export default function EntityTypeButton(props: Props) {
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
        props.mapData.entities[props.entityKey].type = props.type;
        props.mapData.entities[props.entityKey].name = props.type;

        props.setMapData({ ...props.mapData, mapData });
      }}
    >
      {props.type}
    </button>
  );
}
