interface Props {
  type: string;
  title: string;
  entityTemplate: any;
  setEntityTemplate: Function;
}

export default function CreateTypeButton(props: Props) {
  return (
    <button
      className={`entity-type-button ${
        props.entityTemplate.type === props.type
          ? "entity-type-button-active"
          : ""
      }`}
      type="button"
      title={props.title}
      onClick={(e) => {
        e.preventDefault();
        const entityTemplate = props.entityTemplate;
        props.entityTemplate.type = props.type;
        props.entityTemplate.name = props.type;

        props.setEntityTemplate({ ...props.entityTemplate, entityTemplate });
      }}
    >
      {props.type}
    </button>
  );
}
