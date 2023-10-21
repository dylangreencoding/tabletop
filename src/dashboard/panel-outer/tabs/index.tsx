import TabButton from "./tab-button";

interface Props {
  panelOut: boolean;
  setPanelOut: Function;
  activePanel: string;
  setActivePanel: Function;
}

export default function Tabs(props: Props) {
  const handleHomeButton = (e: any) => {
    e.preventDefault();
    if (props.panelOut) {
      if (props.activePanel === "Home") {
        props.setPanelOut(false);
      } else {
        props.setActivePanel("Home");
      }
    } else {
      if (props.activePanel === "Home") {
        props.setPanelOut(true);
      } else {
        props.setActivePanel("Home");
        props.setPanelOut(true);
      }
    }
  };

  const handleCreateButton = (e: any) => {
    e.preventDefault();
    if (props.panelOut) {
      if (props.activePanel === "Creator Mode") {
        props.setPanelOut(false);
      } else {
        props.setActivePanel("Creator Mode");
      }
    } else {
      if (props.activePanel === "Creator Mode") {
        props.setPanelOut(true);
      } else {
        props.setActivePanel("Creator Mode");
        props.setPanelOut(true);
      }
    }
  };

  const handlePlayButton = (e: any) => {
    e.preventDefault();
    if (props.panelOut) {
      if (props.activePanel === "Player Mode") {
        props.setPanelOut(false);
      } else {
        props.setActivePanel("Player Mode");
      }
    } else {
      if (props.activePanel === "Player Mode") {
        props.setPanelOut(true);
      } else {
        props.setActivePanel("Player Mode");
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
        title="Home"
        icon={<span>&#9750;</span>}
        // icon={<span>&#9881;</span>} // gear html entity, to use for settings panel (eventually)
      />
      <TabButton
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        handleClick={handleCreateButton}
        className="tab-button-create"
        title="Creator Mode"
        icon={<span>&#9874;</span>}
      />
      <TabButton
        panelOut={props.panelOut}
        activePanel={props.activePanel}
        handleClick={handlePlayButton}
        className="tab-button-play"
        title="Player Mode"
        icon={<span>&#9876;</span>}
      />
    </div>
  );
}
