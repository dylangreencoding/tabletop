interface Props {
  word: string;
  setWord: Function;
  letter: string;
}

export default function LetterButton(props: Props) {
  const handleClick = (e: any) => {
    e.preventDefault();
    props.setWord(props.word + props.letter);
  };

  return (
    <li>
      <button
        className="mobile-keyboard-button"
        type="button"
        onClick={handleClick}
      >
        {props.letter}
      </button>
    </li>
  );
}
