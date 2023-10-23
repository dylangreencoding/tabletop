import Tabs from "./tabs";
import PanelInner from "./panel-inner";

interface Props {
  mapData: any;
  setMapData: Function;
  entityTemplate: any;
  setEntityTemplate: Function;

  panelOut: boolean;
  setPanelOut: Function;

  activePanel: string;
  setActivePanel: Function;
}

export default function PanelOuter(props: Props) {
  // // returns a css grid element with two columns/rows (depending on orientation)
  // // or one column/row if panel is collapsed
  // // contains contains PanelInner and Tabs
  return (
    <div className={`panel-outer ${props.panelOut ? "panel-out" : "panel-in"}`}>
      <PanelInner
        mapData={props.mapData}
        setMapData={props.setMapData}
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        entityTemplate={props.entityTemplate}
        setEntityTemplate={props.setEntityTemplate}
      />
      <Tabs
        panelOut={props.panelOut}
        setPanelOut={props.setPanelOut}
        activePanel={props.activePanel}
        setActivePanel={props.setActivePanel}
      />
    </div>
  );
}
