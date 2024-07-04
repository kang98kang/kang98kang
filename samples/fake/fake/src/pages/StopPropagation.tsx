import { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    console.log("click event bubbles on <div>");
  };
  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse click ocuures on <button> and call stopPropagation");
    e.stopPropagation();
  };
  return (
    <div onClick={onDivClick}>
      <p>stopPropagation</p>
      <button onClick={onButtonClick}>
        Click Me and stop event Propagation
      </button>
    </div>
  );
}
