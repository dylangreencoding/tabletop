import { v4 as uuidv4 } from "uuid";
import { keyRow1, keyRow2, keyRow3 } from "./alphabet";
import LetterButton from "./letter-button";

interface Props {
  setKeyboardOpen: Function;
  keyboardField: string;
  updateKeyboardField: Function;
  word: string;
  setWord: Function;
}

export default function MobileKeyboard(props: Props) {
  return (
    <div className="mobile-keyboard-wrapper">
      <div className="keyboard-word">{props.word}</div>
      <div className="mobile-keyboard">
        <ul className="keyboard-row keyboard-row-1">
          {keyRow1.map((letter: string) => {
            return (
              <LetterButton
                key={uuidv4()}
                letter={letter}
                word={props.word}
                setWord={props.setWord}
              />
            );
          })}
        </ul>
        <ul className="keyboard-row keyboard-row-2">
          {keyRow2.map((letter: string) => {
            return (
              <LetterButton
                key={uuidv4()}
                letter={letter}
                word={props.word}
                setWord={props.setWord}
              />
            );
          })}
        </ul>
        <ul className="keyboard-row keyboard-row-3">
          {keyRow3.map((letter: string) => {
            return (
              <LetterButton
                key={uuidv4()}
                letter={letter}
                word={props.word}
                setWord={props.setWord}
              />
            );
          })}
        </ul>
        <div className="keyboard-row keyboard-row-4">
          <button
            type="button"
            className="mobile-keyboard-button mobile-keyboard-button-medium"
            onClick={(e) => {
              e.preventDefault;
            }}
          >
            Back
          </button>
          <button
            type="button"
            className="mobile-keyboard-button mobile-keyboard-button-large"
            onClick={(e) => {
              e.preventDefault;
              props.setWord(props.word + " ");
            }}
          >
            Space
          </button>

          <button
            type="button"
            className="mobile-keyboard-button mobile-keyboard-button-medium"
            onClick={(e) => {
              e.preventDefault;
              props.updateKeyboardField(props.keyboardField, props.word);
              props.setKeyboardOpen(false);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
