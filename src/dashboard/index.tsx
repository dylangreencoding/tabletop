import { useState } from "react";

import Canvas from "./canvas";
import PanelGrid from "./panel-grid";

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
  const [selectedMap, _setSelectedMap] = useState<any>(getMap());

  return <Dashboard selectedMap={selectedMap} />;
}

interface DashboardProps {
  selectedMap: any;
}

export function Dashboard(props: DashboardProps) {
  // // deep copy users selected map
  const [mapData, setMapData] = useState<any>(JSON.parse(props.selectedMap));
  const [panelOut, setPanelOut] = useState<boolean>(true);

  return (
    <div className="dashboard">
      <Canvas
        selectedMap={props.selectedMap}
        mapData={mapData}
        setMapData={setMapData}
      />
      <PanelGrid
        mapData={mapData}
        panelOut={panelOut}
        setPanelOut={setPanelOut}
      />
    </div>
  );
}
