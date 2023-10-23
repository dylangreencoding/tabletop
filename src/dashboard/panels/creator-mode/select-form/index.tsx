import { getXYStr, getSelected } from "../../../utilities/get-selected";
import SelectTypeButton from "./select-type-button";

interface Props {
  mapData: any;
  setMapData: Function;
}

export default function SelectForm(props: Props) {
  const selected = getSelected(
    props.mapData.selected.x,
    props.mapData.selected.y,
    props.mapData
  );

  return (
    <div>
      {selected.name !== "~" ? (
        <form className="create-form">
          {" "}
          <div>
            <label>Type </label>
            {selected.type}
          </div>
          <div className="flex space-around">
            <SelectTypeButton
              type={"empty"}
              title={`Create empty spaces with descriptions`}
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={selected}
            />
            <SelectTypeButton
              type={"wall"}
              title={`Create walls`}
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={selected}
            />
            <SelectTypeButton
              type={"creature"}
              title={`Create creatures`}
              mapData={props.mapData}
              setMapData={props.setMapData}
              selected={selected}
            />
          </div>
          <div>
            <label htmlFor="name-attribute">Name </label> {selected.name}
          </div>
          <input
            name="name-attribute"
            id="name-attribute"
            type="text"
            required
            title="Name this"
            placeholder={"Name this"}
            value={selected.name}
            onChange={(e) => {
              e.preventDefault();
              const mapData = props.mapData;
              props.mapData.entities[
                getXYStr(props.mapData.selected.x, props.mapData.selected.y)
              ].name = e.target.value;
              props.setMapData({ ...props.mapData, mapData });
            }}
          ></input>
          <div>
            <label htmlFor="name-attribute">Description </label>
            {selected.text}
          </div>
          <input
            name="text-attribute"
            id="text-attribute"
            type="text"
            required
            title="Give a description"
            placeholder="Give a description"
            value={selected.text}
            onChange={(e) => {
              e.preventDefault();

              const mapData = props.mapData;
              props.mapData.entities[
                getXYStr(props.mapData.selected.x, props.mapData.selected.y)
              ].text = e.target.value;
              props.setMapData({ ...props.mapData, mapData });
            }}
          ></input>
        </form>
      ) : (
        <span>Nothing here...</span>
      )}
    </div>
  );
}
