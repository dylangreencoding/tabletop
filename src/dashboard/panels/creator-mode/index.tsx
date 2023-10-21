import { getSelected } from "../../utility-functions/get-selected";

interface Props {
  mapData: any;
}

export default function CreatorMode(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );
  return (
    <div>
      <div>Creator Mode</div>
      <div>
        {selected.x}, {selected.y}
      </div>
      <div>{selected.name}</div>
    </div>
  );
}
