interface Props {
  panelOut: boolean;
  activePanel: string;

  handleClick: any;
  className: string;
  title: string;
  icon: any;
}

export default function TabButton(props: Props) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      title={props.title}
      className={`tab-button ${props.className} ${
        props.activePanel === props.title ? "tab-button-active" : ""
      }`}
    >
      {props.icon}
    </button>
  );
}
