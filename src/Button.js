export default function Button(props) {
  return (
    <button
      className={
        props.text === "AC" || props.text === "DEL" || props.text === "="
          ? `${props.classname} span-two`
          : props.classname
      }
      onClick={props.btnSelector}
    >
      {props.text}
    </button>
  );
}
