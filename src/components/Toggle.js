import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      style={isOn ? { background: "red" } : { background: "white" }}
      onClick={() => {
        setIsOn(isOn ? false : true);
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
