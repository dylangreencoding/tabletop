import TabButton from "./tab-button";

interface Props {
  panelOut: boolean;
  setPanelOut: Function;
  activePanel: string;
  setActivePanel: Function;
  mapData: any;
  setMapData: Function;
}

export default function Tabs(props: Props) {
  const handleHomeButton = (e: any) => {
    e.preventDefault();

    if (props.panelOut) {
      if (props.activePanel === "home") {
        props.setPanelOut(false);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "select";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("home");
      }
    } else {
      if (props.activePanel === "home") {
        props.setPanelOut(true);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "select";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("home");
        props.setPanelOut(true);
      }
    }
  };

  const handleCreateButton = (e: any) => {
    e.preventDefault();
    if (props.panelOut) {
      if (props.activePanel === "build") {
        props.setPanelOut(false);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "create";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("build");
      }
    } else {
      if (props.activePanel === "build") {
        props.setPanelOut(true);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "create";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("build");
        props.setPanelOut(true);
      }
    }
  };

  const handlePlayButton = (e: any) => {
    e.preventDefault();

    if (props.panelOut) {
      if (props.activePanel === "play") {
        props.setPanelOut(false);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "play";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("play");
      }
    } else {
      if (props.activePanel === "play") {
        props.setPanelOut(true);
      } else {
        // // reset map tool when navigating to tab from another tab
        const mapData = props.mapData;
        props.mapData.tool = "play";
        props.setMapData({ ...props.mapData, mapData });
        props.setActivePanel("play");
        props.setPanelOut(true);
      }
    }
  };

  return (
    <div className="tabs">
      <TabButton
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        handleClick={handleHomeButton}
        className="tab-button-home"
        title="home"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            width="50%"
            height="50%"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
      <TabButton
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        handleClick={handleCreateButton}
        className="tab-button-create"
        title="build"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            width="50%"
            height="50%"
          >
            <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z" />
          </svg>
        }
      />
      <TabButton
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        handleClick={handlePlayButton}
        className="tab-button-play"
        title="play"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            width="50%"
            height="50%"
          >
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>
        }
      />
    </div>
  );
}
