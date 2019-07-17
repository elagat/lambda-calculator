import React, {useState} from "react";

import Numbers from "../ButtonComponents/NumberButtons/Numbers.js";
import Operators from "../ButtonComponents/OperatorButtons/Operators.js";
import Specials from "../ButtonComponents/SpecialButtons/Specials.js";

const Display = () => {
  const [displayState, setDisplayState] = useState(0);

  return (
    <div className="display-container">
      <p>Hello</p>
    </div>
  );
};

export default Display;
