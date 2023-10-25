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
      {props.selected.type !== "~" ? (
        <form className="select-form">
          {props.mapData.tool === "create" ? (
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <EntityTypeButton
                type={"wall"}
                title={`wall`}
                mapData={props.mapData}
                setMapData={props.setMapData}
                selected={props.selected}
                entityKey={entityKey}
              />
              <EntityTypeButton
                type={"zombie"}
                title={`zombie`}
                mapData={props.mapData}
                setMapData={props.setMapData}
                selected={props.selected}
                entityKey={entityKey}
              />
            </div>
          ) : (
            <div>
              <input
                type="text"
                maxLength={20}
                title="20 character maximum"
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
            </div>
          )}
        </form>
      ) : (
        <p
          style={{
            fontSize: "1.2rem",
            textTransform: "uppercase",
            marginBottom: "2.4rem",
            letterSpacing: "2px",
            fontWeight: "800",
            color: "hsl(0, 0%, 40%)",
          }}
        >
          Nothing is selected. Try creating a piece.
        </p>
      )}
      {keyboardOpen ? (
        <MobileKeyboard
          setKeyboardOpen={setKeyboardOpen}
          keyboardField={keyboardField}
          keyboardWord={keyboardWord}
          setKeyboardWord={setKeyboardWord}
          updateKeyboardField={updateKeyboardField}
        />
      ) : null}
    </div>
  );
}
