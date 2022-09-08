import React from "react";
import Animate from "../screens/Animate";
import Keyframes from "../screens/Keyframes";
import Transition from "../screens/Transition";
import Variants from "../screens/Variants";

function Animation() {
  return (
    <div className="App">
      <Animate />
      <Transition />
      <Keyframes />
      <Variants />
    </div>
  );
}

export default Animation;
