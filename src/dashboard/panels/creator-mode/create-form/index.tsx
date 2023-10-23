import { useState } from "react";
import CreateTypeButton from "./create-type-button";
import MobileKeyboard from "../../../../mobile-keyboard";

interface Props {
  entityTemplate: any;
  setEntityTemplate: Function;
}

export default function CreateForm(props: Props) {
  const [keyBoardOpen, setKeyboardOpen] = useState<boolean>(false);

  return (
    <form className="create-form">
      <div>
        <label>Type </label>
        {props.entityTemplate.type}
      </div>
      <div className="flex space-around">
        <CreateTypeButton
          type={"empty"}
          title={`Create empty spaces with descriptions`}
          entityTemplate={props.entityTemplate}
          setEntityTemplate={props.setEntityTemplate}
        />
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
        onTouchStart={(e) => {
          e.preventDefault();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
        }}
        onTouchCancel={(e) => {
          e.preventDefault();
        }}
      ></input>
      <div>
        <label htmlFor="name-attribute">Description </label>
        {props.entityTemplate.text}
      </div>
      <input
        name="text-attribute"
        id="text-attribute"
        type="text"
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
        onTouchStart={(e) => {
          e.preventDefault();
          setKeyboardOpen(true);
        }}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
        }}
        onTouchCancel={(e) => {
          e.preventDefault();
        }}
      ></input>
      {keyBoardOpen ? (
        <MobileKeyboard setKeyBoardOpen={setKeyboardOpen} />
      ) : null}
    </form>
  );
}
