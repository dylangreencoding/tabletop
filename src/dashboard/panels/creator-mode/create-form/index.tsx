// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface Props {
  emptyEntity: any;
  setEmptyEntity: Function;
}

export default function CreateForm(props: Props) {
  const [type, setType] = useState<any>(props.emptyEntity.type);
  const [name, setName] = useState<any>(props.emptyEntity.name);
  const [text, setText] = useState<any>(props.emptyEntity.text);

  const handleApplyButton = (e: any) => {
    e.preventDefault();
    const emptyEntity = props.emptyEntity;
    props.emptyEntity.type = type;
    props.emptyEntity.name = name;
    props.emptyEntity.text = text;
    props.setEmptyEntity({ ...props.emptyEntity, emptyEntity });
  };

  const displayApplyButton = () => {
    if (
      props.emptyEntity.type === type &&
      props.emptyEntity.name === name &&
      props.emptyEntity.text === text
    ) {
      return (
        <div className="grid-column-start-end">
          Click or tap to place this piece, or use shift + arrow keys to pick up
          / put down pieces.
        </div>
      );
    } else {
      return (
        <div className="grid-column-start-end">
          <button type="submit" onClick={handleApplyButton}>
            Click here
          </button>{" "}
          to apply changes.
        </div>
      );
    }
  };

  return (
    <form className="create-form">
      <div className="grid-column-start-end">
        <div>
          {props.emptyEntity.type} &#10042;{" "}
          <strong>{props.emptyEntity.name}</strong> &#10042;{" "}
          {props.emptyEntity.text}
        </div>
      </div>
      <label htmlFor="type-attribute">Type </label>
      <select
        name="type-attribute"
        id="type-attribute"
        required
        defaultValue={props.emptyEntity.type}
        title="Select type"
        onChange={(e) => {
          setType(e.target.value);
          setName(e.target.value);
        }}
      >
        <option value={"empty"}>empty</option>
        <option value={"wall"}>wall</option>
        <option value={"creature"}>creature</option>
      </select>

      <label htmlFor="name-attribute">Name </label>
      <input
        name="name-attribute"
        id="name-attribute"
        type="text"
        required
        title="Name this"
        placeholder={name}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <label htmlFor="name-attribute">Description </label>
      <input
        name="text-attribute"
        id="text-attribute"
        type="text"
        required
        title="Give a description"
        placeholder={text}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      {displayApplyButton()}
    </form>
  );
}
