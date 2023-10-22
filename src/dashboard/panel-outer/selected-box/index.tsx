import { getSelected } from "../../utility-functions/get-selected";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function SelectedBox(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );

  return (
    <div className="selected-box">
      <div>{selected.x}</div>
      <div>{selected.y}</div>
      <div>{selected.type}</div>
      <div>{selected.name}</div>
      <div>{selected.fill}</div>
      <div>{selected.stroke}</div>
      <div>{selected.text}</div>
    </div>
  );
}
