import { getSelected } from "../utility-functions/get-selected";
import Tabs from "../tabs";

interface Props {
  mapData: any;
}

export default function Panel(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );
  return (
    <div className="panel-grid">
      <div>1</div>
      <div className="right-quarter-panel">
        <div>
          {selected.x}, {selected.y} {selected.name}
        </div>
        <Tabs />
      </div>
    </div>
  );
}
