import { useState } from "react";

interface Props {
  word: string;
  setWord: Function;
  letter: string;
}

export default function MobileKeyboardButton(props: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li>
      <button
        className={`keyboard-button ${active ? "keyboard-button-active" : ""} ${
          props.letter === " " ? "keyboard-spacebar" : ""
        }`}
        type="button"
        onTouchStart={(_e: any) => {
          setActive(true);
        }}
        onTouchEnd={(e: any) => {
          e.preventDefault();
          setActive(false);
          if (
            props.word[props.word.length - 1] === " " &&
            props.letter === " "
          ) {
            props.setWord(props.word);
          } else {
            props.setWord(props.word + props.letter);
          }
        }}
        onTouchCancel={(e: any) => {
          e.preventDefault();
          setActive(false);
        }}
      >
        {props.letter}
        {active ? (
          <div className="keyboard-button-helper">{props.letter}</div>
        ) : null}
      </button>
    </li>
  );
}
