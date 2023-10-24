import { useState } from "react";
import CreateTypeButton from "./create-type-button";
import MobileKeyboard from "../../../../mobile-keyboard";

interface Props {
  entityTemplate: any;
  setEntityTemplate: Function;
}

export default function CreateForm(props: Props) {
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [keyboardField, setKeyboardField] = useState<string>("");
  const [keyboardWord, setKeyboardWord] = useState<string>("");

  const updateKeyboardField = (field: string, word: string) => {
    const entityTemplate = props.entityTemplate;
    props.entityTemplate[field] = word;
    props.setEntityTemplate({ ...props.entityTemplate, entityTemplate });
  };

  return (
    <form className="create-select-form">
      <div>
        <label>Type </label>
        {props.entityTemplate.type}
      </div>
      <div className="flex space-around">
        <CreateTypeButton
          type={"wall"}
          title={`Create walls`}
          entityTemplate={props.entityTemplate}
          setEntityTemplate={props.setEntityTemplate}
        />
        <CreateTypeButton
          type={"creature"}
          title={`Create creatures`}
          entityTemplate={props.entityTemplate}
          setEntityTemplate={props.setEntityTemplate}
        />
      </div>
      <div>
        <label htmlFor="name-attribute">Name </label>{" "}
        {props.entityTemplate.name}
      </div>
      <input
        name="name-attribute"
        id="name-attribute"
        type="text"
        required
        title="Name this"
        placeholder={"Name this"}
        value={props.entityTemplate.name}
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          const entityTemplate = props.entityTemplate;
          props.entityTemplate.name = e.target.value;
          props.setEntityTemplate({ ...props.entityTemplate, entityTemplate });
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          setKeyboardField("name");
          setKeyboardWord(props.entityTemplate.name);
          setKeyboardOpen(true);
        }}
      ></input>
      <div>
        <label htmlFor="name-attribute">Description </label>
        {props.entityTemplate.text}
      </div>
      <textarea
        name="text-attribute"
        id="text-attribute"
        rows={6}
        required
        title="Give a description"
        placeholder="Give a description"
        value={props.entityTemplate.text}
        onChange={(e) => {
          e.preventDefault();
          const entityTemplate = props.entityTemplate;
          props.entityTemplate.text = e.target.value;
          props.setEntityTemplate({ ...props.entityTemplate, entityTemplate });
        }}
        onTouchEnd={(e) => {
          setKeyboardField("text");
          setKeyboardWord(props.entityTemplate.text);
          setKeyboardOpen(true);
          e.preventDefault();
        }}
      ></textarea>
      {keyboardOpen ? (
        <MobileKeyboard
          setKeyboardOpen={setKeyboardOpen}
          keyboardField={keyboardField}
          word={keyboardWord}
          setWord={setKeyboardWord}
          updateKeyboardField={updateKeyboardField}
        />
      ) : null}
    </form>
  );
}
