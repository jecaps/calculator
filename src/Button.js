export default function Button(props) {
  return (
    <button
      className={
        props.text === "AC" || props.text === "DEL" || props.text === "="
          ? `${props.classname} col-span-2 bg-white-trans cursor-pointer text-2 text-dark-blue border border-white hover:bg-white-hover`
          : `${props.classname} bg-white-trans cursor-pointer text-2 text-dark-blue border border-white hover:bg-white-hover`
      }
      onClick={props.btnSelector}
    >
      {props.text}
    </button>
  );
}
