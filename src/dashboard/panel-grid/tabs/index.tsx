interface Props {
  panelOut: boolean;
  setPanelOut: Function;
}

export default function Tabs(props: Props) {
  const handlePanelOut = (e: any) => {
    e.preventDefault();
    props.setPanelOut(props.panelOut === true ? false : true);
  };

  return (
    <div className="tabs">
      <button type="button" onClick={handlePanelOut}>
        Hide/Show Panel
      </button>
    </div>
  );
}
