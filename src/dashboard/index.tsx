import { useState } from "react";

import Canvas from "./canvas";
import PanelOuter from "./panel-outer";

import { rawMapData, emptyEntityTemplate } from "./utilities/map-data";

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

  // // used to add entities to map
  // // used by create tool and in canvas
  // // it is its own state rather than existing in mapData
  // // that way canvas useEffect is not called when it is modified
  const [entityTemplate, setEntityTemplate] = useState<any>(emptyEntityTemplate);

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
        entityTemplate={entityTemplate}
      />
      <PanelOuter
        mapData={mapData}
        setMapData={setMapData}
        panelOut={panelOut}
        setPanelOut={setPanelOut}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        entityTemplate={entityTemplate}
        setEntityTemplate={setEntityTemplate}
      />
    </div>
  );
}
