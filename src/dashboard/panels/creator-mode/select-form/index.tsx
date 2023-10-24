import { useState } from "react";
import { getXYStr } from "../../../utilities/get-selected";
import EntityTypeButton from "./entity-type-button";
import MobileKeyboard from "../../../../mobile-keyboard";

interface Props {
  mapData: any;
  setMapData: Function;

  selected: any;
}

export default function SelectForm(props: Props) {
  const entityKey =
    props.mapData.tool === "select"
      ? getXYStr(props.mapData.selected.x, props.mapData.selected.y)
      : "template";

  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [keyboardField, setKeyboardField] = useState<string>("");
  const [keyboardWord, setKeyboardWord] = useState<string>("");

  const updateKeyboardField = (field: string, word: string) => {
    const mapData = props.mapData;
    props.mapData.entities[entityKey][field] = word;
    props.setMapData({ ...props.mapData, mapData });
  };

  return (
    <div>
      {props.selected.name !== "~" ? (
        <form className="select-form">
          {" "}
          <div>
            <label>Type </label>
            {props.selected.type}
          </div>
          <div className="flex column mb12">
            <EntityTypeButton
              type={"wall"}
              title={`Set type to "wall"`}
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={props.selected}
              entityKey={entityKey}
            />
            <EntityTypeButton
              type={"creature"}
              title={`Set type to "creature"`}
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={props.selected}
              entityKey={entityKey}
            />
          </div>
          <div>
            <label htmlFor="name-attribute">Name </label> {props.selected.name}
          </div>
          <input
            name="name-attribute"
            id="name-attribute"
            type="text"
            required
            title="Name this"
            placeholder={"Name this"}
            value={props.selected.name}
            onChange={(e) => {
              e.preventDefault();
              const mapData = props.mapData;
              props.mapData.entities[entityKey].name = e.target.value;
              props.setMapData({ ...props.mapData, mapData });
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setKeyboardField("name");
              setKeyboardWord(props.selected.name);
              setKeyboardOpen(true);
            }}
          ></input>
          <div style={{ wordBreak: "break-all" }}>
            <label htmlFor="name-attribute">Description </label>
            {props.selected.text}
          </div>
          <textarea
            name="text-attribute"
            id="text-attribute"
            rows={6}
            required
            title="Give a description"
            placeholder="Give a description"
            value={props.selected.text}
            onChange={(e) => {
              e.preventDefault();

              const mapData = props.mapData;
              props.mapData.entities[entityKey].text = e.target.value;
              props.setMapData({ ...props.mapData, mapData });
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setKeyboardField("text");
              setKeyboardWord(props.selected.text);
              setKeyboardOpen(true);
            }}
          ></textarea>
        </form>
      ) : (
        <span>Nothing here...</span>
      )}
      {keyboardOpen ? (
        <MobileKeyboard
          setKeyboardOpen={setKeyboardOpen}
          keyboardField={keyboardField}
          word={keyboardWord}
          setWord={setKeyboardWord}
          updateKeyboardField={updateKeyboardField}
        />
      ) : null}
    </div>
  );
}
