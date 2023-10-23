import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { keyRow1, keyRow2, keyRow3 } from "./alphabet";
import LetterButton from "./letter-button";

interface Props {
  setKeyBoardOpen: Function;
  // setInputField: Function;
}

export default function MobileKeyboard(props: Props) {
  const [word, setWord] = useState<string>("");
  return (
    <div className="mobile-keyboard">
      <div className="key-row">
        <span>{word}</span>
        <button
          type="button"
          className="mobile-keyboard-button"
          onClick={(e) => {
            e.preventDefault;
            props.setKeyBoardOpen(false);
          }}
        >
          Done
        </button>
      </div>
      <ul className="key-row key-row-1">
        {keyRow1.map((letter: string) => {
          return (
            <LetterButton
              key={uuidv4()}
              letter={letter}
              word={word}
              setWord={setWord}
            />
          );
        })}
      </ul>
      <ul className="key-row key-row-2">
        {keyRow2.map((letter: string) => {
          return (
            <LetterButton
              key={uuidv4()}
              letter={letter}
              word={word}
              setWord={setWord}
            />
          );
        })}
      </ul>
      <ul className="key-row key-row-3">
        {keyRow3.map((letter: string) => {
          return (
            <LetterButton
              key={uuidv4()}
              letter={letter}
              word={word}
              setWord={setWord}
            />
          );
        })}
      </ul>
      <div className="key-row key-row-4">
        <button
          type="button"
          className="mobile-keyboard-button"
          onClick={(e) => {
            e.preventDefault;
          }}
        >
          Space
        </button>
        <button
          type="button"
          className="mobile-keyboard-button"
          onClick={(e) => {
            e.preventDefault;
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
