import { useState } from "react";

import Canvas from "./canvas";
import PanelOuter from "./panel-outer";

import { rawMapData } from "./utilities/map-data";

export function DashboardWrapper() {
  const fetchRawMapData = () => {
    const mapJSON: any = sessionStorage.getItem("tabletopUI");
    return mapJSON ? mapJSON : JSON.stringify(rawMapData);
  };

  // // users selected map
  // // declared in canvas useMemo as dependency
  // // this way, the map matrix is only calculated when the user selects a map
  // // otherwise, the map matrix is mutated
  // // for now, session storage is simulating database
  const [selectedMap, _setSelectedMap] = useState<any>(fetchRawMapData());

  return <Dashboard selectedMap={selectedMap} />;
}

interface DashboardProps {
  selectedMap: any;
}

export function Dashboard(props: DashboardProps) {
  // // deep copy users selected map
  // // this way map can be manipulated without affecting original
  // // initialize mapData generates property fields not needed to be sent to database
  const [mapData, setMapData] = useState<any>(JSON.parse(props.selectedMap));

  // // used to expand/collapse panel
  // // initialized here as canvas depends on it for resizing
  const [panelOut, setPanelOut] = useState<boolean>(true);

  // // used to determine which panel is currently displayed
  // // "home", "build", or "play"
  // // initialized here as canvas functionality varies depending on build / play modes
  const [activePanel, setActivePanel] = useState<string>("home");

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
        activePanel={activePanel}
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
