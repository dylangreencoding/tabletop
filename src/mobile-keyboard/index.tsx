import { v4 as uuidv4 } from "uuid";
import { keyRow1, keyRow2, keyRow3 } from "./alphabet";
import MobileKeyboardButton from "./mobile-keyboard-button";

interface Props {
  setKeyboardOpen: Function;
  keyboardField: string;
  updateKeyboardField: Function;
  word: string;
  setWord: Function;
}

export default function MobileKeyboard(props: Props) {
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-word">{props.word}</div>
      <div className="keyboard">
        <ul className="keyboard-row keyboard-row-1">
          {keyRow1.map((letter: string) => {
            return (
              <MobileKeyboardButton
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
              <MobileKeyboardButton
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
              <MobileKeyboardButton
                key={uuidv4()}
                letter={letter}
                word={props.word}
                setWord={props.setWord}
              />
            );
          })}
        </ul>
        <ul className="keyboard-row keyboard-row-4">
          <button
            type="button"
            className="keyboard-button keyboard-button-medium"
            onClick={(e) => {
              e.preventDefault;
              props.setWord(props.word.slice(0, -1));
            }}
          >
            &lArr;
          </button>
          <MobileKeyboardButton
            letter={" "}
            word={props.word}
            setWord={props.setWord}
          />

          <button
            type="button"
            className="keyboard-button keyboard-button-medium"
            onClick={(e) => {
              e.preventDefault;
              props.updateKeyboardField(props.keyboardField, props.word);
              props.setKeyboardOpen(false);
            }}
          >
            &#10003;
          </button>
        </ul>
      </div>
    </div>
  );
}
