import { getSelected } from "../../../utilities/get-selected";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function SelectForm(props: Props) {
  const selected: any = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );

  return (
    <div>
      <span>
        {selected.x}, {selected.y} &#10042;{" "}
        <strong style={{ color: "gold" }}>{selected.name}</strong> &#10042;{" "}
        {selected.text}
      </span>
    </div>
  );
}
