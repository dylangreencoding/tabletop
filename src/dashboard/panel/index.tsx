import { getSelected } from "../utility-functions/get-selected";
import Tabs from "../tabs";

interface Props {
  mapData: any;

  panelOut: boolean;
  setPanelOut: Function;
}

export default function Panel(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );
  return (
    <div className={`${props.panelOut ? "panel-out" : "panel-in"}`}>
      <div />
      <div className={`${props.panelOut ? "panel" : "panel-hidden"}`}>
        {selected.x}, {selected.y} {selected.name}
      </div>
      <Tabs panelOut={props.panelOut} setPanelOut={props.setPanelOut} />
    </div>
  );
}
