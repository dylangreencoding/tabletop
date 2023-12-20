import { useState } from "react";

import Canvas from "./canvas";

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
  const [mapData, setMapData] = useState<any>(JSON.parse(props.selectedMap));

  return (
    <div className="dashboard">
      <nav
        style={{
          position: "fixed",
          zIndex: "999",
          top: "5%",
          right: "0",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          type="button"
          style={
            mapData.tool === "create"
              ? { backgroundColor: "red" }
              : { backgroundColor: "white" }
          }
          onClick={(e: any) => {
            e.preventDefault();
            mapData.tool = "create";
            setMapData({ ...mapData, mapData });
          }}
        >
          create
        </button>
        <button
          type="button"
          style={
            mapData.tool === "select"
              ? { backgroundColor: "red" }
              : { backgroundColor: "white" }
          }
          onClick={(e: any) => {
            e.preventDefault();
            mapData.tool = "select";
            setMapData({ ...mapData, mapData });
          }}
        >
          select
        </button>
        <button
          type="button"
          style={
            mapData.tool === "delete"
              ? { backgroundColor: "red" }
              : { backgroundColor: "white" }
          }
          onClick={(e: any) => {
            e.preventDefault();
            mapData.tool = "delete";
            setMapData({ ...mapData, mapData });
          }}
        >
          delete
        </button>
      </nav>
      <nav
        style={{
          position: "fixed",
          zIndex: "999",
          top: "10%",
          right: "0",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          type="button"
          style={
            mapData.entities.template.type === "wall"
              ? { backgroundColor: "red" }
              : { backgroundColor: "white" }
          }
          onClick={(e: any) => {
            e.preventDefault();
            mapData.entities.template.type = "wall";
            setMapData({ ...mapData, mapData });
          }}
        >
          wall
        </button>
        <button
          type="button"
          style={
            mapData.entities.template.type === "zombie"
              ? { backgroundColor: "red" }
              : { backgroundColor: "white" }
          }
          onClick={(e: any) => {
            e.preventDefault();
            mapData.entities.template.type = "zombie";

            setMapData({ ...mapData, mapData });
          }}
        >
          zombie
        </button>
      </nav>
      <Canvas
        selectedMap={props.selectedMap}
        mapData={mapData}
        setMapData={setMapData}
      />
    </div>
  );
}
