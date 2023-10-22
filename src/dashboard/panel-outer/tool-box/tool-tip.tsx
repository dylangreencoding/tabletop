interface Props {
  tool: string;
}

export default function ToolTip(props: Props) {
  const displayToolTip = () => {
    switch (props.tool) {
      case "select":
        return (
          <ul>
            <li>Click the board to select the square clicked</li>
            <li>Use the arrow keys or arrows to move about the board</li>
            <li>Hold 'Shift' to move on/off pieces</li>
            <li>Use the form below to edit the currently selected square</li>
          </ul>
        );
      case "create":
        return (
          <ul>
            <li>Click the board to place a piece on the square clicked</li>
            <li>Press '4' to place a piece on the currently selected square</li>
            <li>Use the arrow keys or arrows to move about the board</li>
            <li>Hold 'Shift' key to pick up/put down pieces</li>
            <li>Use the form below to customize the piece to be placed</li>
          </ul>
        );
      case "delete":
        return (
          <ul>
            <li>Click the board to clear the square clicked</li>
            <li>Press '8' to clear the currently selected square</li>
            <li>Use the arrow keys or arrows to move about the board</li>
            <li>Hold 'Shift' key to pick up/put down pieces</li>
          </ul>
        );
    }
  };

  return <div className="tool-tip">{displayToolTip()}</div>;
}
