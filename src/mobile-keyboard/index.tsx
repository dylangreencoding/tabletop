import { v4 as uuidv4 } from "uuid";
import { keyRow1, keyRow2, keyRow3 } from "./alphabet";
import MobileKeyboardButton from "./mobile-keyboard-button";

interface Props {
  setKeyboardOpen: any;
  keyboardField: string;
  updateKeyboardField: any;
  keyboardWord: string;
  setKeyboardWord: any;
}

export default function MobileKeyboard(props: Props) {
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-word">
        <div>{props.keyboardWord}_</div>
      </div>
      <div className="keyboard">
        <ul className="keyboard-row keyboard-row-1">
          {keyRow1.map((letter: string) => {
            return (
              <MobileKeyboardButton
                key={uuidv4()}
                letter={letter}
                word={props.keyboardWord}
                setWord={props.setKeyboardWord}
                backspace={false}
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
                word={props.keyboardWord}
                setWord={props.setKeyboardWord}
                backspace={false}
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
                word={props.keyboardWord}
                setWord={props.setKeyboardWord}
                backspace={false}
              />
            );
          })}
        </ul>
        <ul className="keyboard-row keyboard-row-4">
          <MobileKeyboardButton
            letter={"<-"}
            word={props.keyboardWord}
            setWord={props.setKeyboardWord}
            backspace={true}
          />
          <MobileKeyboardButton
            letter={" "}
            word={props.keyboardWord}
            setWord={props.setKeyboardWord}
            backspace={false}
          />

          <button
            type="button"
            className="keyboard-button"
            style={{ backgroundColor: "green" }}
            onClick={(e) => {
              e.preventDefault;
              props.updateKeyboardField(
                props.keyboardField,
                props.keyboardWord.trim()
              );
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
