import React, { useState } from "react";
import Timer from "./components/Timer";

function UseEffectApp2() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer); //누를때마다 상태를 바꿔주는(false -> true)
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
}

export default UseEffectApp2;
