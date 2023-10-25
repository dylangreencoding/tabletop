import Home from "../../panels/home";
import CreatorMode from "../../panels/creator-mode";
import PlayerMode from "../../panels/player-mode";

interface Props {
  mapData: any;
  setMapData: Function;

  panelOut: boolean;
  activePanel: string;
}

export default function PanelInner(props: Props) {
  const displayPanel = () => {
    switch (props.activePanel) {
      case "home":
        return <Home />;
      case "build":
        return (
          <CreatorMode mapData={props.mapData} setMapData={props.setMapData} />
        );
      case "play":
        return <PlayerMode />;
    }
  };

  return (
    <div
      className={`${props.panelOut ? "panel-inner" : "panel-hidden"}`}
      // // inline style here allows dynamic calculation of max-height
      // // full functionality dependent on canvas resize event handler triggering re-render
      style={
        window.innerHeight > window.innerWidth
          ? { maxHeight: `${window.innerHeight * 0.75 - 80}px` }
          : { maxHeight: `100svh` }
      }
    >
      {displayPanel()}
    </div>
  );
}