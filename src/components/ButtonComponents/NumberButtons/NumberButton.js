import React, {useState} from "react";

import {numbers} from "../../../data.js";

const NumberButton = (props) => {
  const [numberButtonState, setNumberButtonState] = useState(numbers);

  if (props.number === "0") {
    return <button className="zero">{props.number}</button>
  } else {
    return <button>{props.number}</button>
  }
};

export default NumberButton;
