import { useState } from "react";

import Canvas from "./canvas";
import PanelOuter from "./panel-outer";

import { mapDataTemp } from "./data-objects/map-data";

export function DashboardWrapper() {
  const getMap = () => {
    const mapJSON: any = sessionStorage.getItem("tabletopUI");
    return mapJSON ? mapJSON : JSON.stringify(mapDataTemp);
  };

  // // users selected map
  // // declared in canvas useMemo as dependency
  // // this way, the map matrix is only calculated when the user selects a map
  // // otherwise, the map matrix is mutated
  // // plan on using Context API for this, as well as auth, when the time comes
  // // the dashboard wrapper will get a wrapper ;)
  // // for now, session storage is fine
  const [selectedMap, _setSelectedMap] = useState<any>(getMap());

  return <Dashboard selectedMap={selectedMap} />;
}

interface DashboardProps {
  selectedMap: any;
}

export function Dashboard(props: DashboardProps) {
  // // deep copy users selected map
  // // this way map can be manipulated without affecting original
  const [mapData, setMapData] = useState<any>(JSON.parse(props.selectedMap));

  // // used to expand/collapse panel
  // // initialized here as canvas depends on it for resizing
  const [panelOut, setPanelOut] = useState<boolean>(true);

  // // used to determine which panel is currently displayed
  // // "Home", "Creator Mode", or "Player Mode"
  // // initialized here as canvas functionality varies depending on Creator/Player Mode
  const [activePanel, setActivePanel] = useState<string>("Home");

  // // returns a css grid element with two columns/rows depending on orientation
  // // contains Canvas and PanelOuter (PanelOuter contains PanelInner and Tabs )
  return (
    <div
      className={`dashboard ${
        panelOut ? "dashboard-panel-out" : "dashboard-panel-in"
      }`}
    >
      <Canvas
        selectedMap={props.selectedMap}
        mapData={mapData}
        setMapData={setMapData}
        panelOut={panelOut}
        setPanelOut={setPanelOut}
      />
      <PanelOuter
        mapData={mapData}
        setMapData={setMapData}
        panelOut={panelOut}
        setPanelOut={setPanelOut}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
    </div>
  );
}
