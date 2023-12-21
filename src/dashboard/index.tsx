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
          top: "10%",
          right: "0",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-end",
          pointerEvents: "none",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {["create", "select", "delete"].map((tool: string) => {
            return (
              <li key={tool}>
                <button
                  type="button"
                  style={
                    mapData.tool === tool
                      ? { backgroundColor: "#ccc", color: "#121212" }
                      : {}
                  }
                  onClick={(e: any) => {
                    e.preventDefault();
                    mapData.tool = tool;
                    setMapData({ ...mapData, mapData });
                  }}
                >
                  {tool}
                </button>
              </li>
            );
          })}
        </ul>
        {mapData.tool === "create" ? (
          <ul style={{ display: "flex", gap: "10px" }}>
            {["wall", "zombie"].map((type: string) => {
              return (
                <li key={type}>
                  <button
                    type="button"
                    style={
                      mapData.entities.template.type === type
                        ? { backgroundColor: "#ccc", color: "#121212" }
                        : {}
                    }
                    onClick={(e: any) => {
                      e.preventDefault();
                      mapData.entities.template.type = type;
                      setMapData({ ...mapData, mapData });
                    }}
                  >
                    {type}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </nav>
      <Canvas
        selectedMap={props.selectedMap}
        mapData={mapData}
        setMapData={setMapData}
      />
    </div>
  );
}
